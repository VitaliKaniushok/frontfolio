# Devfolio

Devfolio is a modern, production-ready monorepo platform built with a microfrontend architecture. It showcases scalable fullstack engineering patterns, including cross-app sharing, strict architectural boundaries, and containerized deployment. The project is designed for maintainability, extensibility, and real-world demonstration of advanced frontend and backend integration.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Monorepo Structure](#monorepo-structure)
- [Applications](#applications)
- [Shared Packages](#shared-packages)
- [Module Federation](#module-federation)
- [Backend API](#backend-api)
- [Docker & Deployment](#docker--deployment)
- [Development Workflow](#development-workflow)
- [Code Quality & Conventions](#code-quality--conventions)
- [Helpful Commands](#helpful-commands)
- [License](#license)

---

## Project Overview

**Tech Stack:**

- Next.js (frontend, SSR, hosting)
- Module Federation (`@module-federation/nextjs-mf`)
- Turborepo (monorepo orchestration)
- TypeScript, ESLint, Prettier
- pnpm workspaces
- NestJS (backend API, planned)

**Key Goals:**

- Demonstrate practical, maintainable microfrontend architecture
- Enable scalable cross-app sharing and strict boundaries
- Support easy backend/API integration
- Ready for containerized (Docker) deployment

---

## Monorepo Structure

```
apps/
   shell/        # Host Next.js app (main container)
   portfolio/    # Remote Next.js app (PortfolioWidget)
   backend/      # NestJS backend API (planned/early)
packages/
   config/       # Shared config (ESLint, TypeScript, Prettier, federation)
   constants/    # Shared constants (navigation, links)
   contracts/    # Shared types/interfaces
   i18n/         # Internationalization resources
   styles/       # Shared SCSS design tokens, mixins, base styles
   ui/           # Shared React UI components
   utils/        # Shared utility functions
infra/
   docker/       # Docker files for all services
docker-compose.yml         # Production stack for local inspection
docker-compose.prod.yml    # Production stack (used in server)
docker-compose.dev.yml     # Dev stack (with Postgres)
pnpm-workspace.yaml        # Workspace config
turbo.json                 # Turborepo pipeline
```

---

## Applications

- **apps/shell**: Host Next.js app, consumes remote widgets via Module Federation
- **apps/portfolio**: Remote Next.js app, exposes `portfolio`
- **apps/backend**: (Planned) NestJS backend API for portfolio data, authentication, admin

---

## Shared Packages

- **config**: Centralized config for linting, formatting, federation, TypeScript
- **constants**: Navigation, section links, social links
- **contracts**: Types/interfaces for cross-app data
- **i18n**: Internationalization resources
- **styles**: SCSS tokens, mixins, base styles
- **ui**: Shared React UI components
- **utils**: Shared utility functions

---

## Module Federation

- Host (`shell`) consumes remote (`portfolio`) via Module Federation
- Shared dependencies (React, ReactDOM, etc.) are singletons, configured in `packages/config/federation/shared.ts`
- Federation wiring is managed in each app’s `next.config.ts`
- Remote URL is set via `NEXT_PUBLIC_PORTFOLIO_URL`

**Federation Rules:**

- No direct imports between host and remote apps
- Shared code lives in `packages/*` for true cross-app reuse
- See `.vscode/rules/` for enforced boundaries and best practices

---

## Backend API (Planned)

- `apps/backend`: NestJS REST API for portfolio data, authentication, admin (planned/early)
- Database: PostgreSQL (via Docker)
- Example env: `DATABASE_URL=postgres://postgres:postgres@postgres:5432/frontfolio`

---

## Docker & Deployment

- Each app has its own Dockerfile (`infra/docker/`)
- `docker-compose.yml` runs the full production stack: shell, portfolio, backend, postgres
- `docker-compose.dev.yml` for local development with Postgres
- `docker-compose.prod.yml` – production stack with prebuilt images and environment variables (used in server)

**Production:**

```bash
docker-compose -f docker-compose.yml up --build -d
```

**Development:**

```bash
docker-compose -f docker-compose.dev.yml up
```

### Nginx (infra/nginx/nfinx.prod.conf)

- Nginx handles routing to individual services:

- HTTP → HTTPS redirect
- `/portfolio/` → portfolio app (Next.js, port 3001)
- `/api/` → backend (NestJS, port 3002)
- `/` → shell (Next.js, port 3000)
- `/portfolio/_next/static/chunks/remoteEntry.js` – module federation support

**Configs:**

- `/infra/nginx/nginx.conf` configuration for run local
- `/infra/nginx/nginx.prod.conf` configuration for run in server (VPS)

### CI/CD (GitHub Actions)

The CI/CD process is automated using GitHub Actions:

- Dependency installation (`pnpm install`)
- Linting (`pnpm lint`)
- Type-check (`pnpm type-check`)
- Build (`pnpm build`)
- Building and pushing Docker images to DockerHub
- Deploying to a VPS via SSH (docker compose pull & up)

`.github/workflows/ci.yml` config CI/CD workflow

---

## Development Workflow

1. **Install dependencies:**
   ```bash
   pnpm install
   ```
2. **Start all apps (dev mode):**
   ```bash
   pnpm dev
   ```
3. **Run a single app:**
   ```bash
   pnpm --filter @devfolio/shell dev
   pnpm --filter @devfolio/portfolio dev
   pnpm --filter @devfolio/backend dev
   ```
4. **Lint, type-check, format:**
   ```bash
   pnpm lint
   pnpm type-check
   pnpm format
   pnpm format:fix
   ```
5. **Build for production:**
   ```bash
   pnpm build
   ```

---

## Code Quality & Conventions

- Linting: ESLint
- Formatting: Prettier
- Type checking: TypeScript
- All config is centralized in `packages/config`
- Follows SOLID, microfrontend, and Module Federation best practices (see `.vscode/rules/`)

---

## Helpful Commands

See [`HELPFUL_COMMANDS.md`](HELPFUL_COMMANDS.md) for common scripts and Docker commands.

---

## License

ISC
