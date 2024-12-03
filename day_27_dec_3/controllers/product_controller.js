let products = require('../../data/products.json');

const getAllProducts = (req, res) => {
    res.status(200).json(products);
}
const getProductById = (req, res) => {
    let product = products.find(emp => emp.id == req.params.id);
    res.status(200).json(product);
}
const createProduct = (req, res) => {
    const empToInsert = req.body;
    products.push(empToInsert);
    res.status(201).json(empToInsert);
}
module.exports = {
    getAllProducts, getProductById, createProduct
}