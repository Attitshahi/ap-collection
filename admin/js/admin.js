const productList = document.getElementById('admin-product-list');

function fetchProducts(){
    productList.innerHTML = '';
    fetch('http://localhost:3000/api/products')
    .then(res => res.json())
    .then(products => {
        products.forEach(product => {
            const div = document.createElement('div');
            div.innerHTML = `
                <p>${product.name} - Rs ${product.price} [${product.category}] 
                <button onclick="deleteProduct(${product.id})">Delete</button></p>
            `;
            productList.appendChild(div);
        });
    });
}

function addProduct(){
    const name = document.getElementById('product-name').value;
    const category = document.getElementById('product-category').value;
    const price = document.getElementById('product-price').value;
    const image = document.getElementById('product-image').value;

    fetch('http://localhost:3000/api/admin/add-product', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name, category, price, image})
    }).then(res => res.json())
    .then(data => {
        alert('Product added!');
        fetchProducts();
    });
}

function deleteProduct(id){
    fetch(`http://localhost:3000/api/admin/delete-product/${id}`, { method: 'DELETE' })
    .then(res => res.json())
    .then(data => {
        alert('Product deleted!');
        fetchProducts();
    });
}

fetchProducts();
