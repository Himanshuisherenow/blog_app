const express = require('express');
const {handleGeneratedNewShortURL} = require("../controllers/url")
const router =  express.Router();

router.post('/',handleGeneratedNewShortURL)


module.exports = router