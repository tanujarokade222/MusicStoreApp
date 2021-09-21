const MyOrder = require("../models/myOrder");
const dbRepoHome = require("../repositories/homeMongoDBRepo");
const dbRepo = require("../repositories/myOrderMongoDBRepo");

exports.getMyOrder = (req, res) => {
    var userId = req.query.userId;
    sess = req.session;
    if (sess.user) {
        dbRepo.getMyOrder(userId, (songs) => {
            if (songs) {
                res.render('myOrder', { songs: songs, user: sess.user, message: '' });
            }
            else {
                res.render('myOrder', { songs: [], user: sess.user, message: '' });
            }
        })
    }
    else {
        res.render('login', { message: '' });
    }
}
