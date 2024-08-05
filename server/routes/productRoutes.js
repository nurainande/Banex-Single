const express = require('express');
const { getAllProducts, createProducts } = require('../controllers/productsController');

const router = express.Router();

router.route('/').get(getAllProducts).post(createProducts)

module.exports = router