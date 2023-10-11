const ProductController = require("../models/Product")

/****** GET ALL PRODUCTS ******/

const getProducts = (req, res) => {
    ProductController.getAll()
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
}

module.exports = {getProducts};