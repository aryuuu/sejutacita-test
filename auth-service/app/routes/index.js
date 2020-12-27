const express = require('express');
const authenticate = require('./authenticate');
const authorize = require('./authorize');
const refresh = require('./refresh');
const verify = require('./verify');

const router = express();

router.use('/authenticate', authenticate);
router.use('/authorize', authorize);
router.use('/refresh', refresh);
router.use('/verify', verify);

module.exports = router;