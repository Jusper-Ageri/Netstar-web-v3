document.addEventListener('DOMContentLoaded', function(){
  // Mobile menu toggle
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if(toggle){
    toggle.addEventListener('click', ()=> {
      if(nav.style.display === 'flex') nav.style.display = 'none';
      else nav.style.display = 'flex';
    });
  }

  // Simple form handler (client-side only)
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const status = document.getElementById('formStatus');
      status.textContent = 'Sending...';
      setTimeout(()=> {
        status.textContent = 'Thank you — we received your message and will be in touch soon.';
        form.reset();
      }, 900);
    });
  }

  // Simple focus animation for reveal elements
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach(r => {
    r.addEventListener('animationend', ()=> r.classList.add('revealed'));
  });
});
