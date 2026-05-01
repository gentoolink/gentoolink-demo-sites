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


