const products = {
  "square-neck-white": { category: "Leotards", name: "SQUARE NECK WHITE", price: 138000, image: "assets/products/leotard-square-neck-white.png", description: "Clean white square neckline", detail: "화이트 컬러의 미니멀한 스퀘어 넥 레오타드입니다. 밝은 스튜디오 룩에 가장 잘 어울립니다.", sizes: ["XS", "S", "M", "L"] },
  "scoop-back-dust-pink": { category: "Leotards", name: "SCOOP BACK DUST PINK", price: 148000, image: "assets/products/leotard-scoop-back-dust-pink.png", description: "Soft dust pink back line", detail: "더스트 핑크 컬러와 부드러운 스쿱 백 라인이 어우러진 레오타드입니다.", sizes: ["XS", "S", "M", "L"] },
  "cap-sleeve-lavender": { category: "Leotards", name: "CAP SLEEVE LAVENDER", price: 152000, image: "assets/products/leotard-cap-sleeve-lavender.png", description: "Muted lavender cap sleeve", detail: "라벤더 컬러의 캡 슬리브 레오타드로 여성스럽고 단정한 실루엣을 제안합니다.", sizes: ["XS", "S", "M", "L"] },
  "wide-strap-black": { category: "Leotards", name: "WIDE STRAP BLACK", price: 158000, image: "assets/products/leotard-wide-strap-black.png", description: "Classic black studio piece", detail: "블랙 컬러의 와이드 스트랩 레오타드입니다. 가장 클래식한 ETOILE 스튜디오 룩입니다.", sizes: ["XS", "S", "M", "L"] },
  "long-sleeve-ivory": { category: "Leotards", name: "LONG SLEEVE IVORY", price: 168000, image: "assets/products/leotard-long-sleeve-ivory.png", description: "Soft ivory long sleeve", detail: "아이보리 컬러의 롱슬리브 레오타드로 워밍업과 수업 전후 모두에 어울립니다.", sizes: ["XS", "S", "M", "L"] },
  "sweetheart-navy": { category: "Leotards", name: "SWEETHEART NAVY", price: 158000, image: "assets/products/leotard-sweetheart-navy.png", description: "Deep navy sweetheart line", detail: "네이비 컬러의 스윗하트 넥 레오타드입니다. 블랙보다 부드럽고 세련된 무드를 줍니다.", sizes: ["XS", "S", "M", "L"] },

  "ballet-skirt-dust-pink": { category: "Skirts", name: "BALLET SKIRT DUST PINK", price: 92000, image: "assets/products/ballet-skirt.png", description: "Light pink wrap silhouette", detail: "더스트 핑크 컬러의 가벼운 랩 실루엣 스커트입니다.", sizes: ["S", "M", "L"] },
  "mesh-wrap-pink": { category: "Skirts", name: "MESH WRAP PINK", price: 88000, image: "assets/products/mesh-wrap-skirt.png", description: "Sheer pink layered mesh", detail: "핑크 톤의 레이어드 메쉬 랩 스커트입니다.", sizes: ["S", "M", "L"] },
  "chiffon-midi-blush": { category: "Skirts", name: "CHIFFON MIDI BLUSH", price: 108000, image: "assets/products/chiffon-midi-skirt.png", description: "Soft blush city-length skirt", detail: "블러시 핑크 톤의 미디 기장 쉬폰 스커트입니다.", sizes: ["S", "M", "L"] },
  "dust-pink-skirt": { category: "Skirts", name: "DUST PINK SKIRT", price: 96000, image: "assets/products/dust-pink-skirt.png", description: "Soft ballet pink tone", detail: "ETOILE의 더스트 핑크 무드를 담은 발레 스커트입니다.", sizes: ["S", "M", "L"] },

  "ballet-shorts-black": { category: "Ballet Shorts", name: "BALLET SHORTS BLACK", price: 86000, image: "assets/products/ballet-shorts.png", description: "Black high-rise training shorts", detail: "블랙 컬러의 하이라이즈 발레 트레이닝 쇼츠입니다.", sizes: ["S", "M", "L"] },
  "cross-waist-black": { category: "Ballet Shorts", name: "CROSS WAIST BLACK", price: 89000, image: "assets/products/cross-waist-shorts.png", description: "Black sculpted waist detail", detail: "블랙 컬러의 크로스 웨이스트 쇼츠입니다.", sizes: ["S", "M", "L"] },
  "modal-studio-black": { category: "Ballet Shorts", name: "MODAL STUDIO BLACK", price: 82000, image: "assets/products/modal-studio-shorts.png", description: "Black soft modal touch", detail: "블랙 모달 소재로 만든 데일리 스튜디오 쇼츠입니다.", sizes: ["S", "M", "L"] },
  "pocket-training-black": { category: "Ballet Shorts", name: "POCKET TRAINING BLACK", price: 94000, image: "assets/products/pocket-training-shorts.png", description: "Black daily pocket design", detail: "블랙 컬러의 포켓 디테일 트레이닝 쇼츠입니다.", sizes: ["S", "M", "L"] },

  "wrap-knit-ivory": { category: "Warmers", name: "WRAP KNIT IVORY", price: 118000, image: "assets/products/wrap-knit-warmer.png", description: "Ivory soft wrap knit", detail: "아이보리 컬러의 부드러운 랩 니트 워머입니다.", sizes: ["S", "M", "L"] },
  "leg-warmer-pale-pink": { category: "Warmers", name: "LEG WARMER PALE PINK", price: 52000, image: "assets/products/leg-warmer.png", description: "Pale pink ballet warmer", detail: "페일 핑크 컬러의 클래식 레그 워머입니다.", sizes: ["ONE SIZE"] },
  "arm-warmer-ivory": { category: "Warmers", name: "ARM WARMER IVORY", price: 48000, image: "assets/products/arm-warmer.png", description: "Ivory light sleeve layer", detail: "아이보리 컬러의 가벼운 암 워머입니다.", sizes: ["ONE SIZE"] },
  "bolero-cardigan-ivory": { category: "Warmers", name: "BOLERO CARDIGAN IVORY", price: 128000, image: "assets/products/bolero-cardigan.png", description: "Ivory studio-to-city layer", detail: "아이보리 컬러의 볼레로 가디건입니다.", sizes: ["S", "M", "L"] },

  "big-bag-black": { category: "Accessories", name: "BIG BAG BLACK", price: 168000, image: "assets/products/big-bag.png", description: "Black studio-to-travel carryall", detail: "블랙 컬러의 넉넉한 캐리올 백입니다. 스튜디오, 오피스, 공항까지 이어집니다.", sizes: ["ONE SIZE"] },
  "cap-black": { category: "Accessories", name: "CAP BLACK", price: 58000, image: "assets/products/cap.png", description: "Black logo point ball cap", detail: "블랙 컬러의 미니멀 로고 볼캡입니다.", sizes: ["ONE SIZE"] },
  "ballet-tights-pink": { category: "Accessories", name: "BALLET TIGHTS PALE PINK", price: 42000, image: "assets/products/ballet-tights.png", description: "Pale pink essential tights", detail: "페일 핑크 컬러의 에센셜 발레 타이츠입니다.", sizes: ["S", "M", "L"] },
  "ribbon-scrunchie-black": { category: "Accessories", name: "RIBBON SCRUNCHIE BLACK", price: 28000, image: "assets/products/ribbon-scrunchie.png", description: "Black ribbon accent", detail: "블랙 리본 포인트의 스크런치입니다.", sizes: ["ONE SIZE"] },
  "studio-socks-pale-pink": { category: "Accessories", name: "STUDIO SOCKS PALE PINK", price: 26000, image: "assets/products/studio-socks.png", description: "Pale pink ballet socks", detail: "페일 핑크 컬러의 스튜디오 삭스입니다.", sizes: ["S", "M", "L"] },
  "etoile-core-tee-ivory": { category: "Accessories", name: "ETOILE CORE TEE IVORY", price: 78000, image: "assets/products/ballet-core-tee.png", description: "Ivory warm-up and coffee run tee", detail: "아이보리 컬러의 코튼 모달 데일리 티셔츠입니다.", sizes: ["S", "M", "L"] },
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
const productId = params.get("id");
if (!productId || !products[productId]) return;

const product = products[productId];
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

const setupLanguageSwitch = () => {
  const buttons = document.querySelectorAll(".language-switch button");
  if (!buttons.length) return;

  const translations = {
    KR: {
      heroEyebrow: "꿈꾸고 움직이는 모든 여성을 위해",
      heroSubtitle: "당신의 일상이 하나의 무대가 됩니다.",
      shopCollection: "컬렉션 보기",
      campaignTitle: "꿈꾸고, 움직이고,<br>다시 시작하는 모든 여성을 위해.",
      campaignBody: "ETOILE은 발레의 조용한 훈련과 일상 속 자신감에서 영감을 받은 브랜드입니다.<br>스튜디오, 거리, 주말과 여행의 순간을 하나의 정제된 옷장으로 제안합니다.",
      bigBagBody: "스튜디오, 오피스, 주말까지. 움직이는 하루를 위한 캐리올 백.",
      viewProduct: "제품 보기",
      lookbookTitle: "스튜디오의 아침부터 도시의 저녁까지.",
      lookbookBody: "ETOILE은 움직이는 하루의 리듬을 따라갑니다.<br>움직이는 여성을 위한 컬렉션입니다.",
      aboutTitle: "움직임과 일상을 하나의 무대로.",
      aboutBody: "ETOILE은 발레코어 감성을 바탕으로 한 프리미엄 여성 애슬레저 브랜드입니다. 운동복처럼 편안하고, 외출복처럼 단정한 실루엣을 제안합니다.",
      guestbookTitle: "꿈꾸는 사람들의 기록",
      guestbookIntro: "ETOILE의 시작을 함께 지나간 사람들의 기록.",
      leaveNote: "기록 남기기",
      shopTitle: "카테고리별 컬렉션",
      shopBody: "레오타드, 스커트, 발레 쇼츠, 워머, 기타용품까지 ETOILE의 움직이는 하루를 위한 제품군입니다."
    },
    EN: {
      heroEyebrow: "For every woman who dreams and moves",
      heroSubtitle: "Your everyday life becomes a stage.",
      shopCollection: "Shop the collection",
      campaignTitle: "For every woman who dreams and moves,<br>and begins again.",
      campaignBody: "ETOILE is inspired by the quiet discipline of ballet and the confidence carried into everyday life.<br>Studio, street, weekend and travel are gathered into one refined wardrobe.",
      bigBagBody: "Studio. Office. Weekend. A carryall designed for a moving life.",
      viewProduct: "View product",
      lookbookTitle: "From studio mornings to evenings in the city.",
      lookbookBody: "ETOILE follows the rhythm of a moving life.<br>A collection designed for women in motion.",
      aboutTitle: "Movement and everyday life, brought onto one stage.",
      aboutBody: "ETOILE is a premium women’s athleisure brand inspired by balletcore. It proposes silhouettes that feel as comfortable as activewear and as polished as everyday clothing.",
      guestbookTitle: "Notes from the Dreamers",
      guestbookIntro: "A trace left by those who passed through the beginning of ETOILE.",
      leaveNote: "Leave a Note",
      shopTitle: "Collection by category",
      shopBody: "From leotards and skirts to ballet shorts, warmers and accessories, ETOILE offers pieces for a moving day."
    }
  };

  const applyLanguage = (lang) => {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      const value = translations[lang]?.[key];

      if (!value) return;

      if (value.includes("<br>")) {
        element.innerHTML = value;
      } else {
        element.textContent = value;
      }
    });

    buttons.forEach((button) => {
      button.classList.toggle("active", button.textContent.trim() === lang);
    });

    localStorage.setItem("etoile-language", lang);
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      applyLanguage(button.textContent.trim());
    });
  });

  applyLanguage(localStorage.getItem("etoile-language") || "KR");
};
renderShop();
updateCartCount();
renderProductDetail();
renderCart();
setupSearch();
setupLanguageSwitch();
