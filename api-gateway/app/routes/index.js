const express = require('express');
const httpProxy = require('http-proxy');

const { ACCOUNT_SERVICE_URL } = require('app/configs');
const authHandler = require('app/handlers/auth');
const authHandlerMiddleware = require('app/middlewares/auth-handler');

const router = express();
const accountRouter = require('app/routes/account');

router.get('/_ping', authHandlerMiddleware(true), (req, res, next) => {
  try {
    res.json({ message: 'API Gateway'});
  } catch (error) {
    next(error);
  }
});

router.post('/login', authHandlerMiddleware(false), async (req, res, next) => {
  try {
    const result = await authHandler.authenticate(
      req.body.username, 
      req.body.password
    );

    res.json({ data: result });
  } catch (error) {
    next(error);
  }
});

router.use('/account', accountRouter);

router.all('*', (req, res) => {
  res.status(404).json({
    message: 'Not found :('
  });
});

module.exports = router;