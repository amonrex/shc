// Toggle mobile menu
const toggleButton = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

toggleButton?.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Contact form validation
const form = document.getElementById('contact-form');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  document.getElementById('form-status').textContent = 'Message sent!';
  form.reset();
});
