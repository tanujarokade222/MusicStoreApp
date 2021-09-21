const MyCart = require("../models/myCart");
const dbRepoHome = require("../repositories/homeMongoDBRepo");
const dbRepo = require("../repositories/myCartMongoDBRepo");

exports.getMyCart = (req, res) => {
    sess = req.session;
    if (sess.user) {
        var userId = req.query.userId;
        dbRepo.getMyCart(userId, (songs) => {
            if (songs) {
                res.render('myCart', { songs: songs, user: sess.user, message: '' });
            }
            else {
                res.render('myCart', { songs: [], user: sess.user, message: '' });
            }
        })
    }
    else {
        res.render('login', { message: '' });
    }
}

exports.deleteCart = (req, res) => {
    sess = req.session;
    if (sess.user) {
        const songid = req.query.id;
        const userid = req.query.userId;
        dbRepo.deleteCart(songid, userid, () => {
            dbRepo.getMyCart(userid, (songs) => {
                res.render('myCart', { songs: songs, user: sess.user, message: 'Deleted item from Cart' });
            })
        });
    }
    else {
        res.render('login', { message: '' });
    }
}
