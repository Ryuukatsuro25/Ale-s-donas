document.addEventListener('DOMContentLoaded', () => {
  const images = [
    { src: 'images/donut1.jpg', name: 'Chocolate Clásico', price: '$5.500' },
    { src: 'images/donut2.jpg', name: 'Fresa Irresistible', price: '$10.000' },
    { src: 'images/donut3.jpg', name: 'Azúcar Tradicional', price: '$15.000' }
  ];
  const container = document.querySelector('.gallery-container');
  images.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `<a href="${item.src}" data-lightbox="gallery" data-title="${item.name}">
      <img src="${item.src}" alt="${item.name}" loading="lazy">
      <div class="card-body">
        <h3>${item.name}</h3>
        <p class="price">${item.price}</p>
      </div></a>`;
    container.appendChild(card);
  });
});