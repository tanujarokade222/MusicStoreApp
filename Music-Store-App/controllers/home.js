const Home = require("../models/home");
const dbRepo = require("../repositories/homeMongoDBRepo");
const dbRepoLogin = require("../repositories/loginMongoDBRepo");


exports.getAllSongs = (req, res) => {
    var emailId = req.body.emailId;
    var password = req.body.password;
    dbRepo.checkUserExists(emailId, password, (result) => {
        if (result) {
            const user = { _id: result._id, emailId: result.emailId, name: result.name, }

            sess = req.session;
            sess.user = user;
            dbRepo.getAll((songs) => {
                res.render('home', { songs: songs, user: sess.user, message: '' });
            })
        }
        else {
            res.render('login', { message: 'Invalid Credentials' });

        }
    })
}


exports.getSongs = (req, res) => {
    sess = req.session;
    if (sess.user) {
        dbRepo.getAll((songs) => {
            res.render('home', { songs: songs, user: sess.user, message: '' });
        })
    }
    else {
        res.render('login', { message: '' });
    }
}

exports.addToCart = (req, res) => {
    sess = req.session;
    if (sess.user) {
        const home = new Home
        var SongId = req.query.id;
        var userId = req.query.userId;
        dbRepo.IsCartItemExists(SongId, userId, (cart) => {
            if (cart.length == 0) {
                dbRepo.addToCart(SongId, userId, () => {
                    dbRepo.getAll((songs) => {
                        res.render('home', { songs: songs, user: sess.user, message: 'Added to Cart' });
                    })
                })
            }
            else {
                dbRepo.getAll((songs) => {
                    res.render('home', { songs: songs, user: sess.user, message: 'Already added to Cart' });
                })
            }
        })
    }
    else {
        res.render('login', { message: '' });
    }
}

