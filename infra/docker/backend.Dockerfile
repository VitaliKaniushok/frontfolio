# ---- BASE ----
FROM node:22.13.1-alpine AS base
WORKDIR /app

RUN apk add --no-cache libc6-compat bash git python3 make g++ linux-headers
RUN npm install -g pnpm@10.32.1 turbo
RUN pnpm config set store-dir /pnpm-store

# ---- PRUNER ----
FROM base AS pruner
WORKDIR /app

COPY . .

RUN turbo prune --scope=@devfolio/backend --docker

# ---- INSTALL ----
FROM base AS installer
WORKDIR /app

COPY --from=pruner /app/out/json/ .
COPY --from=pruner /app/out/pnpm-lock.yaml ./pnpm-lock.yaml

RUN pnpm install --frozen-lockfile

# ---- BUILD ----
FROM base AS builder
WORKDIR /app

COPY --from=pruner /app/out/full/ .
COPY --from=installer /app/node_modules ./node_modules

RUN pnpm turbo run build --filter=@devfolio/backend...

# ---- RUNNER ----
FROM node:22.13.1-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN apk add --no-cache libc6-compat
RUN npm install -g pnpm@10.32.1

COPY --from=builder /app/apps/backend/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/backend/package.json ./package.json

EXPOSE 3002
CMD ["pnpm", "start:prod"]