require('app-module-path').addPath(__dirname);
require('dotenv').config();

const seeder = require('app/seeders');

const mongoose = require('mongoose');

const cfg = require('app/configs');

mongoose
  .connect(
    `mongodb://${cfg.MONGO_HOST}/${cfg.MONGO_DATABASE}?${cfg.MONGO_OPTIONS}`,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true
    }
  )
  .then(async () => {
    await seeder();
    require('app');
  })
  .catch(err => {
    console.log(err);
  });

