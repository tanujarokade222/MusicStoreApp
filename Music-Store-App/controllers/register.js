const Register = require("../models/register");
const dbRepo = require("../repositories/registerMongoDBRepo");


exports.getAddForm = (req, res) => {
    res.render('register', { message: '' });
}



exports.add = (req, res) => {
    const register = new Register
        (req.body.name, req.body.surname, req.body.emailId, req.body.mobileNo, req.body.password);
    dbRepo.checkEmailIdExists(req.body.emailId, (data) => {
        if (data) {
            if (data.length == 0) {
                dbRepo.add(register, (result) => {

                    res.render('login', { message: 'User added successfully' });

                });
            }
            else {
                res.render('login', { message: 'EmailId already Exists' });
            }
        }
        else {
            dbRepo.add(register, (result) => {

                res.render('login', { message: 'User added successfully' });

            });
        }
    });

}
