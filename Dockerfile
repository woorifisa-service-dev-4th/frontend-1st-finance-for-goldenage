# Base image
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies and build the project
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install

# Copy project files
COPY . .

# Build the project for production
RUN pnpm run build

# Use a lightweight web server to serve the built files
FROM nginx:1.25-alpine AS production

# Set working directory in the container
WORKDIR /usr/share/nginx/html

# Copy built files from the builder stage
COPY --from=builder /app/dist .

# Expose the port the app runs on
EXPOSE 3000

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
