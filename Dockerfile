# Stage 1: Build Stage (client build)
FROM oven/bun:1.3-alpine AS builder

WORKDIR /app

# Install root dependencies (Express etc.) exactly as locked
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Copy client separately and install client dependencies + build
COPY client ./client
WORKDIR /app/client
RUN bun install --frozen-lockfile && bun run build

# vite outDir is '../dist', so the build already lands in /app/dist

# Return to root app dir
WORKDIR /app

# Stage 2: Production Stage
FROM oven/bun:1.3-alpine

# Install for alpine + upgrade base packages (fixes CVEs in shipped OpenSSL etc.)
RUN apk update --no-cache && \
    apk upgrade --no-cache && \
    apk add --no-cache curl tzdata

# Set timezone data
ENV TZ=Asia/Kuala_Lumpur

# Set working directory
WORKDIR /app

# Install only production dependencies exactly as locked
COPY package.json bun.lock ./
RUN bun install --production --frozen-lockfile

# Copy only the server; env comes from the host at runtime, never baked into the image
COPY server.js ./

# Copy built dist files from builder
COPY --from=builder /app/dist /app/dist

# Expose your server port
EXPOSE 5000

# Start your app
CMD ["bun", "start"]