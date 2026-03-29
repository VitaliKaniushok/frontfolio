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

ARG APP_NAME
ARG APP_DIR

# tylko potrzebne paczki
RUN turbo prune --scope=${APP_NAME} --docker

# ---- INSTALLER ----
FROM base AS installer
WORKDIR /app

COPY --from=pruner /app/out/json/ .
COPY --from=pruner /app/out/pnpm-lock.yaml ./pnpm-lock.yaml

RUN pnpm install --frozen-lockfile

# ---- BUILDER ----
FROM base AS builder
WORKDIR /app

ARG APP_NAME
ARG APP_DIR
ARG PORTFOLIO_URL
ENV PORTFOLIO_URL=$PORTFOLIO_URL

COPY --from=pruner /app/out/full/ .
COPY --from=installer /app/node_modules ./node_modules

RUN pnpm turbo run build --filter=${APP_NAME}...

# ---- RUNNER ----
FROM node:22.13.1-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN apk add --no-cache libc6-compat
RUN npm install -g pnpm@10.32.1

ARG APP_DIR

#  tylko runtime!
COPY --from=builder /app/apps/${APP_DIR}/.next ./.next
COPY --from=builder /app/apps/${APP_DIR}/public ./public
COPY --from=builder /app/apps/${APP_DIR}/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000
CMD ["pnpm", "start:prod"]