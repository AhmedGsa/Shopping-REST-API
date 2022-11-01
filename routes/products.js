const express = require('express')
const {getProducts, createProduct, productsPage} = require("../controllers/products")
const router = express.Router()

router.route("/").get(getProducts).post(createProduct)

module.exports = router