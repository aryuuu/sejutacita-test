FROM node:14.4.0-stretch

WORKDIR /auth-service

COPY ./auth-service/package.json /auth-service/package.json
COPY ./auth-service /auth-service

RUN npm i

CMD ["npm", "run", "start"]
