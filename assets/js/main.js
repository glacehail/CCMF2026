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
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', ()=>{
    if(window.innerWidth < 821){
      toggle?.setAttribute('aria-expanded','false');
      nav?.setAttribute('aria-expanded','false');
    }
  }));
})();