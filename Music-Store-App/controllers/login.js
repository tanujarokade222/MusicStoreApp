const Login = require("../models/login");
const dbRepo = require("../repositories/loginMongoDBRepo");
const dbRepoHome = require("../repositories/homeMongoDBRepo");



exports.getAddForm = (req, res) => {
    res.render('login', { message: '' });
}

exports.logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return console.log(err);
        }
        else {
            console.log('session destroyed');
        }
    });
    res.render('login', { message: '' });
}

