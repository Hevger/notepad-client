FROM node:14.17-slim

WORKDIR /app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install --production
RUN npm test

COPY . .

RUN npm run build

FROM nginx:alpine

# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf *

# Copy static assets from builder stage
COPY --from=0 /app/build .

# Fix 404 Not Found
WORKDIR /etc/nginx
RUN rm -rf nginx.conf
COPY ./nginx.conf ./

# Entry point when Docker container has started
ENTRYPOINT ["nginx", "-g", "daemon off;"]
