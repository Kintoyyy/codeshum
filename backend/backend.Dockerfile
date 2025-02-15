# Use Node.js LTS for backend
FROM node:20.15.0

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY . .

EXPOSE 5000

# ENV NODE_ENV=production

CMD ["node", "app.js"]
