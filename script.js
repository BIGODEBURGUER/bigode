let cart = [];

function addToCart(item, price) {
    cart.push({ item, price });
    alert(`${item} foi adicionado ao carrinho!`);
}

function openCart() {
    const modal = document.getElementById('cartModal');
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = "";

    cart.forEach((product, index) => {
        cartItems.innerHTML += `
            <p>${product.item} - R$ ${product.price.toFixed(2)}
            <button onclick="removeItem(${index})">Remover</button></p>`;
    });

    modal.style.display = 'flex';
}

function removeItem(index) {
    cart.splice(index, 1);
    openCart();
}

function closeCart() {
    document.getElementById('cartModal').style.display = 'none';
}

function finalizeOrder() {
    const address = document.getElementById('address').value;
    if (!address) {
        alert('Por favor, preencha o endereço de entrega.');
        return;
    }

    let message = "🛒 *Pedido Bigode Burguer*:\n";
    cart.forEach((product) => {
        message += `${product.item} - R$ ${product.price.toFixed(2)}\n`;
    });

    message += `\n📍 *Endereço de entrega*: ${address}`;
    const whatsappURL = `https://api.whatsapp.com/send?phone=5581981751725&text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}
