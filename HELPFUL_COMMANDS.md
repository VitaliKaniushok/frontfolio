Remove-Item -Recurse -Force apps/portfolio/.next;
pnpm --filter @frontfolio/portfolio dev
pnpm install 2>&1
turbo build --filter=web

# === Running a separate microfrontend without Docker ====

pnpm -w --filter=@frontfolio/shell run type-check

# === Running with Docker ====

# Shell

docker build \
 -f infra/docker/base.Dockerfile \
 --build-arg APP_NAME=@frontfolio/shell \
 --build-arg APP_DIR=shell \
 -t shell-app .

# Portfolio

docker build \
 -f infra/docker/base.Dockerfile \
 --build-arg APP_NAME=@frontfolio/portfolio \
 --build-arg APP_DIR=portfolio \
 -t portfolio-app .

# Docker reset

docker builder prune --all --force

# 1. clear build cache (with -a option it removes postgres data)

docker builder prune -a

# 2. (optional) remove everything

docker system prune -af

# 3. build from scratch

# Command that builds and cleans only if an error occurs

docker compose up --build || docker builder prune -f

# ===== If the disk is full

wsl --shutdown

diskpart

select vdisk file="C:\Users\msm_vk\AppData\Local\Docker\wsl\data\ext4.vhdx"
attach vdisk readonly
compact vdisk
detach vdisk
exit

# lockfile update

pnpm install --lockfile-only

# Removing node_modules and lockfile in the container

docker-compose -f docker-compose.dev.yml down --rmi all --volumes

<!--
A short priority map in Copilot Chat looks like this, from highest to lowest:

 1. Platform security rules and policies
 2. Agent system instructions
 3. Developer instructions (mode, tools, restrictions)
 4. Repo instructions, e.g. copilot-instructions.md
 5. Local project instructions, e.g. README.md and other rules
 6. Current user request
 7. Default model behaviors
-->
