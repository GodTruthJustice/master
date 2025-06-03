# Stage 1: Install dependencies
FROM node:20-alpine AS deps
WORKDIR /app

RUN rm -rf .next
COPY package.json package-lock.json* ./
RUN npm install -g npm@latest
RUN npm install 

RUN npm install clsx

# Stage 2: Build app
FROM node:20-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build  && ls -la .next && ls -la .next/BUILD_ID

# Stage 3: Production runtime
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/styles ./styles
COPY --from=builder /app/postcss.config.js ./postcss.config.js
COPY --from=builder /app/tailwind.config.js ./tailwind.config.js

EXPOSE 3000

# Ensure start script is defined in package.json
CMD ["npm", "start"]