# Stage 1: Build Stage (client build)
FROM oven/bun:1.3-alpine AS builder

WORKDIR /app

# Install root dependencies (Express etc.)
COPY package*.json ./
RUN bun install

# Copy client separately and install client dependencies + build
COPY client ./client
WORKDIR /app/client
RUN bun install && bun run build

# Move built files to /app/dist in the builder stage
RUN mkdir -p /app/dist && mv ../dist/* /app/dist/

# Return to root app dir
WORKDIR /app

# Stage 2: Production Stage
FROM oven/bun:1.3-alpine

# Install for alpine
RUN apk update --no-cache && \
    apk add --no-cache curl tzdata

# Set timezone data
ENV TZ=Asia/Kuala_Lumpur

# Set working directory
WORKDIR /app

# Install only production dependencies
COPY package*.json ./
RUN bun install --production

# Copy backend source code (everything except what's ignored)
COPY . .

# Copy built dist files from builder
COPY --from=builder /app/dist /app/dist

# Expose your server port
EXPOSE 5000

# Start your app
CMD ["bun", "start"]