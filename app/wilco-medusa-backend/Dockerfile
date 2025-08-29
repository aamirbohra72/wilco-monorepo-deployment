FROM node:20-alpine

WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy only package files for dependency install layer
COPY package*.json ./

# Install dependencies using pnpm
RUN pnpm install

# Copy the rest of your app
COPY . .

EXPOSE 8080
CMD ["node", "index.js"]
