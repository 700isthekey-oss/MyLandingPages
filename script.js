const products = {
  "signature-leotard": { category: "Leotards", name: "SIGNATURE LEOTARD", price: 148000, image: "assets/products/signature-leotard.png", description: "Minimal studio bodysuit", detail: "미니멀한 라인과 섬세한 스트랩 포인트가 있는 ETOILE의 시그니처 레오타드입니다.", sizes: ["XS", "S", "M", "L"] },
  "square-neck-leotard": { category: "Leotards", name: "SQUARE NECK LEOTARD", price: 138000, image: "assets/products/signature-leotard.png", description: "Clean square neckline", detail: "데일리 수업과 촬영룩 모두에 어울리는 스퀘어 넥 레오타드입니다.", sizes: ["XS", "S", "M", "L"] },
  "low-back-leotard": { category: "Leotards", name: "LOW BACK LEOTARD", price: 152000, image: "assets/products/signature-leotard.png", description: "Elegant low-back line", detail: "등 라인이 우아하게 드러나는 로우백 디자인입니다.", sizes: ["XS", "S", "M", "L"] },
  "long-sleeve-leotard": { category: "Leotards", name: "LONG SLEEVE LEOTARD", price: 158000, image: "assets/products/signature-leotard.png", description: "Warm studio silhouette", detail: "쌀쌀한 스튜디오에서도 단정한 라인을 유지하는 롱슬리브 레오타드입니다.", sizes: ["XS", "S", "M", "L"] },

  "ballet-skirt": { category: "Skirts", name: "BALLET SKIRT", price: 92000, image: "assets/products/ballet-skirt.png", description: "Light wrap silhouette", detail: "가볍게 감기는 랩 실루엣으로 레오타드와 타이즈 위에 자연스럽게 어울리는 스커트입니다.", sizes: ["S", "M", "L"] },
  "mesh-wrap-skirt": { category: "Skirts", name: "MESH WRAP SKIRT", price: 88000, image: "assets/products/ballet-skirt.png", description: "Sheer layered mesh", detail: "레이어드가 아름다운 메쉬 랩 스커트입니다.", sizes: ["S", "M", "L"] },
  "chiffon-midi-skirt": { category: "Skirts", name: "CHIFFON MIDI SKIRT", price: 108000, image: "assets/products/ballet-skirt.png", description: "Soft city-length skirt", detail: "수업 후 외출까지 이어지는 미디 기장의 쉬폰 스커트입니다.", sizes: ["S", "M", "L"] },
  "dust-pink-skirt": { category: "Skirts", name: "DUST PINK SKIRT", price: 96000, image: "assets/products/ballet-skirt.png", description: "Soft ballet pink tone", detail: "ETOILE의 더스트 핑크 무드를 담은 발레 스커트입니다.", sizes: ["S", "M", "L"] },

  "ballet-shorts": { category: "Ballet Shorts", name: "BALLET SHORTS", price: 86000, image: "assets/products/ballet-shorts.png", description: "High-rise training shorts", detail: "하이라이즈 실루엣으로 움직임을 안정적으로 잡아주는 발레 트레이닝 쇼츠입니다.", sizes: ["S", "M", "L"] },
  "modal-studio-shorts": { category: "Ballet Shorts", name: "MODAL STUDIO SHORTS", price: 82000, image: "assets/products/ballet-shorts.png", description: "Soft modal touch", detail: "부드러운 모달 터치감으로 매일 입기 좋은 스튜디오 쇼츠입니다.", sizes: ["S", "M", "L"] },
  "cross-waist-shorts": { category: "Ballet Shorts", name: "CROSS WAIST SHORTS", price: 89000, image: "assets/products/ballet-shorts.png", description: "Sculpted waist detail", detail: "허리 라인을 안정적으로 잡아주는 크로스 웨이스트 쇼츠입니다.", sizes: ["S", "M", "L"] },
  "pocket-training-shorts": { category: "Ballet Shorts", name: "POCKET TRAINING SHORTS", price: 94000, image: "assets/products/ballet-shorts.png", description: "Daily pocket design", detail: "수업 전후의 일상까지 고려한 포켓 디테일 쇼츠입니다.", sizes: ["S", "M", "L"] },

  "wrap-knit-warmer": { category: "Warmers", name: "WRAP KNIT WARMER", price: 118000, image: "assets/products/ballet-core-tee.png", description: "Soft wrap knit", detail: "몸을 부드럽게 감싸는 랩 니트 워머입니다.", sizes: ["S", "M", "L"] },
  "leg-warmer": { category: "Warmers", name: "LEG WARMER", price: 52000, image: "assets/products/ballet-tights.png", description: "Classic ballet warmer", detail: "클래식 발레 무드를 완성하는 레그 워머입니다.", sizes: ["ONE SIZE"] },
  "arm-warmer": { category: "Warmers", name: "ARM WARMER", price: 48000, image: "assets/products/ballet-core-tee.png", description: "Light sleeve layer", detail: "티셔츠와 레오타드 위에 가볍게 더하는 암 워머입니다.", sizes: ["ONE SIZE"] },
  "bolero-cardigan": { category: "Warmers", name: "BOLERO CARDIGAN", price: 128000, image: "assets/products/ballet-core-tee.png", description: "Studio-to-city layer", detail: "스튜디오에서 도시의 저녁까지 어울리는 볼레로 가디건입니다.", sizes: ["S", "M", "L"] },

  "big-bag": { category: "Accessories", name: "BIG BAG", price: 168000, image: "assets/products/big-bag.png", description: "From morning class to evening flights", detail: "스튜디오 용품과 일상 소지품을 함께 담기 좋은 넉넉한 사이즈의 캐리올 백입니다.", sizes: ["ONE SIZE"] },
  "cap": { category: "Accessories", name: "CAP", price: 58000, image: "assets/products/cap.png", description: "Logo point ball cap", detail: "발레코어 룩에 캐주얼한 균형을 더하는 미니멀 볼캡입니다.", sizes: ["ONE SIZE"] },
  "ballet-tights": { category: "Accessories", name: "BALLET TIGHTS", price: 42000, image: "assets/products/ballet-tights.png", description: "Soft essential tights", detail: "부드러운 착용감과 은은한 컬러감으로 매일 입기 좋은 에센셜 발레 타이즈입니다.", sizes: ["S", "M", "L"] },
  "ribbon-scrunchie": { category: "Accessories", name: "RIBBON SCRUNCHIE", price: 28000, image: "assets/products/cap.png", description: "Soft ribbon accent", detail: "포니테일과 번 스타일에 우아한 포인트를 주는 리본 스크런치입니다.", sizes: ["ONE SIZE"] },
  "studio-socks": { category: "Accessories", name: "STUDIO SOCKS", price: 26000, image: "assets/products/ballet-tights.png", description: "Daily ballet socks", detail: "수업 전후로 가볍게 착용하기 좋은 스튜디오 삭스입니다.", sizes: ["S", "M", "L"] },
  "ballet-core-tee": { category: "Accessories", name: "ETOILE CORE TEE", price: 78000, image: "assets/products/ballet-core-tee.png", description: "Made for warm-up and coffee runs", detail: "부드러운 코튼 모달 소재로 만든 데일리 발레코어 티셔츠입니다.", sizes: ["S", "M", "L"] },
};

const cartKey = "etoile-cart";
const cartCount = document.querySelector("#cart-count");
const cartItemsContainer = document.querySelector("#cart-items");
const emptyCart = document.querySelector("#empty-cart");
const subtotalElement = document.querySelector("#subtotal");
const shippingElement = document.querySelector("#shipping");
const totalElement = document.querySelector("#total");
const clearCartButton = document.querySelector("#clear-cart");
const detailImage = document.querySelector("#detail-image");
const detailName = document.querySelector("#detail-name");
const detailDescription = document.querySelector("#detail-description");
const detailPrice = document.querySelector("#detail-price");
const detailAddButton = document.querySelector("#detail-add-button");
const sizeSelect = document.querySelector("#size-select");

const formatPrice = (price) => `${price.toLocaleString("ko-KR")}원`;
const getCart = () => JSON.parse(localStorage.getItem(cartKey) || "[]");
const saveCart = (cart) => localStorage.setItem(cartKey, JSON.stringify(cart));

const updateCartCount = () => {
  if (!cartCount) return;
  cartCount.textContent = getCart().reduce((sum, item) => sum + item.quantity, 0);
};

const addToCart = (product, selectedSize = "ONE SIZE") => {
  const cart = getCart();
  const itemId = `${product.name}-${selectedSize}`;
  const existingItem = cart.find((item) => item.itemId === itemId);
  if (existingItem) existingItem.quantity += 1;
  else cart.push({ ...product, itemId, selectedSize, quantity: 1 });
  saveCart(cart);
  updateCartCount();
};

const createProductCard = ([id, product]) => `
  <article class="product-card" data-name="${product.name.toLowerCase()}" data-category="${product.category.toLowerCase()}">
    <a class="product-link" href="product.html?id=${id}">
      <img src="${product.image}" alt="${product.name}">
      <div class="product-info">
        <span class="category-label">${product.category}</span>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
      </div>
    </a>
    <div class="product-bottom">
      <span>${formatPrice(product.price)}</span>
      <button type="button" data-product-id="${id}">Add</button>
    </div>
  </article>`;

const bindAddButtons = () => {
  document.querySelectorAll("[data-product-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const product = products[button.dataset.productId];
      if (!product) return;
      addToCart(product, product.sizes?.[0] || "ONE SIZE");
      const originalText = button.textContent;
      button.textContent = "Added";
      button.disabled = true;
      window.setTimeout(() => { button.textContent = originalText; button.disabled = false; }, 900);
    });
  });
};

const renderShop = () => {
  const container = document.querySelector("#shop-categories");
  if (!container) return;
  const categories = ["Leotards", "Skirts", "Ballet Shorts", "Warmers", "Accessories"];
  container.innerHTML = categories.map((category) => {
    const items = Object.entries(products).filter(([, product]) => product.category === category);
    return `<section class="category-section"><div class="category-heading"><h3>${category}</h3><span>${items.length} items</span></div><div class="product-grid">${items.map(createProductCard).join("")}</div></section>`;
  }).join("");
  bindAddButtons();
};

const renderCart = () => {
  if (!cartItemsContainer) return;
  const cart = getCart();
  cartItemsContainer.innerHTML = "";
  emptyCart.hidden = cart.length > 0;
  cart.forEach((item) => {
    const cartItem = document.createElement("article");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item-info"><h3>${item.name}</h3><p>${item.description}</p><p>Size: ${item.selectedSize || "ONE SIZE"}</p><strong>${formatPrice(item.price)}</strong></div>
      <div class="quantity-control" aria-label="${item.name} quantity"><button type="button" data-action="decrease" data-id="${item.itemId}">-</button><span>${item.quantity}</span><button type="button" data-action="increase" data-id="${item.itemId}">+</button></div>
      <button class="remove-button" type="button" data-action="remove" data-id="${item.itemId}">Remove</button>`;
    cartItemsContainer.appendChild(cartItem);
  });
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal === 0 || subtotal >= 70000 ? 0 : 3000;
  subtotalElement.textContent = formatPrice(subtotal);
  shippingElement.textContent = shipping === 0 ? "Free" : formatPrice(shipping);
  totalElement.textContent = formatPrice(subtotal + shipping);
  updateCartCount();
};

const renderProductDetail = () => {
  if (!detailImage || !detailName || !detailDescription || !detailPrice || !detailAddButton || !sizeSelect) return;
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id") || "signature-leotard";
  const product = products[productId] || products["signature-leotard"];
  document.title = `${product.name} | ETOILE`;
  detailImage.src = product.image;
  detailImage.alt = product.name;
  detailName.textContent = product.name;
  detailDescription.textContent = product.detail;
  detailPrice.textContent = formatPrice(product.price);
  detailAddButton.dataset.productId = productId;
  sizeSelect.innerHTML = product.sizes.map((size, index) => `<option ${index === 0 ? "selected" : ""}>${size}</option>`).join("");
};

detailAddButton?.addEventListener("click", () => {
  const product = products[detailAddButton.dataset.productId];
  if (!product) return;
  addToCart(product, sizeSelect.value);
  detailAddButton.textContent = "Added to cart";
  window.setTimeout(() => { detailAddButton.textContent = "Add to cart"; }, 900);
});

cartItemsContainer?.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  const cart = getCart();
  const item = cart.find((cartItem) => cartItem.itemId === button.dataset.id);
  if (button.dataset.action === "remove") saveCart(cart.filter((cartItem) => cartItem.itemId !== button.dataset.id));
  if (item && button.dataset.action === "increase") { item.quantity += 1; saveCart(cart); }
  if (item && button.dataset.action === "decrease") { item.quantity -= 1; saveCart(item.quantity > 0 ? cart : cart.filter((cartItem) => cartItem.itemId !== item.itemId)); }
  renderCart();
});

clearCartButton?.addEventListener("click", () => { saveCart([]); renderCart(); });

const setupSearch = () => {
  const panel = document.querySelector("#search-panel");
  const open = document.querySelector("#search-toggle");
  const close = document.querySelector("#search-close");
  const input = document.querySelector("#product-search");
  const results = document.querySelector("#search-results");
  if (!panel || !open || !close || !input || !results) return;
  const showResults = () => {
    const keyword = input.value.trim().toLowerCase();
    const matched = Object.entries(products).filter(([, product]) => `${product.name} ${product.category} ${product.description}`.toLowerCase().includes(keyword)).slice(0, 8);
    results.innerHTML = matched.map(([id, product]) => `<a href="product.html?id=${id}"><span>${product.name}</span><small>${product.category} · ${formatPrice(product.price)}</small></a>`).join("") || "<p>No products found.</p>";
  };
  open.addEventListener("click", () => { panel.hidden = false; input.focus(); showResults(); });
  close.addEventListener("click", () => { panel.hidden = true; });
  input.addEventListener("input", showResults);
};

const setupAuthForms = () => {
  document.querySelectorAll(".auth-form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const message = form.querySelector(".form-message");
      if (message) message.textContent = form.dataset.success || "Saved.";
    });
  });
};

renderShop();
updateCartCount();
renderProductDetail();
renderCart();
setupSearch();
setupAuthForms();
