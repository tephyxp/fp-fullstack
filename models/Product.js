const db = require("../config/database");

module.exports = class Product {
    constructor(name, price, description,type){
        this.name =name;
        this.price = price;
        this.description = description;
        this.type = type;
    }

    static getAll(){
        return db.execute("SELECT * FROM products")
    }

}