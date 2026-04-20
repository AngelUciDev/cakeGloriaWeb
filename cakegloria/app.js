// ============================================
// CakeGloria - Aplicación principal
// Sin admin.php · 100% estático y seguro
// ============================================

var cart = [];
var products = [];
var loadRetries = 0;
var MAX_RETRIES = 3;
var currentDetailId = null;

// WhatsApp: lee de productos.js, fallback por si acaso
var WHATSAPP_NUMBER = (typeof WHATSAPP_NUMBER_PRODUCTOS !== 'undefined')
    ? WHATSAPP_NUMBER_PRODUCTOS : '+5355555555';

// ============================================
// DOM
// ============================================
var productsGrid = document.getElementById('productsGrid');
var loading = document.getElementById('loading');
var cartBtn = document.getElementById('cartBtn');
var cartModal = document.getElementById('cartModal');
var cartOverlay = document.getElementById('cartOverlay');
var cartClose = document.getElementById('cartClose');
var cartItems = document.getElementById('cartItems');
var cartEmpty = document.getElementById('cartEmpty');
var cartFooter = document.getElementById('cartFooter');
var cartCount = document.getElementById('cartCount');
var cartTotal = document.getElementById('cartTotal');
var checkoutBtn = document.getElementById('checkoutBtn');
var toast = document.getElementById('toast');
var toastMessage = document.getElementById('toastMessage');
var categoryBtns = document.querySelectorAll('.category-btn');
var scrollTopBtn = document.getElementById('scrollTopBtn');
var menuToggle = document.getElementById('menuToggle');
var navLinks = document.getElementById('navLinks');
var navOverlay = document.getElementById('navOverlay');
var detailModal = document.getElementById('detailModal');
var detailOverlay = document.getElementById('detailOverlay');
var detailClose = document.getElementById('detailClose');
var detailImage = document.getElementById('detailImage');
var detailCategory = document.getElementById('detailCategory');
var detailName = document.getElementById('detailName');
var detailMeasure = document.getElementById('detailMeasure');
var detailDescription = document.getElementById('detailDescription');
var detailPrice = document.getElementById('detailPrice');
var detailAddBtn = document.getElementById('detailAddBtn');
var mainHeader = document.getElementById('mainHeader');

// ============================================
// UTILIDADES
// ============================================

// Placeholder para imágenes que no existen
var PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23FFF0E8' width='400' height='300'/%3E%3Ctext x='50%25' y='45%25' dominant-baseline='middle' text-anchor='middle' fill='%23C62828' font-size='48'%3E🎂%3C/text%3E%3Ctext x='50%25' y='60%25' dominant-baseline='middle' text-anchor='middle' fill='%239C8B80' font-size='13' font-family='sans-serif'%3EImagen del cake%3C/text%3E%3C/svg%3E";

// Formatear precio: CUP sin decimales, USD con 2 decimales
function formatPrecio(precio, moneda) {
    if (moneda === 'CUP') {
        var n = Math.round(precio);
        return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' CUP';
    }
    return parseFloat(precio).toFixed(2) + ' ' + moneda;
}

function getCategoryName(c) {
    return {
        clasicos: 'Clásico', tematicos: 'Temático',
        mini: 'Mini Cake', especiales: 'Especial'
    }[c] || c || '';
}

// ============================================
// MENÚ MÓVIL (Fix: overlay DENTRO del nav)
// ============================================
function openMenu() {
    menuToggle.classList.add('active');
    navLinks.classList.add('open');
    navOverlay.classList.add('visible');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    menuToggle.classList.remove('active');
    navLinks.classList.remove('open');
    navOverlay.classList.remove('visible');
    document.body.style.overflow = '';
}

menuToggle.addEventListener('click', function () {
    navLinks.classList.contains('open') ? closeMenu() : openMenu();
});

navOverlay.addEventListener('click', closeMenu);

// Navegación suave: dejar al navegador actuar con CSS nativo
(function () {
    var container = document.getElementById('navLinks');
    container.querySelectorAll('.nav-link').forEach(function (el) {
        var clon = el.cloneNode(true);
        el.parentNode.replaceChild(clon, el);
    });
    container.querySelectorAll('.nav-link').forEach(function (link) {
        link.addEventListener('click', function () {
            if (navLinks.classList.contains('open')) closeMenu();
        });
    });
})();

// ============================================
// HEADER SCROLL EFFECT
// ============================================
var scrollTicking = false;
window.addEventListener('scroll', function () {
    if (!scrollTicking) {
        window.requestAnimationFrame(function () {
            mainHeader.classList.toggle('scrolled', window.scrollY > 60);
            scrollTopBtn.classList.toggle('visible', window.scrollY > 500);
            scrollTicking = false;
        });
        scrollTicking = true;
    }
});

scrollTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============================================
// MODAL DETALLE CON GALERÍA
// ============================================
var galleryImages = [];
var galleryIndex = 0;
var touchStartX = 0;
var touchEndX = 0;

function getImagesArray(prod) {
    if (!prod.imagen) return [PLACEHOLDER];
    return Array.isArray(prod.imagen) ? prod.imagen : [prod.imagen];
}

function openDetail(id) {
    var prod = products.find(function(p) { return p.id === id; });
    if (!prod) return;
    currentDetailId = id;

    galleryImages = getImagesArray(prod);
    galleryIndex = 0;

    // Precargar todas las imágenes en segundo plano
    galleryImages.forEach(function(src) {
        var img = new Image();
        img.src = src;
        img.onerror = function() { this.src = PLACEHOLDER; };
    });

    renderGallery();

    detailCategory.textContent = getCategoryName(prod.categoria);
    detailName.textContent = prod.nombre;
    detailMeasure.textContent = prod.medida ? 'Medida: ' + prod.medida : '';
    detailMeasure.style.display = prod.medida ? 'inline-block' : 'none';
    detailDescription.textContent = prod.descripcion || 'Sin descripción.';
    detailPrice.innerHTML = formatPrecio(prod.precio, prod.moneda);

    var ok = prod.disponible !== false;
    detailAddBtn.disabled = !ok;
    detailAddBtn.innerHTML = ok
        ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px"><path d="M12 5v14M5 12h14"></path></svg> Añadir al pedido'
        : 'Agotado';

    detailModal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function renderGallery() {
    var wrap = document.querySelector('.detail-gallery-wrap');
    var dotsContainer = document.getElementById('galleryDots');

    // Clase para ocultar controles si hay 1 sola foto
    wrap.classList.toggle('gallery-single', galleryImages.length <= 1);

    // Imagen
    detailImage.style.opacity = '0';
    setTimeout(function () {
        detailImage.src = galleryImages[galleryIndex];
        detailImage.alt = 'Foto ' + (galleryIndex + 1);
        detailImage.onerror = function () { this.src = PLACEHOLDER; };
        detailImage.style.opacity = '1';
    }, galleryImages.length > 1 ? 120 : 0);

    // Puntos indicadores
    dotsContainer.innerHTML = '';
    galleryImages.forEach(function (_, i) {
        var dot = document.createElement('button');
        dot.className = 'gallery-dot' + (i === galleryIndex ? ' active' : '');
        dot.setAttribute('aria-label', 'Foto ' + (i + 1));
        dot.addEventListener('click', function (e) {
            e.stopPropagation();
            galleryIndex = i;
            renderGallery();
        });
        dotsContainer.appendChild(dot);
    });
}

function galleryGo(dir) {
    if (galleryImages.length <= 1) return;
    galleryIndex = (galleryIndex + dir + galleryImages.length) % galleryImages.length;
    renderGallery();
}

// Flechas
document.getElementById('galleryPrev').addEventListener('click', function (e) {
    e.stopPropagation(); galleryGo(-1);
});
document.getElementById('galleryNext').addEventListener('click', function (e) {
    e.stopPropagation(); galleryGo(1);
});

// Swipe táctil en móvil
var galleryWrap = document.querySelector('.detail-gallery-wrap');
galleryWrap.addEventListener('touchstart', function (e) {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

galleryWrap.addEventListener('touchend', function (e) {
    touchEndX = e.changedTouches[0].screenX;
    var diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
        galleryGo(diff > 0 ? 1 : -1);
    }
}, { passive: true });

// Teclado: flechas izquierda/derecha
document.addEventListener('keydown', function (e) {
    if (!detailModal.classList.contains('open')) return;
    if (e.key === 'ArrowLeft') galleryGo(-1);
    if (e.key === 'ArrowRight') galleryGo(1);
});

function closeDetail() {
    detailModal.classList.remove('open');
    document.body.style.overflow = '';
    currentDetailId = null;
    galleryImages = [];
    galleryIndex = 0;
}

detailOverlay.addEventListener('click', closeDetail);
detailClose.addEventListener('click', closeDetail);
detailAddBtn.addEventListener('click', function () {
    if (currentDetailId !== null) { addToCart(currentDetailId); closeDetail(); }
});

// ============================================
// CARGA DE PRODUCTOS
// ============================================
function cargarProductosJS() {
    return new Promise(function (resolve, reject) {
        if (typeof productosData !== 'undefined' && Array.isArray(productosData)) {
            resolve(productosData); return;
        }
        var script = document.createElement('script');
        script.src = 'productos.js';
        var timeout = setTimeout(function () {
            reject(new Error('Tiempo agotado'));
            if (script.parentNode) script.parentNode.removeChild(script);
        }, 8000);
        script.onload = function () {
            clearTimeout(timeout);
            if (typeof productosData === 'undefined') reject(new Error('No se encontró productosData'));
            else if (!Array.isArray(productosData) || !productosData.length) reject(new Error('Array vacío'));
            else resolve(productosData);
        };
        script.onerror = function () { clearTimeout(timeout); reject(new Error('Error al cargar productos.js')); };
        document.head.appendChild(script);
    });
}

function mostrarError(error) {
    productsGrid.innerHTML = '<div class="products-error"><span class="error-icon">⚠</span><h3>No se pudieron cargar los pasteles</h3><p>Verifica que <strong>productos.js</strong> exista.</p><div class="error-details">' + error.message + '</div>' + (loadRetries < MAX_RETRIES ? '<button class="retry-btn" onclick="reintentarCarga()">Reintentar</button>' : '') + '</div>';
    loading.style.display = 'none';
}

function reintentarCarga() { loadRetries++; loading.style.display = 'flex'; productsGrid.innerHTML = ''; initProducts(); }

function initProducts() {
    cargarProductosJS().then(function (data) {
        products = data;
        renderProducts(products);
        loading.style.display = 'none';
        loadRetries = 0;
        document.querySelectorAll('.product-card').forEach(function (el) { observer.observe(el); });
    }).catch(function (err) { console.error(err); mostrarError(err); });
}

// ============================================
// RENDERIZAR PRODUCTOS
// ============================================
function renderProducts(list) {
    productsGrid.innerHTML = '';
    if (!list || !list.length) { mostrarError(new Error('Sin productos')); return; }

    list.forEach(function (prod, i) {
        var ok = prod.disponible !== false;
        var card = document.createElement('article');
        card.className = 'product-card' + (ok ? '' : ' product-agotado');
        card.style.animationDelay = (i * 0.07) + 's';
        card.innerHTML =
            '<div class="product-image-container' + (ok ? '' : ' sold-out') + '" data-id="' + prod.id + '">'
            + '<img src="' + (Array.isArray(prod.imagen) ? prod.imagen[0] : prod.imagen) + '" alt="' + prod.nombre + '" class="product-image" loading="lazy" onerror="this.src=\'' + PLACEHOLDER + '\'">' + '<span class="product-category">' + getCategoryName(prod.categoria) + '</span>'
            + (prod.medida ? '<span class="product-measure-badge">' + prod.medida + '</span>' : '')
            + (ok ? '' : '<span class="sold-out-badge">AGOTADO</span>')
            + (ok ? '<button class="quick-add" data-id="' + prod.id + '" title="Añadir al pedido"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"></path></svg></button>' : '')
            + '</div>'
            + '<div class="product-info">'
            + '<h3 class="product-name" data-id="' + prod.id + '">' + prod.nombre + '</h3>'
            + '<p class="product-description">' + (prod.descripcion || '') + '</p>'
            + '<div class="product-footer">'
            + '<span class="product-price">' + formatPrecio(prod.precio, prod.moneda) + '</span>'
            + '<button class="add-to-cart-btn" data-id="' + prod.id + '"' + (ok ? '' : ' disabled') + '>' + (ok ? 'Pedir' : 'Agotado') + '</button>'
            + '</div></div>';
        productsGrid.appendChild(card);
    });

    document.querySelectorAll('.product-image-container').forEach(function (el) {
        el.addEventListener('click', function (e) {
            if (e.target.closest('.quick-add')) return;
            openDetail(parseInt(this.dataset.id));
        });
    });

    document.querySelectorAll('.product-name').forEach(function (el) {
        el.addEventListener('click', function () { openDetail(parseInt(this.dataset.id)); });
    });

    document.querySelectorAll('.add-to-cart-btn:not([disabled]), .quick-add').forEach(function (btn) {
        btn.addEventListener('click', function (e) { e.stopPropagation(); addToCart(parseInt(this.dataset.id)); });
    });
}

// ============================================
// FILTROS
// ============================================
categoryBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        categoryBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var cat = btn.dataset.category;
        renderProducts(cat === 'todos' ? products : products.filter(function (p) { return p.categoria === cat; }));
    });
});

// ============================================
// CARRITO
// ============================================
function addToCart(id) {
    var prod = products.find(function (p) { return p.id === id; });
    if (!prod) return;
    if (prod.disponible === false) { showToast('Este cake está agotado'); return; }
    var ex = cart.find(function (i) { return i.id === id; });
    if (ex) ex.cantidad++;
    else cart.push(Object.assign({}, prod, { cantidad: 1 }));
    updateCartUI();
    showToast(prod.nombre + ' añadido');
}

function removeFromCart(id) { cart = cart.filter(function (i) { return i.id !== id; }); updateCartUI(); }

function updateQuantity(id, delta) {
    var item = cart.find(function (i) { return i.id === id; });
    if (item) { item.cantidad += delta; if (item.cantidad <= 0) removeFromCart(id); else updateCartUI(); }
}

function updateCartUI() {
    var total = cart.reduce(function (s, i) { return s + i.cantidad; }, 0);
    cartCount.textContent = total;

    if (!cart.length) {
        cartEmpty.style.display = 'flex';
        cartItems.style.display = 'none';
        cartFooter.style.display = 'none';
        cartTotal.textContent = '$0';
        return;
    }

    cartEmpty.style.display = 'none';
    cartItems.style.display = 'block';
    cartFooter.style.display = 'block';

    var precioTotal = 0;
    cartItems.innerHTML = cart.map(function (item) {
        precioTotal += item.precio * item.cantidad;
        return '<div class="cart-item">'
            + '<img src="' + (Array.isArray(item.imagen) ? item.imagen[0] : item.imagen) + '" alt="" class="cart-item-image" onerror="this.src=\'' + PLACEHOLDER + '\'">' + '<div class="cart-item-info">'
            + '<h4>' + item.nombre + '</h4>'
            + (item.medida ? '<p class="cart-item-measure">' + item.medida + '</p>' : '')
            + '<p class="cart-item-price">' + formatPrecio(item.precio, item.moneda) + '</p>'
            + '</div>'
            + '<div class="cart-item-controls">'
            + '<button class="qty-btn" onclick="updateQuantity(' + item.id + ',-1)">-</button>'
            + '<span>' + item.cantidad + '</span>'
            + '<button class="qty-btn" onclick="updateQuantity(' + item.id + ',1)">+</button>'
            + '</div>'
            + '<button class="remove-btn" onclick="removeFromCart(' + item.id + ')"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"></path></svg></button>'
            + '</div>';
    }).join('');

    var mon = cart[0].moneda || 'CUP';
    cartTotal.textContent = formatPrecio(precioTotal, mon);
}

// ============================================
// MODAL CARRITO
// ============================================
cartBtn.addEventListener('click', function () {
    cartModal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

function closeCartModal() {
    cartModal.classList.remove('active');
    document.body.style.overflow = '';
}

cartOverlay.addEventListener('click', closeCartModal);
cartClose.addEventListener('click', closeCartModal);

// ============================================
// CHECKOUT (WhatsApp para cakes)
// ============================================
checkoutBtn.addEventListener('click', function () {
    if (!cart.length) return;
    var mon = cart[0].moneda || 'CUP';
    var msg = '*NUEVO PEDIDO - CakeGloria* 🎂\n━━━━━━━━━━━━━━━━━━━━\n\n';
    cart.forEach(function (item, i) {
        msg += (i + 1) + '. *' + item.nombre + '*\n';
        if (item.medida) msg += '   Medida: ' + item.medida + '\n';
        msg += '   Cantidad: ' + item.cantidad + '\n';
        msg += '   Precio: ' + formatPrecio(item.precio, mon) + '\n';
        msg += '   Subtotal: ' + formatPrecio(item.precio * item.cantidad, mon) + '\n\n';
    });
    var total = cart.reduce(function (s, i) { return s + (i.precio * i.cantidad); }, 0);
    msg += '━━━━━━━━━━━━━━━━━━━━\n*TOTAL: ' + formatPrecio(total, mon) + '*\n\n_Pedidos con 24-48 horas de anticipación_';
    window.open('https://wa.me/' + WHATSAPP_NUMBER.replace(/[^0-9]/g, '') + '?text=' + encodeURIComponent(msg), '_blank');
});

// ============================================
// CONTACTO WHATSAPP
// ============================================
document.getElementById('contactWhatsApp').addEventListener('click', function (e) {
    e.preventDefault();
    window.open('https://wa.me/' + WHATSAPP_NUMBER.replace(/[^0-9]/g, '') + '?text=' + encodeURIComponent('Hola! Quiero información sobre pasteles y pedidos.'), '_blank');
});

// ============================================
// TOAST
// ============================================
function showToast(msg) {
    toastMessage.textContent = msg;
    toast.classList.add('active');
    setTimeout(function () { toast.classList.remove('active'); }, 2500);
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    updateCartUI();
    initProducts();
    document.querySelectorAll('.process-card, .quality-card').forEach(function (el) { observer.observe(el); });
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        if (detailModal.classList.contains('open')) closeDetail();
        else if (cartModal.classList.contains('active')) closeCartModal();
        else if (navLinks.classList.contains('open')) closeMenu();
    }
});