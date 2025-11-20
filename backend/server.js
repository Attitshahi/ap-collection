const express = require('express');
const cors = require('cors');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const app = express();
app.use(cors());
app.use(express.json());

// Database connection
const db = new sqlite3.Database(path.join(__dirname, 'database.sqlite'), (err) => {
  if (err) console.error('DB Error:', err);
  else console.log('Connected to SQLite database');
});

// Routes
const productRoutes = require('./routes/products');
const adminRoutes = require('./routes/admin');
app.use('/api/products', productRoutes);
app.use('/api/admin', adminRoutes);

// Serve frontend static files
app.use(express.static(path.join(__dirname, '../frontend')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



