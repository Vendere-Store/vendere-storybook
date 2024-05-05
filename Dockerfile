# Start with a Node base image
FROM node:20-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy the rest of your application code
COPY . .

# Build your Storybook static files
RUN yarn build-storybook

# Use nginx to serve the static Storybook
FROM nginx:alpine
COPY --from=builder /app/storybook-static /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
