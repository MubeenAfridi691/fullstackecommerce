const  express = require('express');
const router = express.Router
const ProductModel = require('../Model/ProductModel');

const getProducts = async (req, res) => {
    try {
        const products = await ProductModel.find();
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
   
};


const deleteproducts = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await ProductModel.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(deletedProduct);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }

};

module.exports={
    getProducts,
    deleteproducts
}