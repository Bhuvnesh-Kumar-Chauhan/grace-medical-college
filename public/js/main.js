(() => {
  const config = window.SITE_CONFIG || {};
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#navlinks');
  menu?.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); menu.textContent = open ? '×' : '☰'; });
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); menu?.setAttribute('aria-expanded','false'); if(menu) menu.textContent='☰'; }));
  document.querySelectorAll('[data-phone]').forEach(el => { if(config.phone && !config.phone.includes('X')) { el.textContent = config.phone; el.href = 'tel:' + config.phone.replace(/[^+\d]/g,''); } else { el.textContent = el.classList.contains('nav-cta') ? 'Contact Us ↗' : 'Phone number to be added'; el.href = '#contact'; } });
  document.querySelectorAll('[data-email]').forEach(el => { if(config.email && !config.email.includes('example.com')) { el.textContent = config.email; el.href = 'mailto:' + config.email; } else { el.textContent = 'Email address to be added'; el.href = '#contact'; } });
  document.querySelectorAll('[data-address]').forEach(el => { el.textContent = config.address || 'Official campus address to be added'; });
  document.querySelectorAll('[data-course]').forEach(el => el.addEventListener('click', () => { const select = document.querySelector('#course'); if(select) select.value = el.dataset.course; }));
  const form = document.querySelector('#admission-form'); const status = document.querySelector('#form-status');
  form?.addEventListener('submit', async event => {
    event.preventDefault(); status.textContent = 'Submitting your enquiry…'; status.className = 'form-status';
    const data = Object.fromEntries(new FormData(form).entries());
    try { const response = await fetch('/api/admissions', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(data)}); const result = await response.json(); if(!response.ok || !result.ok) throw new Error(result.message || 'Unable to submit right now.'); status.textContent = result.message; form.reset(); }
    catch(error) { status.textContent = error.message || 'Unable to submit right now. Please contact the college directly.'; status.className = 'form-status error'; }
  });
  document.querySelector('#year').textContent = new Date().getFullYear();
})();
