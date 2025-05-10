document.addEventListener('DOMContentLoaded', () => {
  const linktreeUrl = 'https://linktr.ee/tu_emprendimiento';
  document.getElementById('linktree-btn')
    .addEventListener('click', () => window.open(linktreeUrl, '_blank'));
});