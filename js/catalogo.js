/* =====================================================
   LÓGICA DEL CATÁLOGO — FLOWERS SUSI LOP
   Buscador, filtros, orden por precio en columnas y lightbox.
   Requiere js/productos.js cargado antes.
   ===================================================== */

let currentFilter = 'todos';
let searchTerm = '';

function productCode(p) { return String(p.id).padStart(3, '0'); }

function productPhotoUrl(p) {
    return SITE_URL + p.image.replace(/^\//, '');
}

function normalizeText(t) {
    return t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
}

function formatPrice(price) {
    if (price === null || price === undefined) return 'Consultar precio';
    return '$' + price.toLocaleString('es-CO');
}

function priceValue(p) {
    return (p.price === null || p.price === undefined) ? Number.MAX_SAFE_INTEGER : p.price;
}

function matchesPriceFilter(p, filter) {
    const v = p.price;
    if (v === null || v === undefined) return false;
    if (filter === 'precio-bajo') return v < 120000;
    if (filter === 'precio-medio') return v >= 120000 && v <= 200000;
    if (filter === 'precio-alto') return v > 200000;
    return false;
}

/* ===== Orden por precio repartido en columnas =====
   La primera columna queda con lo más económico y la última con lo más alto. */
function gridColumnCount(grid) {
    const t = getComputedStyle(grid).gridTemplateColumns;
    if (!t || t === 'none') return 1;
    return t.trim().split(/\s+/).filter(Boolean).length || 1;
}

function orderByPriceInColumns(list, grid) {
    const sorted = list.slice().sort(function (a, b) {
        return priceValue(a) - priceValue(b) || a.id - b.id;
    });
    const cols = gridColumnCount(grid);
    if (cols <= 1 || sorted.length <= cols) return sorted;
    const base = Math.floor(sorted.length / cols);
    const rem = sorted.length % cols;
    const sizes = [], starts = [];
    let acc = 0;
    for (let c = 0; c < cols; c++) {
        sizes.push(base + (c < rem ? 1 : 0));
        starts.push(acc);
        acc += sizes[c];
    }
    const out = [];
    for (let r = 0; r < sizes[0]; r++) {
        for (let c = 0; c < cols; c++) {
            if (r < sizes[c]) out.push(sorted[starts[c] + r]);
        }
    }
    return out;
}

const WA_ICON = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>';

function renderProducts() {
    const grid = document.getElementById('products-grid');
    const emptyState = document.getElementById('empty-state');
    const resultsCount = document.getElementById('results-count');
    if (!grid) return;

    let filtered = products;

    if (currentFilter === 'consultar') {
        filtered = filtered.filter(p => p.price === null || p.price === undefined);
    } else if (currentFilter.indexOf('precio-') === 0) {
        filtered = filtered.filter(p => matchesPriceFilter(p, currentFilter));
    } else if (currentFilter !== 'todos') {
        filtered = filtered.filter(p => p.categories.indexOf(currentFilter) !== -1);
    }

    if (searchTerm.trim()) {
        const q = normalizeText(searchTerm.trim());
        filtered = filtered.filter(p =>
            normalizeText(p.name).includes(q) ||
            normalizeText(p.description).includes(q) ||
            productCode(p).includes(q)
        );
    }

    if (resultsCount) resultsCount.textContent = filtered.length;

    if (filtered.length === 0) {
        grid.style.display = 'none';
        if (emptyState) emptyState.classList.add('active');
        return;
    }

    grid.style.display = 'grid';
    if (emptyState) emptyState.classList.remove('active');

    filtered = orderByPriceInColumns(filtered, grid);

    grid.innerHTML = filtered.map(p => {
        const code = productCode(p);
        const catTags = p.categories
            .filter(c => categoryLabels[c])
            .map(c => '<span class="product-tag product-tag-cat">' + categoryLabels[c] + '</span>')
            .join('');
        const waText = encodeURIComponent(
            'Hola Flowers Susi Lop, me interesa: ' + p.name +
            ' (Cod. ' + code + ') - ' + formatPrice(p.price) +
            ' | Foto: ' + productPhotoUrl(p)
        );
        const safeName = p.name.replace(/'/g, "\\'");
        return '' +
        '<div class="product-card" data-categories="' + p.categories.join(' ') + '">' +
            '<div class="product-image-container" onclick="openLightbox(\'' + p.image + '\', \'' + safeName + '\', \'' + formatPrice(p.price) + '\')">' +
                '<img src="' + p.image + '" alt="' + p.name + ' - floristería en Cali" class="product-image" loading="lazy">' +
                '<div class="zoom-icon">' +
                    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
                        '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>' +
                        '<line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>' +
                    '</svg>' +
                '</div>' +
            '</div>' +
            '<div class="product-info">' +
                '<h3 class="product-name">' + p.name + '</h3>' +
                '<div class="product-description"><div class="pd-clamp">' + p.description + '</div></div>' +
                '<div class="product-footer">' +
                    '<div>' +
                        '<span class="price-label">Desde</span>' +
                        '<div class="product-price">' + formatPrice(p.price) + '</div>' +
                    '</div>' +
                    '<a href="https://wa.me/' + WHATSAPP_NUMBER + '?text=' + waText + '" class="btn-order" target="_blank" rel="noopener" onclick="trackOrder(\'' + code + '\', \'' + safeName + '\')">' +
                        WA_ICON + 'Pedir' +
                    '</a>' +
                '</div>' +
                '<div class="product-tags">' +
                    '<span class="product-tag product-tag-code">Cod. ' + code + '</span>' +
                    catTags +
                '</div>' +
            '</div>' +
        '</div>';
    }).join('');
}

/* ===== Eventos ===== */
function initCatalog() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.dataset.filter || 'todos';
            renderProducts();
        });
    });

    const search = document.getElementById('product-search');
    if (search) {
        search.addEventListener('input', function () {
            searchTerm = this.value;
            renderProducts();
        });
    }

    const lb = document.getElementById('lightbox');
    const lbClose = document.getElementById('lightbox-close');
    if (lbClose) lbClose.addEventListener('click', closeLightbox);
    if (lb) {
        lb.addEventListener('click', function (e) { if (e.target === this) closeLightbox(); });
    }
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeLightbox(); });

    const scrollTopBtn = document.getElementById('scroll-top');
    if (scrollTopBtn) {
        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 600) scrollTopBtn.classList.add('visible');
            else scrollTopBtn.classList.remove('visible');
        });
        scrollTopBtn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* Reordena las columnas cuando cambia el ancho de la ventana */
    let rzTimer = null, rzCols = null;
    window.addEventListener('resize', function () {
        clearTimeout(rzTimer);
        rzTimer = setTimeout(function () {
            const g = document.getElementById('products-grid');
            if (!g || g.style.display === 'none') return;
            const c = gridColumnCount(g);
            if (c !== rzCols) { rzCols = c; renderProducts(); }
        }, 180);
    });

    renderProducts();
}

function openLightbox(image, name, price) {
    const img = document.getElementById('lightbox-image');
    if (!img) return;
    img.src = image;
    img.alt = name;
    document.getElementById('lightbox-title').textContent = name;
    document.getElementById('lightbox-price').textContent = price;
    document.getElementById('lightbox').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lb = document.getElementById('lightbox');
    if (lb) lb.classList.remove('active');
    document.body.style.overflow = '';
}

function trackOrder(code, name) {
    try {
        if (typeof gtag === 'function') {
            gtag('event', 'product_order', {
                'event_category': 'Catalogo',
                'event_label': 'Cod. ' + code + ' - ' + name
            });
        }
    } catch (e) { /* sin analytics, seguimos */ }
    return true;
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCatalog);
} else {
    initCatalog();
}
