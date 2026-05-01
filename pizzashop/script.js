// Pizza tab switcher
const pizzas = [
  {
    name: 'The Northern',
    desc: 'Smoked pulled pork, roasted red peppers, caramelized onions, BBBDrizzle, mozzarella & provolone blend.',
    price: '$22.50 — Small &nbsp; $28.50 — Large'
  },
  {
    name: 'The Truffle',
    desc: 'Wild mushrooms, white truffle oil, fontina, fresh thyme, parmesan crisp.',
    price: '$24.50 — Small &nbsp; $30.50 — Large'
  },
  {
    name: 'The Inferno',
    desc: 'Spicy Italian sausage, jalapeños, banana peppers, ghost pepper aioli, smoked gouda.',
    price: '$23.50 — Small &nbsp; $29.50 — Large'
  }
];

let activePizza = 0;

function renderPizza(idx) {
  document.getElementById('pizzaName').textContent = pizzas[idx].name;
  document.getElementById('pizzaDesc').textContent = pizzas[idx].desc;
  document.getElementById('pizzaPrice').innerHTML = pizzas[idx].price;
  document.querySelectorAll('.tab-btn').forEach((btn, i) => {
    btn.classList.toggle('active', i === idx);
  });
}

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    renderPizza(parseInt(btn.dataset.tab));
  });
});

// Auto-cycle
setInterval(() => {
  activePizza = (activePizza + 1) % pizzas.length;
  renderPizza(activePizza);
}, 4000);

// Order form
document.getElementById('orderForm').addEventListener('submit', function(e) {
  e.preventDefault();
  this.style.display = 'none';
  document.getElementById('orderSuccess').style.display = 'block';
});

// Friday Night Special countdown — expires next Friday midnight Pacific
function getNextFriday() {
  const now = new Date();
  const pacific = new Date(now.toLocaleString('en-US', { timeZone: 'America/Vancouver' }));
  const day = pacific.getDay(); // 0=Sun, 5=Fri
  const daysUntilFriday = (5 - day + 7) % 7 || 7;
  const nextFri = new Date(pacific);
  nextFri.setDate(pacific.getDate() + daysUntilFriday);
  nextFri.setHours(23, 59, 59, 999);
  return nextFri.getTime();
}

function updateCountdown() {
  const banner = document.getElementById('specialBanner');
  const els = {
    days: document.getElementById('cd-days'),
    hours: document.getElementById('cd-hours'),
    mins: document.getElementById('cd-mins'),
    secs: document.getElementById('cd-secs')
  };
  if (!banner || !els.days) return;

  const now = Date.now();
  const target = getNextFriday();
  const diff = target - now;

  if (diff <= 0) {
    banner.style.display = 'none';
    return;
  }

  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);

  els.days.textContent = String(d).padStart(2, '0');
  els.hours.textContent = String(h).padStart(2, '0');
  els.mins.textContent = String(m).padStart(2, '0');
  els.secs.textContent = String(s).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);
