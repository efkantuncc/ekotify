// Mobil menü toggle
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

navToggle.addEventListener('click', ()=> {
  navLinks.classList.toggle('show');
});

// Smooth scroll (isteğe bağlı)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
    if(navLinks.classList.contains('show')) {
      navLinks.classList.remove('show');
    }
  });
});
