const logins = [];

module.exports = class login {
    constructor(emailId,password, id) {
        this.emailId = emailId;
        this.password = password;
        this._id = id;
    }
}