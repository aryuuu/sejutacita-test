FROM node:14.4.0-stretch

WORKDIR /account-service

COPY ./account-service/package.json /account-service/package.json
COPY ./account-service /account-service

RUN npm i

CMD ["npm", "run", "start"]
