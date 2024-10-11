const ProductModel = require('../Model/ProductModel')

const updateproduct = async (req, res) => {
    
    const { id, productName, brandName,category,productImage,description,price,sellingPrice } = req.body
    try {
        const updatedProduct = await ProductModel.findByIdAndUpdate(
            id,
            {
                productName,
                brandName,
                category,
                productImage,
                description,
                price,
                sellingPrice
            },
            { new: true }
        );
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(updatedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }

}

module.exports = {
    updateproduct
}