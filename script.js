const toggleBtn = document.getElementById('toggle');
const closeBtn = document.getElementById('close');
const extraCard = document.getElementById('extraCard');

toggleBtn.addEventListener('click', () => {
  extraCard.scrollIntoView({ 
    behavior: 'smooth', 
    block: 'start' 
  });
});

closeBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});