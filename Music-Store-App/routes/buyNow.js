const express = require("express");

const router = express.Router();
const buyNowController = require("../controllers/buyNow");

router.post('/buySong', buyNowController.buySong);
router.get('/getPaymentForm', buyNowController.getPaymentForm);
router.get('/', buyNowController.getPaymentForm);
module.exports = router;