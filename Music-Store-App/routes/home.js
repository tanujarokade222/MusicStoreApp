const express = require("express");

const router = express.Router();
const homeController = require("../controllers/home");
const pageNotFoundController = require("../controllers/pageNotFound");
router.post('/getAllSongs', homeController.getAllSongs);
router.get('/addToCart', homeController.addToCart);
router.get('/getSongs', homeController.getSongs);
router.get('/', homeController.getSongs);
module.exports = router;