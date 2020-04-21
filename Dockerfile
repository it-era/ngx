ARG NODE_VERSION=12

## STEP 1 Install dependencies and build project into static files
FROM node:${NODE_VERSION}-alpine as builder

LABEL maintainer="Quentin Petel / IT-era <contact@it-era.dev>"

WORKDIR /app

# Install app dependencies first (allows node_modules caching)
COPY package.json package-lock.json  ./
RUN npm install

# Copy project files
COPY . ./

# Build project
RUN npm run build:ssr


## STEP 2 Build a small node express image to serve ssr content
FROM node:${NODE_VERSION}-alpine as server

LABEL maintainer="Quentin Petel / IT-era <contact@it-era.dev>"

WORKDIR /app

# Copy dist folder from previous stage
COPY package.json angular.json  ./
COPY --from=builder /app/dist/ ./dist/

# Serve files through node
CMD ["npm", "run", "serve:ssr"]