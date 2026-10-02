// BANCO DE DADOS OFICIAL MAPEADO COM AS SUAS CAPTURAS DE ECRÃ DO GITHUB
const databaseProducts = [
    { id: 1, name: "Short Alfaiataria", category: "Roupas Masculinas", image: "assets/Screenshot_20261002_124841_.jpg", link: "https://meli.la/131wUQ7", desc: "Short casual de alta qualidade com cordão em algodão premium e caimento impecável." },
    { id: 2, name: "Cinto Couro Premium", category: "Acessórios", image: "assets/Screenshot_20261002_124906_.jpg", link: "https://meli.la/2GQc29P", desc: "Cinto em couro legítimo com fivela metálica escovada e acabamento de alfaiataria." },
    { id: 3, name: "Camisa Polo Classic", category: "Roupas Masculinas", image: "assets/Screenshot_20261002_124937_.jpg", link: "https://meli.la/2QVNmiV", desc: "Polo clássica com emblema bordado, toque macio e alta durabilidade térmica." },
    { id: 4, name: "Calça Alfaiataria Slim", category: "Old Money", image: "assets/Screenshot_20261002_125004_.jpg", link: "https://meli.la/1pbruPw", desc: "Alfaiataria impecável com modelagem slim e regulagem discreta na cintura." },
    { id: 5, name: "Kit Cuecas Low Rise", category: "Moda Íntima", image: "assets/Screenshot_20261002_125029_.jpg", link: "https://meli.la/1WuZzrA", desc: "Modelagem anatômica exclusiva com cós elástico metalizado de alto padrão." },
    { id: 6, name: "Carteira Executiva", category: "Acessórios", image: "assets/Screenshot_20261002_125049_.jpg", link: "https://meli.la/1NHEvFg", desc: "Carteira compacta em couro nobre com compartimentos inteligentes e logo discreto." },
    { id: 7, name: "Camiseta Urban Fit", category: "Streetwear", image: "assets/Screenshot_20261002_125121_.jpg", link: "https://meli.la/2LNiXpw", desc: "Camiseta algodão egípcio com caimento estruturado e gola reforçada." },
    { id: 8, name: "Perfume Designer Luxury", category: "Perfumes", image: "assets/Screenshot_20261002_125143_.jpg", link: "https://meli.la/2RZq5c1", desc: "Fragrância marcante e moderna, desenvolvida para alta fixação e presença." },
    { id: 9, name: "Pulseira Detalhe Ouro", category: "Acessórios", image: "assets/Screenshot_20261002_125207_.jpg", link: "https://meli.la/1SSYsUW", desc: "Acessório náutico com fecho em liga metálica banhada a ouro discreto." },
    { id: 10, name: "Sandália Couro Confort", category: "Calçados", image: "assets/Screenshot_20261002_125234_.jpg", link: "https://meli.la/2zBfrCo", desc: "Sandália em camurça genuína com fivelas ajustáveis e sola anatômica." },
    { id: 11, name: "Suéter Zíper High-End", category: "Old Money", image: "assets/Screenshot_20261002_125310_.jpg", link: "https://meli.la/2zBfrCo", desc: "Suéter canelado com gola alta e zíper metálico frontal. Sofisticação pura." },
    { id: 12, name: "Relógio Diver Classic", category: "Acessórios", image: "assets/Screenshot_20261002_125345_.jpg", link: "https://meli.la/2jikb9T", desc: "Relógio masculino robusto estilo diver com mostrador azul profundo e bisel contrastante." }
];

// RENDERIZAÇÃO DOS PRODUTOS NO DOM
function renderProducts(filter = 'todos') {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const filtered = filter === 'todos' 
        ? databaseProducts 
        : databaseProducts.filter(p => p.category.toLowerCase().includes(filter.toLowerCase()) || filter.toLowerCase().includes(p.category.toLowerCase()));

    filtered.forEach((p) => {
        grid.innerHTML += `
            <div class="card-3d-wrapper">
                <div class="card-3d-container glass-panel overflow-hidden rounded-none flex flex-col justify-between h-full border border-white/10 group">
                    <div class="h-80 overflow-hidden bg-black relative">
                        <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-out" onerror="this.src='https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&q=80&w=800'">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80"></div>
                        <span class="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-[10px] uppercase tracking-widest text-amber-400 border border-amber-400/30 px-3 py-1 font-bold">
                            ${p.category}
                        </span>
                    </div>
                    <div class="p-6 flex flex-col flex-grow justify-between">
                        <div>
                            <h3 class="cinzel text-xl font-bold mb-2 text-white group-hover:text-amber-400 transition duration-300">${p.name}</h3>
                            <p class="text-zinc-400 text-xs font-light mb-6 line-clamp-2 leading-relaxed">${p.desc}</p>
                        </div>
                        <div class="flex items-center justify-between pt-4 border-t border-white/10">
                            <span class="text-[10px] text-zinc-500 uppercase tracking-widest">Mercado Livre</span>
                            <a href="${p.link}" target="_blank" class="bg-white text-black text-xs font-extrabold uppercase tracking-[0.2em] px-5 py-3 hover:bg-amber-400 transition duration-300 shadow-md">
                                Comprar Agora
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
}

function filterProducts(category) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('border-amber-400', 'bg-amber-400', 'text-black', 'font-bold');
        btn.classList.add('border-white/10', 'bg-white/5', 'text-zinc-300');
    });
    event.target.classList.add('border-amber-400', 'bg-amber-400', 'text-black', 'font-bold');
    event.target.classList.remove('border-white/10', 'bg-white/5', 'text-zinc-300');
    renderProducts(category);
}

// CANVAS PARTICLES ENGINE
const canvas = document.getElementById('cinematic-canvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    for (let i = 0; i < 40; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 1.5,
            speedX: (Math.random() - 0.5) * 0.3,
            speedY: (Math.random() - 0.5) * 0.3,
            opacity: Math.random() * 0.5 + 0.1
        });
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;
            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;

            ctx.fillStyle = `rgba(212, 175, 55, ${p.opacity})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        });
        requestAnimationFrame(animateParticles);
    }
    animateParticles();
}

// CUSTOM MOUSE FOLLOWER
const cursor = document.getElementById('custom-cursor');
if (cursor) {
    window.addEventListener('mousemove', e => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });
}

// INIT LOAD
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
