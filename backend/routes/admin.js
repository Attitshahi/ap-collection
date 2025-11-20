const express = require('express');
const router = express.Router();
const { addProduct, updateProduct, deleteProduct, getCategories, addCategory } = require('../controllers/adminController');

router.post('/add-product', addProduct);
router.put('/update-product/:id', updateProduct);
router.delete('/delete-product/:id', deleteProduct);

router.get('/categories', getCategories);
router.post('/add-category', addCategory);

module.exports = router;
