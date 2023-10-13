const db = require("../config/database");

module.exports = class Product {
    constructor(name, price, description, type){
        this.name =name;
        this.price = price;
        this.description = description;
        this.type = type;
    }

    static getAll(){
        return db.execute("SELECT * FROM products")
    }

    static getById(id){
        return db.execute(`SELECT * FROM products WHERE products.id = ${id}`)
    }


    create(){
        // Utiliza una sentencia SQL preparada para evitar inyecciones SQL.
        const sql = "INSERT INTO products (name, price, description, type) VALUES (?, ?, ?, ?)";
        const values = [this.name, this.price, this.description, this.type];

        return db.execute(sql, values)
    }

    update(id){
        return db.execute(`UPDATE products SET products.name ='${this.name}',products.price ='${this.price}',products.description='${this.description}',products.type ='${this.type}' WHERE products.id = ${id} `)
    }

    static delete(id) {
        return db.execute(`DELETE FROM products WHERE products.id = ${id}`)
    }



}