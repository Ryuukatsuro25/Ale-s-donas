document.addEventListener('DOMContentLoaded', () => {
  const cartBtn = document.getElementById('cart-btn');
  const cartModal = document.getElementById('cart-modal');
  const closeCart = document.getElementById('close-cart');
  const itemsList = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total');
  const countEl = document.getElementById('cart-count');
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  function updateCart() {
    itemsList.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - ${item.price}`;
      itemsList.appendChild(li);
      total += parseFloat(item.price.replace('$','').replace('.','').replace(',','.'));
    });
    totalEl.textContent = '$' + total.toLocaleString();
    countEl.textContent = cart.length;
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  document.querySelector('.gallery-container').addEventListener('click', e => {
    if (e.target.closest('.card')) {
      const card = e.target.closest('.card');
      const name = card.querySelector('h3').textContent;
      const price = card.querySelector('.price').textContent;
      cart.push({ name, price });
      updateCart();
      alert(name + ' añadido al carrito');
    }
  });
  cartBtn.addEventListener('click', () => { cartModal.style.display = 'block'; });
  closeCart.addEventListener('click', () => { cartModal.style.display = 'none'; });
  updateCart();
});