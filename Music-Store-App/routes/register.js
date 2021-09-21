const express = require("express");

const router = express.Router();
const registerController = require("../controllers/register");

console.log('registerroutes');
router.post('/add', registerController.add);
router.get('/', registerController.getAddForm);

module.exports = router;