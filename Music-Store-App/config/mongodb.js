const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb://127.0.0.1:27017/MusicStoreApp";

var mongoClient;

exports.connect = () => {
    MongoClient.connect(uri)
        .then(
            (client) => {
                mongoClient = client;
                this.getCollection("UserMaster");
                console.log("Mongodb connected");
            }
        ).catch(
            err => { console.log(err); }
        )
}

exports.getCollection = (name) => {
    console.log('getcollection');
    return mongoClient.db('MusicStoreApp').collection(name);
 }