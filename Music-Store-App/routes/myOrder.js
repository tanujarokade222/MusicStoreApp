const express = require("express");

const router = express.Router();
const myOrderController = require("../controllers/myOrder");
router.get('/getMyOrder', myOrderController.getMyOrder);
router.get('/', myOrderController.getMyOrder);
module.exports = router;