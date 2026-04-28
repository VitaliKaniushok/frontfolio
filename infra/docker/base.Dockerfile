# ---- BUILDER ----
FROM node:22.13.1-alpine AS builder

WORKDIR /app
ENV NODE_ENV=development

ARG APP_NAME
ARG APP_DIR
ARG NEXT_PUBLIC_PORTFOLIO_URL
ENV NEXT_PUBLIC_PORTFOLIO_URL=$NEXT_PUBLIC_PORTFOLIO_URL

# Kopiujemy całe repo tylko do builda
COPY . .

# Instalujemy wszystkie dependencies
RUN npm install -g pnpm@10.32.1
RUN pnpm install --frozen-lockfile --prod=false

# Build tylko wybranej aplikacji
RUN pnpm turbo run build --filter=${APP_NAME}...

# ---- RUNNER (ultra-lekka produkcja) ----
FROM node:22.13.1-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production

# System dependencies
RUN apk add --no-cache libc6-compat

ARG APP_DIR

# PNPM runtime
RUN npm install -g pnpm@10.32.1

# Copy tylko to, co jest potrzebne do uruchomienia Next.js
COPY --from=builder /app/apps/${APP_DIR}/.next ./.next
COPY --from=builder /app/apps/${APP_DIR}/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/${APP_DIR}/public ./public

WORKDIR /app

CMD ["pnpm", "start:prod"]