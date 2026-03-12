// ===================================
// LANDING PAGE JS - Atelier Vergara Cali
// Catálogo con prioridad por categoría + Conversiones Google Ads
// ===================================

// --- DATOS DEL CATÁLOGO COMPLETO ---
const products = [

// ── FLORES NATURALES ─────────────────────────────────────────────────────────

{ id: 41, code: "041", category: "ramos", tags: ["flores"], name: "Jardín Clásico", description: "Arreglo tradicional con claveles frescos que representan amor duradero. Belleza atemporal y fragancia natural que nunca pasa de moda en cualquier ocasión especial.", price: 121250, image: "assets/images/ramo41.webp" },

{ id: 37, code: "037", category: "ramos", tags: ["girasoles"], name: "Sol Solitario", description: "Un girasol radiante que representa alegría, esperanza y amor sincero. Ideal para detalles sencillos pero significativos que alegran el día con luz natural pura.", price: 122500, image: "assets/images/ramo37.webp" },

{ id: 12, code: "012", category: "ramos", tags: ["flores"], name: "Jardín Clásico", description: "Arreglo sofisticado con hortensias, lirios, margaritas y follaje selecto. Envuelto en papel coreano con elegancia atemporal que nunca falla. Perfecto para cualquier ocasión especial.", price: 125000, image: "assets/images/ramo12.webp" },

{ id: 40, code: "040", category: "ramos", tags: ["rosas"], name: "Ternura Rosada", description: "Delicado ramo de rosas rosadas que transmiten amor tierno y dulzura pura. Perfecto para expresar cariño sincero con elegancia suave que enamora naturalmente siempre.", price: 125000, image: "assets/images/ramo40.webp" },

{ id: 43, code: "043", category: "ramos", tags: ["rosas"], name: "Bouquet Mariposa", description: "Bouquet de rosas frescas con delicada decoración de mariposa. Un toque de elegancia y fantasía que convierte cada rosa en una obra de arte natural llena de encanto.", price: 112500, image: "assets/images/ramo43.webp" },

{ id: 44, code: "044", category: "ramos", tags: ["gerberas"], name: "Alegría Amarilla", description: "Radiante ramo de gerberas amarillas frescas que irradian energía positiva y felicidad pura. Perfecto para celebrar momentos especiales con color vibrante y alegría desbordante.", price: 125000, image: "assets/images/ramo44.webp" },

{ id: 6, code: "006", category: "ramos", tags: ["girasoles"], name: "Dúo Solar", description: "Arreglo luminoso con 2 girasoles, flor de encaje blanca y tarjeta en papel fotográfico totalmente personalizable. Envuelto en papel coreano para alegrar cualquier día.", price: 146250, image: "assets/images/ramo6.webp" },

{ id: 31, code: "031", category: "ramos", tags: ["flores"], name: "Detalle Encantador", description: "Arreglo floral cuidadosamente diseñado con flores frescas seleccionadas. Perfecto para sorprender con elegancia natural y belleza atemporal que conquista corazones inmediatamente.", price: 147500, image: "assets/images/ramo31.webp" },

{ id: 46, code: "046", category: "ramos", tags: ["rosas"], name: "Corazón Rosado", description: "Exquisita caja de rosas rosadas presentadas en forma de corazón. Diseño romántico que expresa ternura y amor con elegancia visual que conquista desde el primer instante.", price: 181250, image: "assets/images/ramo46.webp" },

{ id: 36, code: "036", category: "ramos", tags: ["rosas"], name: "Clásico Efectivo", description: "Bouquet tradicional con rosas frescas cuidadosamente seleccionadas. Elegancia atemporal que nunca falla para expresar amor sincero en cualquier ocasión especial del corazón.", price: 193750, image: "assets/images/ramo36.webp" },

{ id: 45, code: "045", category: "ramos", tags: ["rosas"], name: "Pasión Bicolor", description: "Elegante ramo que fusiona rosas blancas y rojas en perfecta armonía. Contraste entre pureza y pasión que expresa amor sincero con belleza sofisticada e impacto visual memorable.", price: 193750, image: "assets/images/ramo45.webp" },

{ id: 34, code: "034", category: "ramos", tags: ["flores"], name: "Elegancia en Cristal", description: "Arreglo sofisticado con flores frescas + jarrón elegante en vidrio incluido. Perfecto para decorar espacios con belleza natural que permanece y embellece siempre.", price: 206250, image: "assets/images/ramo34.webp" },

{ id: 25, code: "025", category: "ramos", tags: ["rosas"], name: "Corazón Abierto", description: "Hermosa presentación de 24 rosas abiertas en elegante caja de corazón. Diseño que simboliza amor floreciente y sincero desde el primer instante visual.", price: 225000, image: "assets/images/ramo25.webp" },

{ id: 30, code: "030", category: "ramos", tags: ["girasoles"], name: "Quinteto Solar", description: "Incluye 5 girasoles + flor de encaje + carta en papel fotográfico personalizable + 2 fotos impresas estilo instantánea + chocolatina. Alegría completa en un solo detalle.", price: 231250, image: "assets/images/ramo30.webp" },

{ id: 5, code: "005", category: "ocasiones", tags: ["rosas"], name: "Logro Coronado", description: "Ramo especial con 24 rosas + flores blancas + birrete pequeño + hojas de encaje + relleno de flor verde + 2 mariposas. Envuelto en papel coreano para celebrar éxitos académicos memorables.", price: 250000, image: "assets/images/ramo5.webp" },

{ id: 32, code: "032", category: "ramos", tags: ["rosas"], name: "Abundancia Amorosa", description: "Ramo generoso con 46 rosas frescas en presentación elegante. Diseñado para expresar amor grande con belleza natural que impacta desde el primer vistazo siempre.", price: 262500, image: "assets/images/ramo32.webp" },

{ id: 1, code: "001", category: "ramos", tags: ["rosas"], name: "Monumentalidad Floral", description: "Magnífico ramo que simboliza amor y dedicación con intensidad desbordante. Cada rosa seleccionada representa delicadeza y belleza única que conquista corazones. Perfecto para declaraciones importantes y momentos inolvidables.", price: 268750, image: "assets/images/ramo1.webp" },

{ id: 21, code: "021", category: "ramos", tags: ["rosas"], name: "Vuelo de Pasión", description: "Ramo espectacular de 48 rosas naturales con mariposas decorativas. Ideal para enamorar profundamente o celebrar fechas especiales con elegancia absoluta memorable.", price: 275000, image: "assets/images/ramo21.webp" },

{ id: 38, code: "038", category: "ramos", tags: ["girasoles","rosas"], name: "Dualidad Radiante", description: "Hermosa fusión de girasoles luminosos y rosas frescas en perfecta armonía. Combina alegría solar con romance apasionado en arreglo que conquista corazones desde el primer vistazo.", price: 312500, image: "assets/images/ramo38.webp" },

{ id: 26, code: "026", category: "ocasiones", tags: ["rosas"], name: "Pregunta del Alma", description: "Ramo buchón de 48 rosas + cinta con frase '¿Puedo ser tu novio?' + flor blanca de encaje. Diseñado especialmente para el momento más importante del corazón.", price: 331250, image: "assets/images/ramo26.webp" },

{ id: 29, code: "029", category: "ramos", tags: ["rosas"], name: "Mensaje Buchón", description: "Ramo buchón de 48 rosas + corona pequeña + mariposa + cinta con frase personalizada. Envuelto en papel coreano para expresar exactamente lo que sientes.", price: 337500, image: "assets/images/ramo29.webp" },

{ id: 39, code: "039", category: "ramos", tags: ["girasoles"], name: "Constelación Solar", description: "Bouquet abundante de girasoles radiantes que irradian energía positiva y felicidad. Diseñado para iluminar espacios y alegrar días con luz natural desbordante y esperanza sincera.", price: 337500, image: "assets/images/ramo39.webp" },

{ id: 47, code: "047", category: "ramos", tags: ["rosas"], name: "Corazón Bicolor", description: "Espectacular bouquet de rosas amarillas y rojas en forma de corazón. Fusiona alegría solar con pasión romántica en presentación de alto impacto que enamora profundamente.", price: 337500, image: "assets/images/ramo47.webp" },

{ id: 23, code: "023", category: "ocasiones", tags: ["rosas"], name: "Celebración Buchona", description: "Ramo de 48 rosas naturales + cinta personalizada 'Feliz Cumpleaños' + corona mediana + moño satinado + carta en papel fotográfico + globo inflado en helio. Celebración completa.", price: 343750, image: "assets/images/ramo23.webp" },

{ id: 33, code: "033", category: "regalos", tags: ["rosas"], name: "Corazón con Recuerdos", description: "Incluye 46 rosas en forma de corazón + fotos impresas en papel fotográfico. Amor expresado visualmente con recuerdos inolvidables que perduran eternamente.", price: 343750, image: "assets/images/ramo33.webp" },

{ id: 35, code: "035", category: "ramos", tags: ["rosas","girasoles"], name: "Fusión Solar y Pasión", description: "Diseño espectacular combinando rosas y girasoles en perfecta armonía. Fusiona intensidad emocional con alegría luminosa en presentación de alto impacto visual memorable.", price: 375000, image: "assets/images/ramo35.webp" },

{ id: 17, code: "017", category: "ramos", tags: ["rosas","girasoles"], name: "Primavera Dorada", description: "Hermoso bouquet combinando rosas y girasoles en armonía perfecta. Diseñado para cualquier ocasión especial que merece luz, color y alegría natural desbordante.", price: 462500, image: "assets/images/ramo17.webp" },

{ id: 10, code: "010", category: "ramos", tags: ["girasoles"], name: "Sol Abundante", description: "Ramo espectacular de 37 girasoles + ramas de eucalipto + 5 flores blancas + tarjeta en papel fotográfico + 2 fotos impresas estilo instantánea. Envuelto en papel coreano radiante.", price: 462500, image: "assets/images/ramo10.webp" },

// ── ROSAS ETERNAS / PRESERVADOS ──────────────────────────────────────────────

{ id: 9, code: "009", category: "preservados", tags: ["rosas eternas"], name: "Velocidad Eterna", description: "Ramo único con 2 rosas eternas y un carrito Hotwheels con base. Envuelto en papel coreano con carta y foto personalizables. Ideal para amantes de la velocidad romántica.", price: 102500, image: "assets/images/ramo9.webp" },

{ id: 7, code: "007", category: "preservados", tags: ["rosas eternas"], name: "Sueño de Princesa", description: "Ramo mágico con 6 rosas eternas + decoración de Rapunzel en papel fotográfico + carta personalizada. Envuelto en papel coreano para fans de cuentos de hadas.", price: 125000, image: "assets/images/ramo7.webp" },

{ id: 19, code: "019", category: "preservados", tags: ["rosas eternas"], name: "Dúo Cromático Eterno", description: "Ramo elegante con 10 rosas eternas en 2 colores + tarjeta en papel fotográfico personalizable. Envuelto en papel coreano con belleza que permanece eternamente.", price: 143750, image: "assets/images/ramo19.webp" },

{ id: 11, code: "011", category: "preservados", tags: ["rosas eternas"], name: "CR7 Eterno", description: "Hermoso ramo de 12 rosas eternas + imagen de Cristiano Ronaldo con fondo en fomi brillante + carta personalizada en papel fotográfico. Envuelto en papel coreano para fanáticos del fútbol.", price: 156250, image: "assets/images/ramo11.webp" },

{ id: 27, code: "027", category: "preservados", tags: ["rosas eternas"], name: "Mini Velocidad Eterna", description: "Ramo compacto con 6 rosas eternas + 2 Hotwheels + envuelto en papel coreano + carta personalizada. Perfecto para fanáticos del automovilismo con toque romántico.", price: 156250, image: "assets/images/ramo27.webp" },

{ id: 2, code: "002", category: "preservados", tags: ["rosas eternas","hotwheels"], name: "Pasión sobre Ruedas", description: "Combinación perfecta entre romance eterno y diversión. Incluye 16 rosas eternas, 3 carros Hotwheels a elección personal y envuelto en elegante papel coreano. Ideal para sorprender con originalidad.", price: 228750, image: "assets/images/ramo2.webp" },

{ id: 15, code: "015", category: "preservados", tags: ["rosas eternas","peluche"], name: "Ternura Gigante", description: "Arreglo especial con 20 rosas eternas + adorable peluche de vaquita de 50 cm. Envuelto en papel coreano para sorprender con ternura y amor desbordante.", price: 281250, image: "assets/images/ramo15.webp" },

// ── REGALOS, PELUCHES, DULCES Y JUGUETES ─────────────────────────────────────

{ id: 42, code: "042", category: "ocasiones", tags: ["sorpresa"], name: "Sorpresa Efecto", description: "Ramo espectacular con mecanismo sorpresa de dinero que sale + tira personalizada 'Feliz Cumpleaños'. Diseñado para celebraciones inolvidables llenas de alegría y asombro total.", price: 181250, image: "assets/images/ramo42.webp" },

{ id: 8, code: "008", category: "regalos", tags: ["peluche"], name: "Ternura Disfrazada", description: "Adorable cerdito disfrazado de osito cariñosito azul de 22 cm. Detalle tierno que conquista con dulzura y originalidad única. Perfecto para sorpresas espontáneas llenas de amor.", price: 106250, image: "assets/images/ramo8.webp" },

{ id: 18, code: "018", category: "regalos", tags: ["peluche"], name: "Kurumi Kawaii", description: "Adorable Kurumi de 22 cm. Personaje encantador perfecto para sorprender a fans del anime con detalle tierno y lleno de personalidad única especial.", price: 106250, image: "assets/images/ramo18.webp" },

{ id: 20, code: "020", category: "regalos", tags: ["peluche","rosas eternas"], name: "Abrazo Cariñosito", description: "Incluye osito de 40 cm + 4 hermosas rosas eternas + moño en cinta satinada + papel coreano + base para que se pare solo. Ternura máxima garantizada.", price: 187500, image: "assets/images/ramo20.webp" },

{ id: 4, code: "004", category: "regalos", tags: ["oso de rosas"], name: "Abrazo Eterno Mini", description: "Adorable oso de 29 cm elaborado con rosas en el color de tu preferencia. Viene en elegante caja de acetato con cinta de encaje. Regalo tierno que permanece para siempre.", price: 205000, image: "assets/images/ramo4.webp" },

{ id: 13, code: "013", category: "regalos", tags: ["oso de rosas"], name: "Abrazo Eterno Grande", description: "Majestuoso oso de 40 cm elaborado con rosas en el color de tu preferencia. Pregunta por modelos disponibles. Viene en caja de acetato con cinta de encaje elegante.", price: 337500, image: "assets/images/ramo13.webp" },

{ id: 16, code: "016", category: "regalos", tags: ["peluche"], name: "Universo Tierno", description: "Hermoso conejo de 43 cm con diseño galaxia en caja de acetato con decoraciones especiales. Regalo único que fusiona ternura con misterio del cosmos.", price: 337500, image: "assets/images/ramo16.webp" },

{ id: 22, code: "022", category: "regalos", tags: ["belleza"], name: "Kit de Belleza", description: "Incluye: rubor Anika + tinta Anika + polvo de hadas + kit de brochas + sobre de colágeno facial + 6 pomos faciales + sobre de mascarilla para puntos negros. Regalo completo de belleza.", price: 212500, image: "assets/images/ramo22.webp" },

{ id: 28, code: "028", category: "regalos", tags: ["rosas","hotwheels"], name: "Trío Motorizado", description: "Arreglo con 16 rosas frescas + 3 Hotwheels + carta personalizada + 2 fotos en papel fotográfico. Combina romance con pasión por la velocidad perfectamente.", price: 212500, image: "assets/images/ramo28.webp" },

{ id: 14, code: "014", category: "regalos", tags: ["snacks"], name: "Dulzura Motorizada", description: "Incluye Detodito mediano + papas pequeñas + chocolatina jumbo grande + maní + gomitas Trululu + 4 carros Hotwheels + carta en papel fotográfico + papel coreano + moño.", price: 218750, image: "assets/images/ramo14.webp" },

{ id: 24, code: "024", category: "regalos", tags: ["rosas","chocolates"], name: "Corazón Dulce", description: "Incluye 48 rosas + flores de encaje + 8 chocolates + caja decorada con cinta satinada + moño + carta opcional en papel fotográfico. Amor expresado completamente.", price: 332500, image: "assets/images/ramo24.webp" },

{ id: 3, code: "003", category: "regalos", tags: ["rosas","fresas","baileys"], name: "Tentación Gourmet", description: "Rosas frescas + 15 fresas con cobertura de chocolate en caja de corazón + botella de Baileys. La fusión perfecta entre romance, sabor y celebración en un solo detalle irresistible.", price: 462500, image: "assets/images/ramo3.webp" }

];
// --- VARIABLES GLOBALES ---
let currentLandingFilter = 'priority'; // 'priority' = orden por defecto de la landing
let LANDING_PRIORITY_TAG = ''; // Se establece por cada landing

// --- FORMATEO DE PRECIO ---
function formatCOP(price) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency', currency: 'COP', minimumFractionDigits: 0
    }).format(price);
}

// --- ORDENAR PRODUCTOS: primero los de la categoría de la landing ---
function getSortedProducts(priorityTag) {
    if (!priorityTag) return [...products];
    const priority = [];
    const rest = [];
    products.forEach(p => {
        if (p.tags && p.tags.includes(priorityTag)) {
            priority.push(p);
        } else {
            rest.push(p);
        }
    });
    // Respeta el orden definido en el array, sin reordenar por precio
    return [...priority, ...rest];
}

// --- FILTRAR PRODUCTOS ---
function getFilteredProducts(filter, priorityTag) {
    if (filter === 'priority' || filter === 'all') {
        return getSortedProducts(priorityTag);
    }
    // Al filtrar por tag/categoría también respeta el orden del array
    return products.filter(p => 
        (p.tags && p.tags.includes(filter)) || p.category.toLowerCase().includes(filter)
    );
}

// --- CREAR TARJETA DE PRODUCTO ---
function createCard(product) {
    const price = formatCOP(product.price);
    const div = document.createElement('div');
    div.className = 'product-card-landing';
    div.innerHTML = `
        <div class="product-img-wrap" onclick="openLB('../${product.image}', 'COD_${product.code} - ${product.name}', '${price}')">
            <img src="../${product.image}" alt="${product.name} - Flores a domicilio Cali" loading="lazy">
            <span class="product-code-badge">COD_${product.code}</span>
        </div>
        <div class="product-body">
            <h3>${product.name}</h3>
            <p class="desc">${product.description}</p>
            <div class="product-footer-landing">
                <div class="price-block">
                    <span class="label">Precio</span>
                    <span class="price">${price}</span>
                </div>
                <a href="#" class="btn-order-landing" onclick="orderWA('COD_${product.code}', '${product.name.replace(/'/g, "\\'")}', ${product.price}); return false;">
                    🛒 Pedir
                </a>
            </div>
        </div>
    `;
    return div;
}

// --- RENDER CATÁLOGO ---
function renderCatalog(filter) {
    const grid = document.getElementById('landingProductsGrid');
    const counter = document.getElementById('landingResultsCount');
    if (!grid) return;

    grid.innerHTML = '';
    const filtered = getFilteredProducts(filter || currentLandingFilter, LANDING_PRIORITY_TAG);

    if (counter) {
        counter.innerHTML = `Mostrando <strong>${filtered.length}</strong> productos`;
    }

    filtered.forEach(p => grid.appendChild(createCard(p)));
}

// --- FILTRAR ---
function filterLanding(filter, el) {
    currentLandingFilter = filter;
    document.querySelectorAll('.filter-btn-landing').forEach(b => b.classList.remove('active'));
    if (el) el.classList.add('active');
    renderCatalog(filter);
}

// --- WHATSAPP ORDER + GOOGLE ADS CONVERSION ---
function orderWA(code, name, price) {
    // Google Ads conversion tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', 'conversion', {
            'send_to': 'AW-17658828097/de5RCLeVpoIcEMGqseRB',
            'value': price,
            'currency': 'COP'
        });
    }

    // GA4 event
    if (typeof gtag !== 'undefined') {
        gtag('event', 'product_order', {
            'event_category': 'Catalog',
            'event_label': code,
            'value': price,
            'product_name': name
        });
    }

    const formattedPrice = formatCOP(price);
    const message = `Hola, me interesa el ramo *${code} - ${name}* con un precio de ${formattedPrice}. ¿Podrían darme más información?`;
    window.open(`https://wa.me/573235933021?text=${encodeURIComponent(message)}`, '_blank');
}

// --- WHATSAPP GENÉRICO + CONVERSIÓN ---
function contactWA(source, customMsg) {
    // Google Ads conversion
    if (typeof gtag !== 'undefined') {
        gtag('event', 'conversion', {
            'send_to': 'AW-17658828097/de5RCLeVpoIcEMGqseRB'
        });
    }

    // GA4 event
    if (typeof gtag !== 'undefined') {
        gtag('event', 'whatsapp_click', {
            'event_category': 'Contact',
            'event_label': source,
            'value': 1
        });
    }

    const msg = customMsg || `Hola, estoy interesado/a en sus arreglos florales. Me podrían dar más información?`;
    window.open(`https://wa.me/573235933021?text=${encodeURIComponent(msg)}`, '_blank');
}

// --- LIGHTBOX ---
function openLB(img, title, price) {
    const lb = document.getElementById('landingLightbox');
    if (!lb) return;
    document.getElementById('lbImg').src = img;
    document.getElementById('lbTitle').textContent = title;
    document.getElementById('lbPrice').textContent = price;
    lb.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLB() {
    const lb = document.getElementById('landingLightbox');
    if (!lb) return;
    lb.classList.remove('active');
    document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLB(); });

// --- INIT ---
document.addEventListener('DOMContentLoaded', function() {
    renderCatalog('priority');
});