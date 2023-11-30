var express = require('express');
var router = express.Router();
const fileUpload = require('express-fileupload');
const { uploadPDF, deleteDoc } = require('../controllers/userControllers');

router.post('/upload', fileUpload({createParentPath: true}),uploadPDF);

module.exports = router;
