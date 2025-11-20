const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/database.sqlite');

// Get all products
exports.getAllProducts = (req, res) => {
    db.all("SELECT * FROM products", [], (err, rows) => {
        if(err) return res.status(500).json({error: err.message});
        res.json(rows);
    });
};

// Get single product by ID
exports.getProductById = (req, res) => {
    const id = req.params.id;
    db.get("SELECT * FROM products WHERE id = ?", [id], (err, row) => {
        if(err) return res.status(500).json({error: err.message});
        res.json(row);
    });
};
