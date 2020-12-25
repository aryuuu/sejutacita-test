const express = require('express');
const authenticate = require('./authenticate');
const authorize = require('./authorize');
const verify = require('./verify');
const router = express();

router.use('/authenticate', authenticate);
router.use('/authorize', authorize);
router.use('/verify', verify);

module.exports = router;