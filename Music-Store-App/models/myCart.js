const myCarts= [];

module.exports = class myCart {
    constructor(userId,songId,price, id) {
        this.userId = userId;
        this.songId = songId;
        this.price = price;   
        this._id = id;
    }
}