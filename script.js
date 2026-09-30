const products=[
{id:1,name:"Boné Premium Minimal",style:"Old Money",price:58.95,emoji:"🧢",rating:"4.9",reviews:"105 avaliações",desc:"Uma peça limpa para composições clássicas e premium.",link:"#"},
{id:2,name:"Boné Street Essential",style:"Streetwear",price:60.43,emoji:"🧢",rating:"4.9",reviews:"247 avaliações",desc:"Visual urbano e versátil para usar todos os dias.",link:"#"},
{id:3,name:"Camiseta Racing Vintage",style:"Motorsport",price:69.99,emoji:"🏁",rating:"4.8",reviews:"—",desc:"Referência racing retrô para looks com personalidade.",link:"#"},
{id:4,name:"Bermuda Alfaiataria",style:"Old Money",price:45.97,emoji:"🩳",rating:"4.7",reviews:"149 avaliações",desc:"Corte elegante que funciona com polo, camiseta ou camisa.",link:"#"},
{id:5,name:"Moletom College",style:"College",price:61.99,emoji:"🎓",rating:"4.8",reviews:"—",desc:"A estética universitária clássica em uma peça casual.",link:"#"},
{id:6,name:"Jaqueta Bomber Classic",style:"Old Money",price:127.42,emoji:"🧥",rating:"4.9",reviews:"—",desc:"Camada premium para elevar o visual sem exagero.",link:"#"},
{id:7,name:"Camiseta Resort",style:"Resort",price:64.90,emoji:"🌴",rating:"4.8",reviews:"—",desc:"Leve, descontraída e pronta para uma estética resort.",link:"#"},
{id:8,name:"Jaqueta Racing College",style:"Motorsport",price:135.15,emoji:"🏎️",rating:"5.0",reviews:"—",desc:"Mistura de college e automobilismo para um look marcante.",link:"#"}
];

const grid=document.querySelector("#productGrid"), sort=document.querySelector("#sort");
let activeStyle="Todos", favorites=JSON.parse(localStorage.getItem("movaja-favs")||"[]");

function money(v){return v.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}
function render(){
 let list=products.filter(p=>activeStyle==="Todos"||p.style===activeStyle);
 if(sort.value==="low") list.sort((a,b)=>a.price-b.price);
 if(sort.value==="high") list.sort((a,b)=>b.price-a.price);
 grid.innerHTML=list.map(p=>`
 <article class="product">
  <div class="product-media">${p.emoji}<button class="heart ${favorites.includes(p.id)?"on":""}" data-fav="${p.id}">${favorites.includes(p.id)?"♥":"♡"}</button></div>
  <div class="product-body"><div class="product-tag">${p.style}</div><h3>${p.name}</h3><div class="rating">★★★★★ <span>${p.rating} · ${p.reviews}</span></div><div class="price">${money(p.price)}</div><button class="buy" data-product="${p.id}">VER DETALHES →</button></div>
 </article>`).join("");
 document.querySelectorAll("[data-product]").forEach(b=>b.onclick=()=>openProduct(+b.dataset.product));
 document.querySelectorAll("[data-fav]").forEach(b=>b.onclick=e=>{e.stopPropagation();toggleFav(+b.dataset.fav)});
 document.querySelector("#favCount").textContent=favorites.length;
}
function toggleFav(id){favorites=favorites.includes(id)?favorites.filter(x=>x!==id):[...favorites,id];localStorage.setItem("movaja-favs",JSON.stringify(favorites));render();toast(favorites.includes(id)?"Adicionado aos favoritos":"Removido dos favoritos")}
function openProduct(id){
 const p=products.find(x=>x.id===id);
 document.querySelector("#modalContent").innerHTML=`<div class="modal-product"><div class="big">${p.emoji}</div><div><div class="product-tag">${p.style}</div><h2>${p.name}</h2><div class="rating">★★★★★ ${p.rating}</div><div class="price">${money(p.price)}</div><p>${p.desc}</p><p>Produto selecionado pela curadoria MOVAJÁ. O botão abaixo leva você para a Shopee.</p><a class="btn btn-gold" href="${p.link}" target="_blank" rel="noopener">VER NA SHOPEE →</a></div></div>`;
 document.querySelector("#productModal").classList.add("open");
}
function toast(msg){const t=document.querySelector("#toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2200)}
function closeModals(){document.querySelectorAll(".modal").forEach(m=>m.classList.remove("open"))}

document.querySelectorAll(".style-card,.edit-grid button").forEach(b=>b.addEventListener("click",()=>{activeStyle=b.dataset.style;document.querySelectorAll(".style-card").forEach(x=>x.classList.toggle("active",x.dataset.style===activeStyle));render();document.querySelector("#em-alta").scrollIntoView({behavior:"smooth"})}));
sort.addEventListener("change",render);

const searchOverlay=document.querySelector("#searchOverlay");
document.querySelector("#openSearch").onclick=()=>{searchOverlay.classList.add("open");document.querySelector("#globalSearch").focus()};
document.querySelector("#closeSearch").onclick=()=>searchOverlay.classList.remove("open");
document.querySelectorAll(".search-chip").forEach(c=>c.onclick=()=>{document.querySelector("#globalSearch").value=c.textContent;filterSearch(c.textContent)});
document.querySelector("#globalSearch").addEventListener("input",e=>filterSearch(e.target.value));
function filterSearch(q){const s=q.toLowerCase();const found=products.filter(p=>(p.name+" "+p.style).toLowerCase().includes(s));document.querySelector("#productGrid").innerHTML=found.map(p=>`<article class="product"><div class="product-media">${p.emoji}</div><div class="product-body"><div class="product-tag">${p.style}</div><h3>${p.name}</h3><div class="price">${money(p.price)}</div><button class="buy" data-product="${p.id}">VER DETALHES →</button></div></article>`).join("");document.querySelectorAll("[data-product]").forEach(b=>b.onclick=()=>openProduct(+b.dataset.product));if(found.length){searchOverlay.classList.remove("open");document.querySelector("#em-alta").scrollIntoView({behavior:"smooth"})}}
document.querySelectorAll("[data-close]").forEach(b=>b.onclick=closeModals);
document.querySelectorAll(".modal").forEach(m=>m.addEventListener("click",e=>{if(e.target===m)closeModals()}));
document.querySelector("#styleQuiz").onclick=()=>{document.querySelector("#quizModal").classList.add("open");document.querySelector("#quizOptions").innerHTML=["Eu gosto de peças clássicas e elegantes.","Meu estilo é urbano e oversized.","Eu curto racing, carros e vintage.","Gosto de college e preppy.","Prefiro uma estética leve e resort."].map((x,i)=>`<button data-q="${i}">${x} <b>→</b></button>`).join("");document.querySelectorAll("[data-q]").forEach(b=>b.onclick=()=>{const s=["Old Money","Streetwear","Motorsport","College","Resort"][+b.dataset.q];closeModals();activeStyle=s;document.querySelectorAll(".style-card").forEach(x=>x.classList.toggle("active",x.dataset.style===s));render();document.querySelector("#em-alta").scrollIntoView({behavior:"smooth"});toast("Sua era: "+s)})};
document.querySelector("#lookbookBtn").onclick=()=>document.querySelector("#estilos").scrollIntoView({behavior:"smooth"});
document.querySelector("#newsletter").onsubmit=e=>{e.preventDefault();toast("Você entrou na lista MOVAJÁ.");e.target.reset()};
const obs=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add("visible")),{threshold:.12});document.querySelectorAll(".reveal").forEach(e=>obs.observe(e));
render();
