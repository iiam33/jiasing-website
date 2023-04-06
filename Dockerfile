FROM node:lts-alpine

RUN npm install -g http-server

WORKDIR /app

COPY . .

WORKDIR /app/jas-website-react

RUN npm install

RUN npm run build

CMD ["npm", "start"]