const express = require("express");

const router = express.Router();
const loginController = require("../controllers/login");

router.get('/logout', loginController.logout);
router.get('/', loginController.getAddForm);

module.exports = router;