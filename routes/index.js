const express = require('express');

const router = express.Router();


router.use('/api', require('./Api'));

module.exports = router;