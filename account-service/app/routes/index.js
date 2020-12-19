const express = require('express');
const userRouter = require('app/routes/user');

const router = express();

router.use('/', userRouter);

module.exports = router;