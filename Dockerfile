# ──────────────────────────────────────────────────────────────
# Framework : Next.js 15 (static export → dist/)
# Pkg mgr  : npm (package-lock.json)
# Runtime  : nginx:stable-alpine serving static files
#
# Build:  docker build -t hephex-website .
# Run:    docker run -p 8080:80 hephex-website
# ──────────────────────────────────────────────────────────────

# ── Stage 1: install dependencies ────────────────────────────
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# ── Stage 2: build static site ──────────────────────────────
FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ── Stage 3: production runtime ─────────────────────────────
FROM nginx:stable-alpine AS runtime
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
