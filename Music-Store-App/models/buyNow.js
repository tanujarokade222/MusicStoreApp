const buyNows = [];

module.exports = class buyNow {
    constructor(userId,songId,price,placedOn, id) {
        this.userId = userId;
        this.songId = songId;
        this.price = price;
        this.placedOn = placedOn;
        this._id = id;
    }
}