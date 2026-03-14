# Frontfolio

A modern portfolio built with a microfrontend architecture in a monorepo setup. The project showcases fullstack skills and is prepared for future expansion with a backend API and Docker-based deployment.

## About The Project

Frontfolio is based on:

- Next.js (application hosting and rendering)
- Module Federation (host and remote split)
- Turborepo (monorepo orchestration and pipelines)
- TypeScript + ESLint + Prettier
- pnpm workspaces

Project goals:

- demonstrate practical microfrontend architecture
- keep the codebase scalable and maintainable
- stay ready for backend integration and containerized deployment

## Architecture

The project is organized as a monorepo with multiple apps and shared packages.

### Applications

- `apps/shell` - host application (main container)
- `apps/portfolio` - remote application exposing the portfolio widget (`PortfolioWidget`)
- `apps/test-app` - sandbox and testing area

### Shared Packages

- `packages/config` - shared configuration (ESLint, TypeScript, Prettier)
- `packages/config/federation/shared.ts` - shared Module Federation dependencies

## Module Federation

Federation setup:

- host (`shell`) consumes remote `portfolio`
- remote (`portfolio`) exposes `./PortfolioWidget`

Key details:

- `portfolio` dev port: `3001`
- `shell` default dev port: `3000`
- remote URL is configurable via the `PORTFOLIO_URL` environment variable

Example:

- `PORTFOLIO_URL=http://localhost:3001`

## Requirements

- Node.js 20+
- pnpm 10+

## Quick Start

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Start Development Environment

```bash
pnpm dev
```

This runs the development pipeline through Turborepo for workspace applications.

### 3. Run A Single Application

```bash
pnpm --filter shell dev
pnpm --filter portfolio dev
```

## Available Commands

From the repository root:

```bash
pnpm dev
pnpm build
pnpm lint
pnpm type-check
```

## Repository Structure

```text
.
|- apps/
|  |- shell/
|  |- portfolio/
|  \- test-app/
|- packages/
|  \- config/
|- package.json
|- pnpm-workspace.yaml
\- turbo.json
```

## Roadmap

### Backend (Planned)

The project is intended to be extended with a backend layer, for example:

- REST API for portfolio data (projects, experience, contact)
- admin panel for content management
- authentication and endpoint protection
- database integration (PostgreSQL)

### Docker (Planned)

Planned containerization setup:

- separate container for `shell`
- separate container for `portfolio`
- backend API container
- optional reverse proxy (Nginx)
- single `docker-compose.yml` to run the entire stack

## Code Quality

The project includes:

- linting (ESLint)
- formatting (Prettier)
- static type checking (TypeScript)

## Author

MSM Vitali

## License

ISC
