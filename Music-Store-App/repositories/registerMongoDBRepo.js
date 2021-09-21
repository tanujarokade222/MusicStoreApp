const db = require("../config/mongodb");
const { ObjectId } = require('mongodb');

exports.add = (register, callback) => {
    const collection = db.getCollection("UserMaster");
    collection.insertOne({ name: register.name, surname: register.surname, emailId: register.emailId, mobileNo: register.mobileNo, password: register.password })
        .then(() => {
            callback();
        });
}

exports.checkEmailIdExists = (emailId, callback) => {
    const collection = db.getCollection("UserMaster");
    collection.findOne({ emailId: emailId })
        .then((login) => {
            callback(login);
        });
}

