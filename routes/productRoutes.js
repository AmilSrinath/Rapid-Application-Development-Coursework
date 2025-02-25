const express = require('express');
const Product = require('../models/Product');

const router = express.Router();

// Create Product (Admin)
router.post('/', async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create product' });
    }
});

// Get All Products
router.get('/', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

module.exports = router;
