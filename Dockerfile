# Stage 1: Build
FROM node:22-alpine AS builder

# Instalar pnpm
RUN corepack enable && corepack prepare pnpm@10.14.0 --activate

WORKDIR /app

# Copiar arquivos de dependências
COPY package.json pnpm-lock.yaml ./

# Instalar dependências
RUN pnpm install --frozen-lockfile

# Copiar código fonte
COPY . .

# Build do cliente (SPA) e do servidor
RUN pnpm build

# Stage 2: Produção
FROM node:22-alpine AS production

WORKDIR /app

# Copiar apenas o necessário para produção
COPY package.json pnpm-lock.yaml ./

# Instalar pnpm e apenas dependências de produção
RUN corepack enable && corepack prepare pnpm@10.14.0 --activate \
    && pnpm install --prod --frozen-lockfile

# Copiar artefatos de build
COPY --from=builder /app/dist ./dist

# Porta padrão
ENV PORT=6785
EXPOSE 6785

# Healthcheck
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://localhost:6785/api/ping || exit 1

# Iniciar servidor de produção
CMD ["node", "dist/server/node-build.mjs"]
