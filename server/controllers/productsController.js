const Product = require("../model/productModel");

exports.getAllProducts = async (req, res) => {
    const product = await Product.find()

    res.status(200).json({
        status: 'success',
        data: {
            product
        }
    });
}

exports.createProducts = async (req, res) => {
    const newProduct = await Product.create(req.body)
    res.status(201).json({
        status: 'success',
        data: {
            product:newProduct
        }
    });
}