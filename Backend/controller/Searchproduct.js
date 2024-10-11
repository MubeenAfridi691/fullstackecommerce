const productModel = require('../Model/ProductModel');

const searchproduct = async (req, res) => {
  try {
    const query = req.query.q;
    console.log('query',query);
    if (!query) {
      return res.json({
        data: [],
        message: "No query provided",
        error: true,
        success: false
      });
    }
    
    const regex = new RegExp(query, 'i');

    const products = await productModel.find({
      "$or": [
        { productName: regex },
        { category: regex }
      ]
    });

    res.json({
      data: products,
      message: "Search Product list",
      error: false,
      success: true
    });
    console.log('products',products);
  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false
    });
  }
};

module.exports = searchproduct;
