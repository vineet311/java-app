FROM node:16161616161616161616161616161616-alpine
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "start"]

