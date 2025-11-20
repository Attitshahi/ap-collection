const productList = document.getElementById('product-list');

fetch('http://localhost:3000/api/products')
.then(res => res.json())
.then(products => {
    products.forEach(product => {
        const div = document.createElement('div');
        div.className = 'product-card';
        div.innerHTML = `
            <img src="images/${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Rs ${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(div);
    });
})
.catch(err => console.log(err));

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];
function addToCart(productId){
    const existing = cart.find(item => item.id === productId);
    if(existing) existing.qty += 1;
    else cart.push({id: productId, qty: 1});
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
}
