let cart = [];
function addToCart(name, price) {
  let existingProduct = cart.find(item => item.name === name);
  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    cart.push({ name: name, price: price, quantity: 1 });
  }
  updateCartDisplay();
}
function updateCartDisplay() {
  const cartItemContainer = document.getElementById("cart-items");
  const cartTotalContainer = document.getElementById("cart-total");
  cartItemContainer.innerHTML = "";
  if (cart.length === 0) {
    cartItemContainer.innerHTML =
      '<div class="empty-cart">🛒 Your cart is empty</div>';
  } else {
    cart.forEach((item, index) => {
      let cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.innerHTML = `
        <span>${item.name}</span>
        <span>$${item.price.toFixed(2)}</span>
        <div class="quantity-controls">
            <button onclick="decreaseQuantity(${index})">-</button>
            <span>${item.quantity}</span>
            <button onclick="increaseQuantity(${index})">+</button>
        
        </div>
      `;
      cartItemContainer.appendChild(cartItem);
    });
  }

  let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartTotalContainer.innerHTML = `<h3>Total : $${total.toFixed(2)}</h3>`;
}
function increaseQuantity(index) {
    cart[index].quantity++;
    updateCartDisplay();
}
function decreaseQuantity(index){
    if(cart[index].quantity>1){
        cart[index].quantity--;
    }else{
        cart.splice(index,1);
    }
    updateCartDisplay();
}
