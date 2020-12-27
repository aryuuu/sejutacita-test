const express = require('express');
const { assertNotNull } = require('app/utils/validator');
const authenticationHandler = require('app/handlers/authentication');

const router = express();

router.post('/', async (req, res, next) => {
  try {
    assertNotNull(req.body, 'refresh_token');

    const result =  await authenticationHandler
      .refresh(req.body.refresh_token);
    
    res.json({ data: result });
  } catch (error) {
    next(error);
  }
});

module.exports = router;