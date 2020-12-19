const express = require('express');
const bodyParser = require('body-parser');

const router = require('app/routes');
const config = require('app/configs');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);

app.listen(config.PORT, () => {
  console.log(`Account service is listening on port ${config.PORT}`);
});

module.exports = app;