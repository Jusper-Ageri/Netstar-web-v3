/* Very small lightbox: opens image in new overlay */
document.addEventListener('click', function(e){
  const a = e.target.closest('a.project');
  if(!a) return;
  e.preventDefault();
  const src = a.getAttribute('href');
  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.inset = 0;
  overlay.style.background = 'rgba(0,0,0,0.85)';
  overlay.style.display = 'flex';
  overlay.style.alignItems = 'center';
  overlay.style.justifyContent = 'center';
  overlay.style.zIndex = 9999;
  const img = document.createElement('img');
  img.src = src;
  img.style.maxWidth = '90%';
  img.style.maxHeight = '90%';
  img.style.borderRadius = '8px';
  overlay.appendChild(img);
  overlay.addEventListener('click', () => document.body.removeChild(overlay));
  document.body.appendChild(overlay);
});
