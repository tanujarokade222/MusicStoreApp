const BuyNow = require("../models/buyNow");
const dbRepo = require("../repositories/buyNowMongoDBRepo");
const dbRepoHome = require("../repositories/homeMongoDBRepo");
//const dbRepoLogin = require("../repositories/loginMongoDBRepo");

exports.getPaymentForm = (req, res) => {
    var songId = req.query.id;
    //var userId = req.query.userId;      
    sess = req.session;
    if (sess.user) {
        dbRepo.getSong(songId, (song) => {
            if (song) {
                res.render('buyNow', { song: song, user: sess.user, message: '' });
            }
        })
    }
    else {
        res.render('login', { message: '' });
    }
}

exports.buySong = (req, res) => {
    sess = req.session;
    if (sess.user) {
        const buyNow = new BuyNow
            (req.body.hduserId, req.body.songId, req.body.priceId);
        dbRepo.buySong(buyNow, (result) => {
            dbRepoHome.getAll((songs) => {
                res.render('home', { songs: songs, user: sess.user, message: 'Order placed Successfully' });
            })
        });
    }
    else {
        res.render('login', { message: '' });
    }
}
