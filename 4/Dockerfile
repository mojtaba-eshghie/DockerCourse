FROM node:14.5.0-alpine3.11

WORKDIR /usr/app

COPY ./package.json ./
RUN npm install

COPY ./ ./

CMD [ "npm", "start" ]