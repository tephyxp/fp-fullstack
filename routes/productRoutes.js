const express = require('express');
const router = express.Router();
const { getProducts, getProduct, createProduct, updateProduct,deleteProduct} = require('../controllers/productController');

/****** GET ALL PRODUCTS ******/

router.get('/ecommerce-products', getProducts);

/******** GET PRODUCT BY ID *********/

router.get('/ecommerce-products/:id', getProduct);


/********* POST ***********/

router.post('/ecommerce-products', createProduct);

/********** PUT ************/

router.put('/ecommerce-products/:id', updateProduct)

/********** DELETE ************/

router.delete('/ecommerce-products/:id', deleteProduct)

module.exports = router;