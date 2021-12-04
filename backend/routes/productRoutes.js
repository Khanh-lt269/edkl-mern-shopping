const express = require('express')
const router = express.Router()

const { getAllProducts, getProductsById } = require('../controller/productController')

//@desc GET all product from DB
//@route GET /api/products
//@access public
router.get('/', getAllProducts)

//@desc GET all product from DB
//@route GET /api/products/:id
//@access public
router.get('/:id', getProductsById)

module.exports = router