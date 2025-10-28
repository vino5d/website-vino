document.addEventListener('DOMContentLoaded', function(){

  // init WOW
  if (typeof WOW === 'function') {
    new WOW({mobile:false}).init();
  }

  // hero carousel (Owl)
  if (typeof jQuery !== 'undefined' && jQuery().owlCarousel) {
    jQuery('.hero-carousel').owlCarousel({
      items:1,
      loop:true,
      autoplay:true,
      autoplayTimeout:5000,
      smartSpeed:800,
      dots:true,
      nav:false,
      animateOut: 'fadeOut'
    });
  }

  // smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href.length > 1){
        const target = document.querySelector(href);
        if(target){
          e.preventDefault();
          target.scrollIntoView({behavior:'smooth', block:'start'});
        }
      }
    });
  });

  // gallery filter
  const filters = document.querySelectorAll('.btn-filter');
  const cards = document.querySelectorAll('.product-card');
  filters.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      filters.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.getAttribute('data-filter');
      cards.forEach(card=>{
        if(f === '*' || card.dataset.category === f){
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // set footer year
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();

  // lazy loading
  document.querySelectorAll('img').forEach(img => img.loading = 'lazy');
});
