const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Message sent! (Demo)');
  form.reset();
});
