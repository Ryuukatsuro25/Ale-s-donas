document.getElementById('accept-cookies').addEventListener('click', () => {
  document.getElementById('cookie-banner').style.display = 'none';
  localStorage.setItem('cookiesAccepted', 'true');
});
window.addEventListener('load', () => {
  if (localStorage.getItem('cookiesAccepted') === 'true') {
    document.getElementById('cookie-banner').style.display = 'none';
  }
});