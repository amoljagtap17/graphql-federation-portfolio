# Multi-stage build for Node.js NestJS application

# Development stage
FROM node:20-alpine as development

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package files first for better Docker layer caching
COPY package*.json ./
COPY tsconfig*.json ./
COPY nest-cli.json ./

# Install all dependencies (including dev dependencies for development)
RUN npm ci

# Copy only the specific app and shared libs
COPY apps/asset-classification-subgraph/ ./apps/asset-classification-subgraph/
COPY libs/ ./libs/

# Expose the port that the application will run on
EXPOSE 3001

# Start the application in development mode
CMD ["npm", "run", "start:dev", "asset-classification-subgraph"]

# Build stage
FROM node:20-alpine as build

WORKDIR /usr/src/app

# Copy package files and config files
COPY package*.json ./
COPY tsconfig*.json ./
COPY nest-cli.json ./

# Install all dependencies (including dev dependencies needed for build)
RUN npm ci

# Copy only the specific app and shared libs
COPY apps/asset-classification-subgraph/ ./apps/asset-classification-subgraph/
COPY libs/ ./libs/

# Build the application
RUN npm run build asset-classification-subgraph

# Production stage
FROM node:20-alpine as production

WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production && npm cache clean --force

# Copy built application from build stage
COPY --from=build /usr/src/app/dist ./dist

# Expose the port that the application will run on
EXPOSE 3001

# Start the application in production mode
CMD ["node", "dist/apps/asset-classification-subgraph/main.js"]
