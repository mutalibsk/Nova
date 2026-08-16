// NOVA shared application logic
document.addEventListener("DOMContentLoaded", () => {
  setupMenu();
  updateWishlistButtons();
  renderProductsIfPresent();
  setupNewsletter();
});

function setupMenu(){
  const menu = document.querySelector("[data-menu]");
  const nav = document.querySelector(".navlinks");
  if(menu && nav) menu.addEventListener("click", () => nav.classList.toggle("open"));
}

function formatINR(n){
  return new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(n);
}

function getProduct(id){
  return NOVA_PRODUCTS.find(p => String(p.id) === String(id));
}

function getWishlist(){
  try{return JSON.parse(localStorage.getItem("novaWishlist")||"[]")}catch{return []}
}
function setWishlist(list){localStorage.setItem("novaWishlist",JSON.stringify(list))}
function toggleWishlist(id){
  const list=getWishlist();
  const i=list.indexOf(Number(id));
  if(i>=0) list.splice(i,1); else list.push(Number(id));
  setWishlist(list);
  updateWishlistButtons();
}
function isWishlisted(id){return getWishlist().includes(Number(id))}
function updateWishlistButtons(){
  document.querySelectorAll("[data-wishlist]").forEach(btn=>{
    const id=Number(btn.dataset.wishlist);
    btn.classList.toggle("active",isWishlisted(id));
    btn.textContent=isWishlisted(id)?"♥":"♡";
    btn.setAttribute("aria-label",isWishlisted(id)?"Remove from wishlist":"Add to wishlist");
  });
}
function goToAffiliate(id){
  const product=getProduct(id);
  if(!product) return;
  if(!product.affiliateUrl){
    alert("This demo product does not have an affiliate link yet. Add your approved affiliate URL in js/products.js.");
    return;
  }
  window.open(product.affiliateUrl,"_blank","noopener,noreferrer");
}
function saveRecentlyViewed(id){
  let ids=[];
  try{ids=JSON.parse(localStorage.getItem("novaRecent")||"[]")}catch{}
  ids=[Number(id),...ids.filter(x=>Number(x)!==Number(id))].slice(0,8);
  localStorage.setItem("novaRecent",JSON.stringify(ids));
}
function productCard(p){
  return `<article class="product-card">
    ${p.deal?`<span class="product-badge">${p.discount}</span>`:""}
    <button class="wish" data-wishlist="${p.id}" onclick="toggleWishlist(${p.id})">♡</button>
    <a href="product.html?id=${p.id}" onclick="saveRecentlyViewed(${p.id})">
      <div class="product-image"><img loading="lazy" src="${p.image}" alt="${escapeHtml(p.name)}"></div>
    </a>
    <div class="product-body">
      <div class="product-brand">${escapeHtml(p.brand)}</div>
      <a href="product.html?id=${p.id}" onclick="saveRecentlyViewed(${p.id})"><div class="product-name">${escapeHtml(p.name)}</div></a>
      <div class="rating">★ ${p.rating} · ${p.reviews.toLocaleString("en-IN")} reviews</div>
      <div><span class="price">${formatINR(p.price)}</span><span class="old">${formatINR(p.originalPrice)}</span></div>
      <div class="discount">${escapeHtml(p.discount)}</div>
      <div class="retailer">Retailer: ${escapeHtml(p.retailer)}</div>
      <div class="product-actions">
        <a class="btn btn-outline" href="product.html?id=${p.id}" onclick="saveRecentlyViewed(${p.id})">View</a>
        <button class="btn btn-primary" onclick="goToAffiliate(${p.id})">Buy on ${escapeHtml(p.retailer)}</button>
      </div>
    </div>
  </article>`;
}
function renderProducts(list=NOVA_PRODUCTS){
  const grid=document.querySelector("[data-product-grid]");
  if(grid) grid.innerHTML=list.map(productCard).join("");
  updateWishlistButtons();
}
function renderProductsIfPresent(){
  if(document.querySelector("[data-product-grid]")) renderProducts();
}
function escapeHtml(s){
  return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));
}
function setupNewsletter(){
  const f=document.querySelector("#newsletterForm");
  if(f) f.addEventListener("submit",e=>{e.preventDefault();alert("Newsletter demo: connect an email service before collecting real subscriptions.");});
}
function categoryLink(category){
  return `products.html?category=${encodeURIComponent(category)}`;
}
