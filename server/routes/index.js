var express = require('express');
var router = express.Router();
const { login } = require('../controllers/userControllers');

// login route
router.get('/', login);

module.exports = router;
