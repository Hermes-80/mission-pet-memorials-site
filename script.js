
const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
const mapPlaceholder = document.querySelector('.map-placeholder');
const mapAddress = '1611 East Cesar Chavez Street, Austin, TX 78702';

if (toggle && links) {
  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

if (mapPlaceholder && !mapPlaceholder.querySelector('iframe')) {
  const encodedAddress = encodeURIComponent(mapAddress);

  mapPlaceholder.setAttribute(
    'aria-label',
    'Google map showing Mission Pet Memorials at 1611 East Cesar Chavez Street, Austin, Texas'
  );
  mapPlaceholder.style.overflow = 'hidden';
  mapPlaceholder.style.gridTemplateRows = 'minmax(300px, 1fr) auto';
  mapPlaceholder.style.background = 'var(--white)';

  mapPlaceholder.innerHTML = `
    <iframe
      title="Mission Pet Memorials on Google Maps"
      src="https://www.google.com/maps?q=${encodedAddress}&output=embed"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      allowfullscreen
      style="width:100%;min-height:300px;height:100%;border:0;display:block;">
    </iframe>
    <a
      class="map-directions"
      href="https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}"
      target="_blank"
      rel="noopener"
      style="display:flex;align-items:center;justify-content:center;padding:14px 18px;background:var(--deep);color:white;text-decoration:none;font-weight:900;">
      Open in Google Maps
    </a>
  `;
}
