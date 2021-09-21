const express = require("express");

const router = express.Router();
const myCartController = require("../controllers/myCart");

router.get('/getMyCart', myCartController.getMyCart);
router.get('/deleteCart', myCartController.deleteCart);
router.get('/', myCartController.getMyCart);
module.exports = router;
