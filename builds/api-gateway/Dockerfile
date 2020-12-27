FROM node:14.4.0-stretch

WORKDIR /api-gateway

COPY ./api-gateway/package.json /api-gateway/package.json
COPY ./api-gateway /api-gateway

RUN npm i

CMD ["npm", "run", "start"]
