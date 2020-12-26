const express = require('express');

const { ACCOUNT_SERVICE_URL } = require('app/configs');
const authHandler = require('app/middlewares/auth-handler');

const router = express();
const proxy = require('app/utils/proxy');
const accountProxy = proxy.create(ACCOUNT_SERVICE_URL);

router.get('/:identifier', authHandler(true), (req, res, next) => {
  try {
    accountProxy.web(req, res);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', authHandler(true, ['admin']), (req, res, next) => {
  try {
    accountProxy.web(req, res);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', authHandler(true, ['admin']), (req, res, next) => {
  try {
    accountProxy.web(req, res);
  } catch (error) {
    next(error);
  }
});

router.post('/', authHandler(true, ['admin']), (req, res, next) => {
  try {
    accountProxy.web(req, res);
  } catch (error) {
    next(error);
  }
});

router.get('/', authHandler(true), (req, res, next) => {
  try {
    accountProxy.web(req, res);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
