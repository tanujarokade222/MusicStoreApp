const db = require("../config/mongodb");
const { ObjectId } = require('mongodb');

exports.getSong = (songId, callback) => {
    const collection = db.getCollection("SongMaster");
    collection.findOne({ _id: ObjectId(songId) })
        .then((song) => {
            callback(song);
        });
}

exports.buySong = (buyNow, callback) => {
    const collection = db.getCollection("OrderUserMapping");

    collection.insertOne({ songId: buyNow.songId, userId: buyNow.userId, price: buyNow.price, placedOn: new Date() })
        .then(() => {
            callback();
        });
}

