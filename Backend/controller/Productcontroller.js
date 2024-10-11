const mongoose = require('mongoose');
const Product = require('../Model/ProductModel');

const addProduct = async (req, res) => {
    const { productName, brandName, category, productImage, description, price, sellingPrice } = req.body;
    try {
        const product = await Product.create({
            productName,
            brandName,
            category,
            productImage,
            description,
            price,
            sellingPrice
        });
        res.status(200).json({
            success: true,
            product
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
    };
    module.exports = addProduct;