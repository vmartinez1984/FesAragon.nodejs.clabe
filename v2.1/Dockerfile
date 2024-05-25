FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev

COPY . .

EXPOSE 3002
CMD [ "node", "app.js" ]

# docker build -t nodejs_clabe_v2 .