const express = require('express');
const { assertNotNull } = require('app/utils/validator');
const authenticationHandler = require('app/handlers/authentication');

const router = express();

router.post('/', async (req, res, next) => {
  try {
    assertNotNull(req.body, 'username');
    assertNotNull(req.body, 'password');

    const result =  await authenticationHandler
      .authenticateByUsername(req.body.username, req.body.password);
    
    res.json({ data: result });
  } catch (error) {
    next(error);
  }
});

module.exports = router;