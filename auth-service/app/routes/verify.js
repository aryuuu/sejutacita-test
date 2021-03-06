const express = require('express');
const { assertNotNull } = require('app/utils/validator');
const authenticationHandler = require('app/handlers/authentication');

const router = express();

router.post('/', async (req, res, next) => {
  try {
    assertNotNull(req.body, 'access_token');
    const result =  await authenticationHandler
      .verify(req.body.access_token);
    
    res.json({ data: result });
  } catch (error) {
    next(error);
  }
});

module.exports = router;