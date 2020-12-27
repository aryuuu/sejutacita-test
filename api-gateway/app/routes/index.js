const express = require('express');
const authHandler = require('app/handlers/auth');
const accountRouter = require('app/routes/account');
const authHandlerMiddleware = require('app/middlewares/auth-handler');

const router = express();

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

router.post('/refresh', authHandlerMiddleware(false), async (req, res, next) => {
  try {
    const result = await authHandler.refresh(req.body.refresh_token);

    res.json({ data: result });
  } catch (error) {
    next(error);
  }
})

router.use('/account', accountRouter);

router.all('*', (req, res) => {
  res.status(404).json({
    message: 'Not found :('
  });
});

module.exports = router;