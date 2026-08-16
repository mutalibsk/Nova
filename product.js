document.addEventListener("DOMContentLoaded",()=>{
  const params=new URLSearchParams(location.search);
  const id=params.get("id");
  const p=getProduct(id);
  const root=document.querySelector("[data-product-detail]");
  if(!root)return;
  if(!p){root.innerHTML='<div class="empty"><h2>Product not found</h2><a class="btn btn-primary" href="products.html">Back to products</a></div>';return;}
  saveRecentlyViewed(p.id);
  root.innerHTML=`<div class="detail">
    <div class="gallery">
      <div class="gallery-main"><img src="${p.image}" alt="${escapeHtml(p.name)}"></div>
      <div style="display:flex;gap:10px;margin-top:12px"><span class="score">NOVA score ${p.score}/100</span><span class="score">Verified listing demo</span></div>
    </div>
    <div class="detail-info">
      <div class="product-brand">${escapeHtml(p.brand)} · ${escapeHtml(p.category)}</div>
      <h1>${escapeHtml(p.name)}</h1>
      <div class="rating">★ ${p.rating} · ${p.reviews.toLocaleString("en-IN")} reviews</div>
      <p>${escapeHtml(p.description)}</p>
      <h2><span class="price">${formatINR(p.price)}</span> <span class="old">${formatINR(p.originalPrice)}</span></h2>
      <div class="discount">${escapeHtml(p.discount)}</div>
      <h3>Key features</h3><ul class="feature-list">${p.features.map(x=>`<li>${escapeHtml(x)}</li>`).join("")}</ul>
      <h3>Why we recommend it</h3><p class="muted">This demo recommendation is based on the sample NOVA score. Replace it with verified editorial criteria for real products.</p>
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:18px">
        <button class="btn btn-primary" onclick="goToAffiliate(${p.id})">Check Price & Buy</button>
        <button class="btn btn-outline" data-wishlist="${p.id}" onclick="toggleWishlist(${p.id})">♡ Wishlist</button>
      </div>
      <p class="muted" style="font-size:12px;margin-top:15px">You will be redirected to the retailer's website to complete your purchase. NOVA may earn a commission from qualifying affiliate links.</p>
    </div>
  </div>
  <section class="section"><div class="section-head"><div><h2>Pros & Cons</h2></div></div><div class="trust">
    <div class="trust-card"><h3>Pros</h3><ul>${p.pros.map(x=>`<li>${escapeHtml(x)}</li>`).join("")}</ul></div>
    <div class="trust-card"><h3>Cons</h3><ul>${p.cons.map(x=>`<li>${escapeHtml(x)}</li>`).join("")}</ul></div>
  </div></section>
  <section class="section"><div class="section-head"><div><h2>Related products</h2></div></div><div class="grid">${NOVA_PRODUCTS.filter(x=>x.category===p.category&&x.id!==p.id).slice(0,5).map(productCard).join("")}</div></section>`;
  updateWishlistButtons();
});
