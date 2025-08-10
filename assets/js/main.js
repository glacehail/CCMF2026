
(function(){
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  if(toggle && nav){
    toggle.addEventListener('click', ()=>{
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.setAttribute('aria-expanded', String(!expanded));
    });
  }
  // Close nav on link click (mobile)
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', ()=>{
    if(window.innerWidth < 821){
      toggle?.setAttribute('aria-expanded','false');
      nav?.setAttribute('aria-expanded','false');
    }
  }));

  // Header scrolled state
  const header = document.querySelector('.site-header');
  const onScroll = () => {
    const scrolled = window.scrollY > 12;
    header?.setAttribute('data-scrolled', String(scrolled));
  };
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();
})();
