FROM node:20.15.0 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY . .

RUN npm run build

FROM node:20.15.0 AS runner
WORKDIR /app

COPY --from=builder /app/package.json .
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next

EXPOSE 3000

ENV NODE_ENV=production

CMD ["npm", "start"]
