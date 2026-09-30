// CATÁLOGO COMPLETO MOVAJÁ
// Categorias: 'carteiras', 'sapatos', 'camisetas', 'jaquetas', 'bones'

const products = [
  // --- CARTEIRAS & ACESSÓRIOS ---
  { id: 1, title: "Carteira Masculina Monograma Premium", category: "carteiras", style: "Old Money", price: "R$ 653,18", badge: "Destaque", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&auto=format&fit=crop&q=80", platform: "Mercado Livre", link: "https://meli.la/1LkzWtw" },
  { id: 2, title: "Porta-Cartões Slim Canvas Monograma", category: "carteiras", style: "Old Money", price: "R$ 653,18", badge: "Mais Vendido", image: "https://images.unsplash.com/photo-1606503153255-59d8b8b82176?w=500&auto=format&fit=crop&q=80", platform: "Mercado Livre", link: "https://meli.la/2Xidkos" },
  { id: 3, title: "Carteira Masculina Slim Monograma Dark", category: "carteiras", style: "Old Money", price: "R$ 671,62", badge: "Elegante", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=80", platform: "Mercado Livre", link: "https://meli.la/1BnCxWx" },
  { id: 4, title: "Porta-Cartões Minimalista Couro Texturizado", category: "carteiras", style: "Old Money", price: "R$ 505,21", badge: "Minimalista", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&auto=format&fit=crop&q=80", platform: "Mercado Livre", link: "https://meli.la/1QKV5Pn" },
  { id: 5, title: "Porta-Cartões Slim Monograma Dark Grey", category: "carteiras", style: "Old Money", price: "R$ 587,32", badge: "Premium", image: "https://images.unsplash.com/photo-1606503153255-59d8b8b82176?w=500&auto=format&fit=crop&q=80", platform: "Mercado Livre", link: "https://meli.la/2yAZSTy" },
  { id: 6, title: "Carteira Masculina Monograma Classic Beige", category: "carteiras", style: "Old Money", price: "R$ 671,62", badge: "Clássico", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=80", platform: "Mercado Livre", link: "https://meli.la/31G5uD3" },
  { id: 7, title: "Porta-Passaporte & Documentos Monograma Grey", category: "carteiras", style: "Old Money", price: "R$ 653,18", badge: "Viagem", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&auto=format&fit=crop&q=80", platform: "Mercado Livre", link: "https://meli.la/23VzM2C" },
  { id: 8, title: "Porta-Cartões Slim Canvas White Monograma", category: "carteiras", style: "Old Money", price: "R$ 616,13", badge: "Novidade", image: "https://images.unsplash.com/photo-1606503153255-59d8b8b82176?w=500&auto=format&fit=crop&q=80", platform: "Mercado Livre", link: "https://meli.la/1AVTsCF" },
  { id: 9, title: "Carteira Masculina Print Winter Monograma White", category: "carteiras", style: "Old Money / Resort", price: "R$ 734,71", badge: "Edição Especial", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=80", platform: "Mercado Livre", link: "https://meli.la/2asDqDC" },
  { id: 10, title: "Carteira Compacta Jacquard Monograma Grey", category: "carteiras", style: "Old Money", price: "R$ 616,13", badge: "Sofisticado", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&auto=format&fit=crop&q=80", platform: "Mercado Livre", link: "https://meli.la/2rWhBTk" },
  { id: 11, title: "Porta-Passaporte Couro Monograma Beige", category: "carteiras", style: "Resort / Old Money", price: "R$ 690,17", badge: "Resort", image: "https://images.unsplash.com/photo-1606503153255-59d8b8b82176?w=500&auto=format&fit=crop&q=80", platform: "Mercado Livre", link: "https://meli.la/1yBXA4v" },
  { id: 12, title: "Porta-Cartões Vertical Monograma Dark & Green", category: "carteiras", style: "Old Money", price: "R$ 542,20", badge: "Moderno", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=80", platform: "Mercado Livre", link: "https://meli.la/2KWKGE3" },
  { id: 13, title: "Carteira Masculina Monograma Animals Print", category: "carteiras", style: "Old Money", price: "R$ 616,13", badge: "Edição Especial", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&auto=format&fit=crop&q=80", platform: "Mercado Livre", link: "https://meli.la/2Q7p3NS" },
  { id: 14, title: "Carteira Masculina Monograma Beige & Cream", category: "carteiras", style: "Resort / Old Money", price: "R$ 616,13", badge: "Verão", image: "https://images.unsplash.com/photo-1606503153255-59d8b8b82176?w=500&auto=format&fit=crop&q=80", platform: "Mercado Livre", link: "https://meli.la/2RFc4fj" },
  { id: 15, title: "Carteira Feminina Compacta Monograma Peach Pink", category: "carteiras", style: "Resort", price: "R$ 727,16", badge: "Exclusivo", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=80", platform: "Mercado Livre", link: "https://meli.la/2PYJHur" },
  { id: 16, title: "Carteira Masculina Monograma Ocean Blue Print", category: "carteiras", style: "Resort", price: "R$ 616,13", badge: "Edição de Verão", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&auto=format&fit=crop&q=80", platform: "Mercado Livre", link: "https://meli.la/31Xbsc2" },
  { id: 17, title: "Porta-Passaporte Monograma Coral Orange", category: "carteiras", style: "Resort", price: "R$ 616,13", badge: "Vibrante", image: "https://images.unsplash.com/photo-1606503153255-59d8b8b82176?w=500&auto=format&fit=crop&q=80", platform: "Mercado Livre", link: "https://meli.la/2mvsNxb" },
  { id: 18, title: "Porta-Cartões Slim Vertical Monograma Navy Blue", category: "carteiras", style: "Old Money", price: "R$ 505,21", badge: "Elegante", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=80", platform: "Mercado Livre", link: "https://meli.la/1sAqw5s" },
  { id: 19, title: "Porta-Passaporte Monograma Royal Blue Animals Print", category: "carteiras", style: "Old Money / Resort", price: "R$ 616,13", badge: "Edição Especial", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&auto=format&fit=crop&q=80", platform: "Mercado Livre", link: "https://meli.la/1sQbcA9" },
  { id: 20, title: "Carteira Masculina Slim Damier Graphite", category: "carteiras", style: "Old Money", price: "R$ 542,20", badge: "Mais Vendido", image: "https://images.unsplash.com/photo-1606503153255-59d8b8b82176?w=500&auto=format&fit=crop&q=80", platform: "Mercado Livre", link: "https://meli.la/2N71MLq" },
  { id: 21, title: "Carteira Masculina Slim Damier Ebene", category: "carteiras", style: "Old Money", price: "R$ 542,20", badge: "Clássico", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=80", platform: "Mercado Livre", link: "https://meli.la/1PEoiEW" },
  { id: 22, title: "Carteira Masculina Slim Monograma Classic Brown", category: "carteiras", style: "Old Money", price: "R$ 468,22", badge: "Oportunidade", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&auto=format&fit=crop&q=80", platform: "Mercado Livre", link: "https://meli.la/34e1zkU" },
  { id: 23, title: "Porta-Cartões Slim Canvas Monograma Beige & Gold Chains", category: "carteiras", style: "Old Money", price: "R$ 542,20", badge: "Elegante", image: "https://images.unsplash.com/photo-1606503153255-59d8b8b82176?w=500&auto=format&fit=crop&q=80", platform: "Mercado Livre", link: "https://meli.la/1t9MNZF" },
  { id: 24, title: "Porta-Cartões Vertical Couro Texturizado Black", category: "carteiras", style: "Old Money", price: "R$ 616,13", badge: "Minimalista", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=80", platform: "Mercado Livre", link: "https://meli.la/1AoFtJb" },
  { id: 25, title: "Carteira Masculina Couro Texturizado Blue Mat", category: "carteiras", style: "Old Money", price: "R$ 727,16", badge: "Premium", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&auto=format&fit=crop&q=80", platform: "Mercado Livre", link: "https://meli.la/1on4q8i" },
  { id: 26, title: "Carteira Masculina Couro Texturizado Black Gold Logo", category: "carteiras", style: "Old Money", price: "R$ 708,61", badge: "Premium", image: "https://images.unsplash.com/photo-1606503153255-59d8b8b82176?w=500&auto=format&fit=crop&q=80", platform: "Mercado Livre", link: "https://meli.la/15YHxDQ" },
  { id: 27, title: "Carteira Masculina Couro Epi Black Minimalist", category: "carteiras", style: "Old Money", price: "R$ 505,21", badge: "Minimalista", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=80", platform: "Mercado Livre", link: "https://meli.la/322qZTS" }
];

// RENDERIZAÇÃO DOS PRODUTOS
function renderProducts(categoryFilter = 'all') {
  const grid = document.getElementById('product-grid');
  if (!grid) return;

  grid.innerHTML = '';

  const filtered = categoryFilter === 'all' 
    ? products 
    : products.filter(p => p.category === categoryFilter);

  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: #8a8a9e;">Novos produtos desta categoria serão adicionados em breve!</div>`;
    return;
  }

  filtered.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-badge">${product.badge}</div>
      <div class="product-image">
        <img src="${product.image}" alt="${product.title}" loading="lazy">
      </div>
      <div class="product-info">
        <span class="product-style">${product.style} • ${product.platform}</span>
        <h3 class="product-title">${product.title}</h3>
        <div class="product-footer">
          <span class="product-price">${product.price}</span>
          <a href="${product.link}" target="_blank" rel="noopener noreferrer" class="buy-button">
            Ver Oferta
          </a>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// CANVAS DE FUNDO 3D
function init3DBackground() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = Array.from({ length: 35 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 2 + 0.5,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    alpha: Math.random() * 0.5 + 0.2
  }));

  function animate() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(212, 175, 55, ${p.alpha})`;
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

document.addEventListener('DOMContentLoaded', () => {
  init3DBackground();
  renderProducts();

  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      renderProducts(e.target.getAttribute('data-category'));
    });
  });
});
