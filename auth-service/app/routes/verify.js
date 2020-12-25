const express = require('express');
const { assertNotNull } = require('app/utils/validator');
const authenticationHandler = require('app/handlers/authentication');

const router = express();

router.post('/', async (req, res, next) => {
  try {
    assertNotNull(req.body, 'token');

    const result =  await authenticationHandler
      .verify(req.body.token);
    
    res.json({ data: result });
  } catch (error) {
    next(error);
  }
});

module.exports = router;