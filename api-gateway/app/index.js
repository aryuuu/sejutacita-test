const express = require('express');
const bodyParser = require('body-parser');

const router = require('app/routes');
const config = require('app/configs');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);
app.use(require('app/middlewares/error-handler'));

app.listen(config.PORT, () => {
  console.log(`API Gateway is listening on port ${config.PORT}`);
});

module.exports = app;