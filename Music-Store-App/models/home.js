const homes = [];

module.exports = class home {
    constructor(name,description,price, id) {
        this.name = name;
        this.description = description;
        this.price = price;
        this._id = id;
    }
}