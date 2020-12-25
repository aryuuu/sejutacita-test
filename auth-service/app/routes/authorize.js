const express = require('express');
const authorizationHandler = require('app/handlers/authorization');

const router = express();

router.get('/', (req, res, next) => {
  try {
    res.json({ message: 'authorization'});
  } catch (error) {
    next(error);
  }
})

module.exports = router;