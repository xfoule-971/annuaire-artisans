const express = require('express');
const router = express.Router();

router.use('/artisans', require('./artisans'));
router.use('/categories', require('./categories'));
router.use('/specialites', require('./specialites'));
router.use('/top', require('./top'));
router.use('/contact', require('./contact'));

module.exports = router;
