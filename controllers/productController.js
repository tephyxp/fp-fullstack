const Product = require("../models/Product")

/****** GET ALL PRODUCTS ******/

const getProducts = (req, res) => {
    Product.getAll()
    .then((data)=>{
        if(data[0].length) {
            res.status(200).send({data:data[0]});
        }
        else{
            res.status(404).send({msg: "No information found" });
        }
    })
    .catch((err) => {
        res.status(500).send({ error: err.message }); 

    });
};
/******** GET PRODUCT BY ID *********/

const getProduct = (req, res) => {
    const id = req.params.id;
    Product.getById(id)
    .then((data)=> {
        if(data[0].length) {
        res.status(200).send({ data: data[0]});
        }
        else {
            res.status(404).send({msg:"product not found"});
        }    
    })
    .catch((err) => {
        res.status(500);
        console.log(err);
    });
};

/************ POST ************/

const createProduct = (req, res) => {
    const { name, price, description, type } = req.body;

    // Verifica si faltan campos requeridos y responde con un error 400 si es así.
    if (!name || !price || !description || !type) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    // Crea un nuevo objeto Product con los datos recibidos.
    const product = new Product(name, price, description, type);

    // Llama al método create() en el objeto Product para insertar el producto en la base de datos.
    product.create()
        .then(() => {
            res.status(201).json({ data: product }); // Responde con el producto creado y el código 201 (Created).
        })
        .catch((err) => {
            res.status(500).json({ error: err.message }); // Maneja cualquier error y responde con un código 500 (Internal Server Error).
        });
};

/*********** PUT ***********/

const updateProduct = (req, res) => {
    const id = req.params.id;
    const { name, price, description, type } = req.body;
    
    // Verifica si faltan campos requeridos y responde con un error 400 si es así.
    if (!name || !price || !description || !type) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    const product = new Product(name, price, description, type);

    product
        .update(id)
        .then(() => {
            res.status(200).json({ data: product });
        })
        .catch((err) => {
            res.status(500).json({ error: err.message });
        });
};

/*********** DELETE ***********/

const deleteProduct = (req, res) => {
    const id = req.params.id;
    Product.delete(id)
    .then(() => {
        res.status(200).send({ msg: "Product deleted successfully"
    });
})
    .catch((err) => {
        res.status(500);console.log(err);
        console.log(err);
    });
};



module.exports = { getProducts, getProduct, createProduct,updateProduct,deleteProduct};
