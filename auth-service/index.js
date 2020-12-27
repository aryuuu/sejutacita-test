require('app-module-path').addPath(__dirname);
require('dotenv').config()
require('app');

const mongoose = require('mongoose');

const cfg = require('app/configs');

mongoose
  .connect(
    `${cfg.MONGO_HOST}/${cfg.MONGO_DATABASE}?${cfg.MONGO_OPTIONS}`,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true
    }
  )
  .then(async () => {
    await require('app');
  })
  .catch(err => {
    console.log(err);
  });

