// menu-toggle.js

document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  // Optional: Hide menu on link click (mobile)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
    });
  });
});
