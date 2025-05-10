document.addEventListener('DOMContentLoaded', () => {
  const images = [
    'img/donut1.jpg',
    'img/donut2.jpg',
    'img/donut3.jpg'
  ];

  const container = document.querySelector('.gallery-container');
  images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Dona deliciosa';
    img.classList.add('donut-image');
    container.appendChild(img);
  });
});