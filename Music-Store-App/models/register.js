const logins = [];

module.exports = class register {
    constructor(name, surname,emailId,mobileNo,password, id) {
        this.name = name;
        this.surname = surname;
        this.emailId = emailId;
        this.mobileNo = mobileNo;
        this.password = password;
        this._id = id;
    }
}