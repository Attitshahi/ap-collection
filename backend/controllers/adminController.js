const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/database.sqlite');

// Add product
exports.addProduct = (req, res) => {
    const { name, category, price, image } = req.body;
    const sql = "INSERT INTO products (name, category, price, image) VALUES (?,?,?,?)";
    db.run(sql, [name, category, price, image], function(err){
        if(err) return res.status(500).json({error: err.message});
        res.json({message: 'Product added', id: this.lastID});
    });
};

// Update product
exports.updateProduct = (req, res) => {
    const { name, category, price, image } = req.body;
    const id = req.params.id;
    const sql = "UPDATE products SET name=?, category=?, price=?, image=? WHERE id=?";
    db.run(sql, [name, category, price, image, id], function(err){
        if(err) return res.status(500).json({error: err.message});
        res.json({message: 'Product updated'});
    });
};

// Delete product
exports.deleteProduct = (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM products WHERE id=?";
    db.run(sql, [id], function(err){
        if(err) return res.status(500).json({error: err.message});
        res.json({message: 'Product deleted'});
    });
};

// Get all categories
exports.getCategories = (req, res) => {
    db.all("SELECT * FROM categories", [], (err, rows) => {
        if(err) return res.status(500).json({error: err.message});
        res.json(rows);
    });
};

// Add category
exports.addCategory = (req, res) => {
    const { name } = req.body;
    const sql = "INSERT INTO categories (name) VALUES (?)";
    db.run(sql, [name], function(err){
        if(err) return res.status(500).json({error: err.message});
        res.json({message: 'Category added', id: this.lastID});
    });
};
