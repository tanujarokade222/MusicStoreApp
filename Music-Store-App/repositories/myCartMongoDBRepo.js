const db = require("../config/mongodb");
const { ObjectId } = require('mongodb');


exports.getMyCart = (userId, callback) => {
    const collection = db.getCollection("CartUserMapping");
    collection.find({ userId: userId }).toArray()
        .then((songs) => {
            if (songs) {
                var query = [];
                if (songs.length > 0) {
                    const collectionSong = db.getCollection("SongMaster");
                    songs.forEach(element => {
                        if (element.songId) {
                            query.push({ _id: ObjectId(element.songId) });
                        }
                    })
                    var obj = {
                        $or: query
                    }
                    collectionSong.find(obj).toArray()
                        .then((_songs) => {
                            if (_songs) {
                                callback(_songs);
                            }
                        })
                }
                else {
                    callback(songs);
                }
            }
            else {
                callback(songs);
            }
        });
}

exports.deleteCart = (songid, userid, callback) => {
    const collection = db.getCollection("CartUserMapping");
    collection.deleteOne({ songId: songid, userId: userid })
        .then(() => {
            callback();
        });
}



