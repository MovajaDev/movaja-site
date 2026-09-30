// Catálogo Completo MOVAJÁ - Mercado Livre & Shopee
const products = [
  {
    id: 1,
    title: "Carteira Masculina Monograma Premium",
    category: "old-money",
    style: "Old Money",
    price: "R$ 653,18",
    badge: "Destaque",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_721865-CBR81057424268_122024-F.webp",
    platform: "Mercado Livre",
    link: "https://meli.la/1LkzWtw"
  },
  {
    id: 2,
    title: "Porta-Cartões Slim Canvas Monograma",
    category: "old-money",
    style: "Old Money",
    price: "R$ 653,18",
    badge: "Mais Vendido",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_721865-CBR81057424268_122024-F.webp",
    platform: "Mercado Livre",
    link: "https://meli.la/2Xidkos"
  },
  {
    id: 3,
    title: "Carteira Masculina Slim Monograma Dark",
    category: "old-money",
    style: "Old Money",
    price: "R$ 671,62",
    badge: "Elegante",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_721865-CBR81057424268_122024-F.webp",
    platform: "Mercado Livre",
    link: "https://meli.la/1BnCxWx"
  },
  {
    id: 4,
    title: "Porta-Cartões Minimalista Couro Texturizado",
    category: "old-money",
    style: "Old Money",
    price: "R$ 505,21",
    badge: "Minimalista",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_721865-CBR81057424268_122024-F.webp",
    platform: "Mercado Livre",
    link: "https://meli.la/1QKV5Pn"
  },
  {
    id: 5,
    title: "Porta-Cartões Slim Monograma Dark Grey",
    category: "old-money",
    style: "Old Money",
    price: "R$ 587,32",
    badge: "Premium",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_721865-CBR81057424268_122024-F.webp",
    platform: "Mercado Livre",
    link: "https://meli.la/2yAZSTy"
  },
  {
    id: 6,
    title: "Carteira Masculina Monograma Classic Beige",
    category: "old-money",
    style: "Old Money",
    price: "R$ 671,62",
    badge: "Clássico",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_721865-CBR81057424268_122024-F.webp",
    platform: "Mercado Livre",
    link: "https://meli.la/31G5uD3"
  },
  {
    id: 7,
    title: "Porta-Passaporte & Documentos Monograma Grey",
    category: "old-money",
    style: "Old Money",
    price: "R$ 653,18",
    badge: "Viagem",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_721865-CBR81057424268_122024-F.webp",
    platform: "Mercado Livre",
    link: "https://meli.la/23VzM2C"
  },
  {
    id: 8,
    title: "Porta-Cartões Slim Canvas White Monograma",
    category: "old-money",
    style: "Old Money",
    price: "R$ 616,13",
    badge: "Novidade",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_721865-CBR81057424268_122024-F.webp",
    platform: "Mercado Livre",
    link: "https://meli.la/1AVTsCF"
  },
  {
    id: 9,
    title: "Carteira Masculina Print Winter Monograma White",
    category: "old-money",
    style: "Old Money / Resort",
    price: "R$ 734,71",
    badge: "Edição Especial",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_721865-CBR81057424268_122024-F.webp",
    platform: "Mercado Livre",
    link: "https://meli.la/2asDqDC"
  },
  {
    id: 10,
    title: "Carteira Compacta Jacquard Monograma Grey",
    category: "old-money",
    style: "Old Money",
    price: "R$ 616,13",
    badge: "Sofisticado",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_721865-CBR81057424268_122024-F.webp",
    platform: "Mercado Livre",
    link: "https://meli.la/2rWhBTk"
  },
  {
    id: 11,
    title: "Porta-Passaporte Couro Monograma Beige",
    category: "resort",
    style: "Resort / Old Money",
    price: "R$ 690,17",
    badge: "Resort",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_721865-CBR81057424268_122024-F.webp",
    platform: "Mercado Livre",
    link: "https://meli.la/1yBXA4v"
  },
  {
    id: 12,
    title: "Porta-Cartões Vertical Monograma Dark & Green",
    category: "old-money",
    style: "Old Money",
    price: "R$ 542,20",
    badge: "Moderno",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_721865-CBR81057424268_122024-F.webp",
    platform: "Mercado Livre",
    link: "https://meli.la/2KWKGE3"
  },
  {
    id: 13,
    title: "Carteira Masculina Monograma Animals Print",
    category: "old-money",
    style: "Old Money",
    price: "R$ 616,13",
    badge: "Edição Especial",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_721865-CBR81057424268_122024-F.webp",
    platform: "Mercado Livre",
    link: "https://meli.la/2Q7p3NS"
  },
  {
    id: 14,
    title: "Carteira Masculina Monograma Beige & Cream",
    category: "resort",
    style: "Resort / Old Money",
    price: "R$ 616,13",
    badge: "Verão",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_721865-CBR81057424268_122024-F.webp",
    platform: "Mercado Livre",
    link: "https://meli.la/2RFc4fj"
  },
  {
    id: 15,
    title: "Carteira Feminina Compacta Monograma Peach Pink",
    category: "resort",
    style: "Resort",
    price: "R$ 727,16",
    badge: "Exclusivo",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_721865-CBR81057424268_122024-F.webp",
    platform: "Mercado Livre",
    link: "https://meli.la/2PYJHur"
  },
  {
    id: 16,
    title: "Carteira Masculina Monograma Ocean Blue Print",
    category: "resort",
    style: "Resort",
    price: "R$ 616,13",
    badge: "Edição de Verão",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_721865-CBR81057424268_122024-F.webp",
    platform: "Mercado Livre",
    link: "https://meli.la/31Xbsc2"
  },
  {
    id: 17,
    title: "Porta-Passaporte Monograma Coral Orange",
    category: "resort",
    style: "Resort",
    price: "R$ 616,13",
    badge: "Vibrante",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_721865-CBR81057424268_122024-F.webp",
    platform: "Mercado Livre",
    link: "https://meli.la/2mvsNxb"
  },
  {
    id: 18,
    title: "Porta-Cartões Slim Vertical Monograma Navy Blue",
    category: "old-money",
    style: "Old Money",
    price: "R$ 505,21",
    badge: "Elegante",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_721865-CBR81057424268_122024-F.webp",
    platform: "Mercado Livre",
    link: "https://meli.la/1sAqw5s"
  },
  {
    id: 19,
    title: "Porta-Passaporte Monograma Royal Blue Animals Print",
    category: "old-money",
    style: "Old Money / Resort",
    price: "R$ 616,13",
    badge: "Edição Especial",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_721865-CBR81057424268_122024-F.webp",
    platform: "Mercado Livre",
    link: "https://meli.la/1sQbcA9"
  },
  {
    id: 20,
    title: "Carteira Masculina Slim Damier Graphite",
    category: "old-money",
    style: "Old Money",
    price: "R$ 542,20",
    badge: "Mais Vendido",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_721865-CBR81057424268_122024-F.webp",
    platform: "Mercado Livre",
    link: "https://meli.la/2N71MLq"
  },
  {
    id: 21,
    title: "Carteira Masculina Slim Damier Ebene",
    category: "old-money",
    style: "Old Money",
    price: "R$ 542,20",
    badge: "Clássico",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_721865-CBR81057424268_122024-F.webp",
    platform: "Mercado Livre",
    link: "https://meli.la/1PEoiEW"
  },
  {
    id: 22,
    title: "Carteira Masculina Slim Monograma Classic Brown",
    category: "old-money",
    style: "Old Money",
    price: "R$ 468,22",
    badge: "Oportunidade",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_721865-CBR81057424268_122024-F.webp",
    platform: "Mercado Livre",
    link: "https://meli.la/34e1zkU"
  },
  {
    id: 23,
    title: "Porta-Cartões Slim Canvas Monograma Beige & Gold Chains",
    category: "old-money",
    style: "Old Money",
    price: "R$ 542,20",
    badge: "Elegante",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_721865-CBR81057424268_122024-F.webp",
    platform: "Mercado Livre",
    link: "https://meli.la/1t9MNZF"
  },
  {
    id: 24,
    title: "Porta-Cartões Vertical Couro Texturizado Black",
    category: "old-money",
    style: "Old Money",
    price: "R$ 616,13",
    badge: "Minimalista",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_721865-CBR81057424268_122024-F.webp",
    platform: "Mercado Livre",
    link: "https://meli.la/1AoFtJb"
  },
  {
    id: 25,
    title: "Carteira Masculina Couro Texturizado Blue Mat",
    category: "old-money",
    style: "Old Money",
    price: "R$ 727,16",
    badge: "Premium",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_721865-CBR81057424268_122024-F.webp",
    platform: "Mercado Livre",
    link: "https://meli.la/1on4q8i"
  },
  {
    id: 26,
    title: "Carteira Masculina Couro Texturizado Black Gold Logo",
    category: "old-money",
    style: "Old Money",
    price: "R$ 708,61",
    badge: "Premium",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_721865-CBR81057424268_122024-F.webp",
    platform: "Mercado Livre",
    link: "https://meli.la/15YHxDQ"
  },
  {
    id: 27,
    title: "Carteira Masculina Couro Epi Black Minimalist",
    category: "old-money",
    style: "Old Money",
    price: "R$ 505,21",
    badge: "Minimalista",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_721865-CBR81057424268_122024-F.webp",
    platform: "Mercado Livre",
    link: "https://meli.la/322qZTS"
  }
];

// Função de Renderização dos Produtos
function renderProducts(filter = 'all') {
  const grid = document.getElementById('product-grid');
  if (!grid) return;

  grid.innerHTML = '';

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter);

  filteredProducts.forEach(product => {
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

// Filtros por Categoria
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();

  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterButtons.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      const filter = e.target.getAttribute('data-filter');
      renderProducts(filter);
    });
  });
});
