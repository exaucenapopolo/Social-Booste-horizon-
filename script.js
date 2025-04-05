// Données tarifaires
const pricingData = {
  facebook: {
    "Followers": {1000:2100, 5000:9500, 10000:19200},
    "Likes/Vues": {1000:1500, 5000:6500, 10000:11500},
    "J’aime page": {1000:2800, 5000:7000, 10000:11000},
    "Commentaires": {10:850},
    "Partages": {1000:800, 5000:4000, 10000:9000},
    "Membres groupe": {1000:2000, 5000:9000}
  },
  tiktok: {
    "Abonnés": {1000:2500,2000:5000,5000:9500,10000:19500},
    "Likes vidéo": {1000:1000,5000:4500,10000:8000},
    "Vues vidéo": {1000:800,5000:3500,10000:5000},
    "Sauvegardes/Partages": {1000:500,5000:2000,10000:3500},
    "Commentaires": {10:500,1000:5000}
  },
  instagram: {
    "Abonnés": {1000:2500,2000:5000,5000:9500,10000:19500},
    "Likes vidéo": {1000:1000,5000:4500,10000:8000},
    "Vues vidéo": {1000:500,5000:2000,10000:3000},
    "Commentaires": {10:300,1000:3000},
    "Vues story": {1000:500,5000:2000,10000:4000}
  },
  youtube: {
    "Abonnés": {1000:5000,2000:9500,5000:24500,10000:50000},
    "Vues/J’aime": {1000:1500,2000:3000,5000:7000,10000:13500}
  }
};

const platSel = document.getElementById('platform');
const servSel = document.getElementById('service');
const qtySel  = document.getElementById('quantity');
const priceEl = document.getElementById('price');

function updateServices() {
  const p = platSel.value;
  servSel.innerHTML = '';
  Object.keys(pricingData[p]).forEach(s => {
    servSel.add(new Option(s, s));
  });
  updateQuantities();
}

function updateQuantities() {
  const p = platSel.value, s = servSel.value;
  qtySel.innerHTML = '';
  Object.keys(pricingData[p][s]).forEach(q => {
    qtySel.add(new Option(q, q));
  });
  updatePrice();
}

function updatePrice() {
  const p = platSel.value, s = servSel.value, q = qtySel.value;
  const prix = pricingData[p][s][q] || 0;
  priceEl.textContent = prix.toLocaleString();
}

platSel.addEventListener('change', updateServices);
servSel.addEventListener('change', updateQuantities);
qtySel.addEventListener('change', updatePrice);
document.getElementById('send-order').addEventListener('click', () => {
  const p = platSel.value, s = servSel.value, q = qtySel.value;
  const prix = pricingData[p][s][q];
  const text = `Je commande ${q} ${s} sur ${p} pour ${prix} FCFA.`;
  window.open(`https://wa.me/237699853665?text=${encodeURIComponent(text)}`, '_blank');
});

// Initialisation
updateServices();