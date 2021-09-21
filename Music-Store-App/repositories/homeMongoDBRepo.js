const db = require("../config/mongodb");
const { ObjectId } = require('mongodb');


exports.checkUserExists = (emailId, password, callback) => {
    const collection = db.getCollection("UserMaster");
    collection.findOne({ emailId: emailId, password: password })
        .then((login) => {
            callback(login);
        });
}



exports.getAll = (cb) => {
    const collection = db.getCollection("SongMaster");
    collection.find().toArray()
        .then((song) => {
            cb(song);
        })
}

exports.addToCart = (songId, userId, callback) => {
    const collection = db.getCollection("CartUserMapping");
    collection.insertOne({ songId: songId, userId: userId })
        .then(() => {
            callback();
        });
}

exports.IsCartItemExists = (songid, userid, callback) => {
    const collection = db.getCollection("CartUserMapping");
    collection.find({ songId: songid, userId: userid }).toArray()
        .then((cart) => {
            callback(cart);
        });
}

