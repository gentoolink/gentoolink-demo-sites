function loadHours(targetId){
  const el=document.getElementById(targetId);
  if(!el) return;
  el.textContent = 'Mon-Sun: 11:00 AM – 9:00 PM';
}
