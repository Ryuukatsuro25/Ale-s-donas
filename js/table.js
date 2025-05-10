document.addEventListener('DOMContentLoaded', () => {
  const donuts = [
    { name: 'Sencillas', description: '4 unidades',  price: '$5.500'  },
    { name: 'Sencillas', description: '8 unidades',  price: '$10.000' },
    { name: 'Sencillas', description: '12 unidades', price: '$15.000' },
    { name: 'Sencillas', description: '24 unidades', price: '$28.000' },
    { name: 'Especiales', description: '4 unidades',  price: '$6.500'  },
    { name: 'Especiales', description: '8 unidades',  price: '$10.500' },
    { name: 'Especiales', description: '12 unidades', price: '$16.500' },
    { name: 'Especiales', description: '24 unidades', price: '$30.500' },
  ];

  const tbody = document.querySelector('#donut-table tbody');
  donuts.forEach(dona => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${dona.name}</td>
      <td>${dona.description}</td>
      <td>${dona.price}</td>
    `;
    tbody.appendChild(tr);
  });
});