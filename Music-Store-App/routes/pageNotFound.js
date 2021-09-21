const express = require("express");
const router = express.Router();
const pageNotFoundController = require("../controllers/pageNotFound");

router.get('/', pageNotFoundController.getForm);
module.exports = router;