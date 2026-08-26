// ===================================
// LANDING PAGE JS - Flowers Susi Lop Cali
// Catálogo con prioridad por categoría + Conversiones Google Ads
// ===================================

// --- DATOS DEL CATÁLOGO COMPLETO ---
const products = [

// ── NOVEDADES (DESTACADOS AL INICIO) ─────────────────────────────────────────

{ id: 51, code: "051", category: "ramos", tags: ["tulipanes","flores","rosas"], name: "Vuelo Lila", description: "Elegante bouquet de tulipanes lilas y blancos combinados con gypsophila blanca, mariposas doradas decorativas y envoltura translúcida con moño rosado satinado. Sofisticación natural que enamora con dulzura primaveral inolvidable.", price: 312500, image: "assets/images/ramo51.webp" },

{ id: 52, code: "052", category: "ocasiones", tags: ["tulipanes","cumpleaños","flores"], name: "Recuerdo en Tulipanes", description: "Bouquet de tulipanes multicolor (morado, rojo y naranja) + manzanilla + follaje verde fresco + mariposas doradas + 2 fotos personalizadas en papel fotográfico + moño rojo satinado. Celebra cumpleaños con recuerdos visuales memorables.", price: 195300, image: "assets/images/ramo52.webp" },

{ id: 53, code: "053", category: "regalos", tags: ["tulipanes","chocolates","flores"], name: "Fresh Flower Gourmet", description: "Tulipanes morados frescos presentados en elegante bolsa negra premium 'Fresh Flower' + 2 chocolatinas Jet + moño bicolor blanco y negro. Diseño minimalista y sofisticado que combina elegancia floral con dulzura.", price: 190600, image: "assets/images/ramo53.webp" },

// ── FLORES NATURALES ─────────────────────────────────────────────────────────

{ id: 41, code: "041", category: "ramos", tags: ["flores"], name: "Jardín Clásico", description: "Arreglo tradicional con claveles frescos que representan amor duradero. Belleza atemporal y fragancia natural que nunca pasa de moda en cualquier ocasión especial.", price: 151550, image: "assets/images/ramo41.webp" },

{ id: 37, code: "037", category: "ramos", tags: ["girasoles"], name: "Sol Solitario", description: "Un girasol radiante que representa alegría, esperanza y amor sincero. Ideal para detalles sencillos pero significativos que alegran el día con luz natural pura.", price: 153100, image: "assets/images/ramo37.webp" },

{ id: 12, code: "012", category: "ramos", tags: ["flores"], name: "Jardín Clásico", description: "Arreglo sofisticado con hortensias, lirios, margaritas y follaje selecto. Envuelto en papel coreano con elegancia atemporal que nunca falla. Perfecto para cualquier ocasión especial.", price: 156250, image: "assets/images/ramo12.webp" },

{ id: 40, code: "040", category: "ramos", tags: ["rosas"], name: "Ternura Rosada", description: "Delicado ramo de rosas rosadas que transmiten amor tierno y dulzura pura. Perfecto para expresar cariño sincero con elegancia suave que enamora naturalmente siempre.", price: 156250, image: "assets/images/ramo40.webp" },

{ id: 43, code: "043", category: "ramos", tags: ["rosas"], name: "Bouquet Mariposa", description: "Bouquet de rosas frescas con delicada decoración de mariposa. Un toque de elegancia y fantasía que convierte cada rosa en una obra de arte natural llena de encanto.", price: 140600, image: "assets/images/ramo43.webp" },

{ id: 44, code: "044", category: "ramos", tags: ["gerberas"], name: "Alegría Amarilla", description: "Radiante ramo de gerberas amarillas frescas que irradian energía positiva y felicidad pura. Perfecto para celebrar momentos especiales con color vibrante y alegría desbordante.", price: 156250, image: "assets/images/ramo44.webp" },

{ id: 6, code: "006", category: "ramos", tags: ["girasoles"], name: "Dúo Solar", description: "Arreglo luminoso con 2 girasoles, flor de encaje blanca y tarjeta en papel fotográfico totalmente personalizable. Envuelto en papel coreano para alegrar cualquier día.", price: 182800, image: "assets/images/ramo6.webp" },

{ id: 31, code: "031", category: "ramos", tags: ["flores"], name: "Detalle Encantador", description: "Arreglo floral cuidadosamente diseñado con flores frescas seleccionadas. Perfecto para sorprender con elegancia natural y belleza atemporal que conquista corazones inmediatamente.", price: 184400, image: "assets/images/ramo31.webp" },

{ id: 46, code: "046", category: "ramos", tags: ["rosas"], name: "Corazón Rosado", description: "Exquisita caja de rosas rosadas presentadas en forma de corazón. Diseño romántico que expresa ternura y amor con elegancia visual que conquista desde el primer instante.", price: 226550, image: "assets/images/ramo46.webp" },

{ id: 36, code: "036", category: "ramos", tags: ["rosas"], name: "Clásico Efectivo", description: "Bouquet tradicional con rosas frescas cuidadosamente seleccionadas. Elegancia atemporal que nunca falla para expresar amor sincero en cualquier ocasión especial del corazón.", price: 242200, image: "assets/images/ramo36.webp" },

{ id: 45, code: "045", category: "ramos", tags: ["rosas"], name: "Pasión Bicolor", description: "Elegante ramo que fusiona rosas blancas y rojas en perfecta armonía. Contraste entre pureza y pasión que expresa amor sincero con belleza sofisticada e impacto visual memorable.", price: 242200, image: "assets/images/ramo45.webp" },

{ id: 34, code: "034", category: "ramos", tags: ["flores"], name: "Elegancia en Cristal", description: "Arreglo sofisticado con flores frescas + jarrón elegante en vidrio incluido. Perfecto para decorar espacios con belleza natural que permanece y embellece siempre.", price: 257800, image: "assets/images/ramo34.webp" },

{ id: 25, code: "025", category: "ramos", tags: ["rosas"], name: "Corazón Abierto", description: "Hermosa presentación de 24 rosas abiertas en elegante caja de corazón. Diseño que simboliza amor floreciente y sincero desde el primer instante visual.", price: 281250, image: "assets/images/ramo25.webp" },

{ id: 30, code: "030", category: "ramos", tags: ["girasoles"], name: "Quinteto Solar", description: "Incluye 5 girasoles + flor de encaje + carta en papel fotográfico personalizable + 2 fotos impresas estilo instantánea + chocolatina. Alegría completa en un solo detalle.", price: 289050, image: "assets/images/ramo30.webp" },

{ id: 5, code: "005", category: "ocasiones", tags: ["rosas"], name: "Logro Coronado", description: "Ramo especial con 24 rosas + flores blancas + birrete pequeño + hojas de encaje + relleno de flor verde + 2 mariposas. Envuelto en papel coreano para celebrar éxitos académicos memorables.", price: 312500, image: "assets/images/ramo5.webp" },

{ id: 32, code: "032", category: "ramos", tags: ["rosas"], name: "Abundancia Amorosa", description: "Ramo generoso con 46 rosas frescas en presentación elegante. Diseñado para expresar amor grande con belleza natural que impacta desde el primer vistazo siempre.", price: 328100, image: "assets/images/ramo32.webp" },

{ id: 1, code: "001", category: "ramos", tags: ["rosas"], name: "Monumentalidad Floral", description: "Magnífico ramo que simboliza amor y dedicación con intensidad desbordante. Cada rosa seleccionada representa delicadeza y belleza única que conquista corazones. Perfecto para declaraciones importantes y momentos inolvidables.", price: 335950, image: "assets/images/ramo1.webp" },

{ id: 21, code: "021", category: "ramos", tags: ["rosas"], name: "Vuelo de Pasión", description: "Ramo espectacular de 48 rosas naturales con mariposas decorativas. Ideal para enamorar profundamente o celebrar fechas especiales con elegancia absoluta memorable.", price: 343750, image: "assets/images/ramo21.webp" },

{ id: 38, code: "038", category: "ramos", tags: ["girasoles","rosas"], name: "Dualidad Radiante", description: "Hermosa fusión de girasoles luminosos y rosas frescas en perfecta armonía. Combina alegría solar con romance apasionado en arreglo que conquista corazones desde el primer vistazo.", price: 390600, image: "assets/images/ramo38.webp" },

{ id: 26, code: "026", category: "ocasiones", tags: ["rosas"], name: "Pregunta del Alma", description: "Ramo buchón de 48 rosas + cinta con frase '¿Puedo ser tu novio?' + flor blanca de encaje. Diseñado especialmente para el momento más importante del corazón.", price: 414050, image: "assets/images/ramo26.webp" },

{ id: 29, code: "029", category: "ramos", tags: ["rosas"], name: "Mensaje Buchón", description: "Ramo buchón de 48 rosas + corona pequeña + mariposa + cinta con frase personalizada. Envuelto en papel coreano para expresar exactamente lo que sientes.", price: 421900, image: "assets/images/ramo29.webp" },

{ id: 39, code: "039", category: "ramos", tags: ["girasoles"], name: "Constelación Solar", description: "Bouquet abundante de girasoles radiantes que irradian energía positiva y felicidad. Diseñado para iluminar espacios y alegrar días con luz natural desbordante y esperanza sincera.", price: 421900, image: "assets/images/ramo39.webp" },

{ id: 47, code: "047", category: "ramos", tags: ["rosas"], name: "Corazón Bicolor", description: "Espectacular bouquet de rosas amarillas y rojas en forma de corazón. Fusiona alegría solar con pasión romántica en presentación de alto impacto que enamora profundamente.", price: 421900, image: "assets/images/ramo47.webp" },

{ id: 23, code: "023", category: "ocasiones", tags: ["rosas"], name: "Celebración Buchona", description: "Ramo de 48 rosas naturales + cinta personalizada 'Feliz Cumpleaños' + corona mediana + moño satinado + carta en papel fotográfico + globo inflado en helio. Celebración completa.", price: 429700, image: "assets/images/ramo23.webp" },

{ id: 33, code: "033", category: "regalos", tags: ["rosas"], name: "Corazón con Recuerdos", description: "Incluye 46 rosas en forma de corazón + fotos impresas en papel fotográfico. Amor expresado visualmente con recuerdos inolvidables que perduran eternamente.", price: 429700, image: "assets/images/ramo33.webp" },

{ id: 35, code: "035", category: "ramos", tags: ["rosas","girasoles"], name: "Fusión Solar y Pasión", description: "Diseño espectacular combinando rosas y girasoles en perfecta armonía. Fusiona intensidad emocional con alegría luminosa en presentación de alto impacto visual memorable.", price: 468750, image: "assets/images/ramo35.webp" },

{ id: 17, code: "017", category: "ramos", tags: ["rosas","girasoles"], name: "Primavera Dorada", description: "Hermoso bouquet combinando rosas y girasoles en armonía perfecta. Diseñado para cualquier ocasión especial que merece luz, color y alegría natural desbordante.", price: 578100, image: "assets/images/ramo17.webp" },

{ id: 10, code: "010", category: "ramos", tags: ["girasoles"], name: "Sol Abundante", description: "Ramo espectacular de 37 girasoles + ramas de eucalipto + 5 flores blancas + tarjeta en papel fotográfico + 2 fotos impresas estilo instantánea. Envuelto en papel coreano radiante.", price: 578100, image: "assets/images/ramo10.webp" },

// ── ROSAS ETERNAS / PRESERVADOS ──────────────────────────────────────────────

{ id: 9, code: "009", category: "preservados", tags: ["rosas eternas"], name: "Velocidad Eterna", description: "Ramo único con 2 rosas eternas y un carrito Hotwheels con base. Envuelto en papel coreano con carta y foto personalizables. Ideal para amantes de la velocidad romántica.", price: 128100, image: "assets/images/ramo9.webp" },

{ id: 7, code: "007", category: "preservados", tags: ["rosas eternas"], name: "Sueño de Princesa", description: "Ramo mágico con 6 rosas eternas + decoración de Rapunzel en papel fotográfico + carta personalizada. Envuelto en papel coreano para fans de cuentos de hadas.", price: 156250, image: "assets/images/ramo7.webp" },

{ id: 19, code: "019", category: "preservados", tags: ["rosas eternas"], name: "Dúo Cromático Eterno", description: "Ramo elegante con 10 rosas eternas en 2 colores + tarjeta en papel fotográfico personalizable. Envuelto en papel coreano con belleza que permanece eternamente.", price: 179700, image: "assets/images/ramo19.webp" },

{ id: 11, code: "011", category: "preservados", tags: ["rosas eternas"], name: "CR7 Eterno", description: "Hermoso ramo de 12 rosas eternas + imagen de Cristiano Ronaldo con fondo en fomi brillante + carta personalizada en papel fotográfico. Envuelto en papel coreano para fanáticos del fútbol.", price: 195300, image: "assets/images/ramo11.webp" },

{ id: 27, code: "027", category: "preservados", tags: ["rosas eternas"], name: "Mini Velocidad Eterna", description: "Ramo compacto con 6 rosas eternas + 2 Hotwheels + envuelto en papel coreano + carta personalizada. Perfecto para fanáticos del automovilismo con toque romántico.", price: 195300, image: "assets/images/ramo27.webp" },

{ id: 2, code: "002", category: "preservados", tags: ["rosas eternas","hotwheels"], name: "Pasión sobre Ruedas", description: "Combinación perfecta entre romance eterno y diversión. Incluye 16 rosas eternas, 3 carros Hotwheels a elección personal y envuelto en elegante papel coreano. Ideal para sorprender con originalidad.", price: 285950, image: "assets/images/ramo2.webp" },

{ id: 15, code: "015", category: "preservados", tags: ["rosas eternas","peluche"], name: "Ternura Gigante", description: "Arreglo especial con 20 rosas eternas + adorable peluche de vaquita de 50 cm. Envuelto en papel coreano para sorprender con ternura y amor desbordante.", price: 351550, image: "assets/images/ramo15.webp" },

// ── REGALOS, PELUCHES, DULCES Y JUGUETES ─────────────────────────────────────

{ id: 42, code: "042", category: "ocasiones", tags: ["sorpresa"], name: "Sorpresa Efecto", description: "Ramo espectacular con mecanismo sorpresa de dinero que sale + tira personalizada 'Feliz Cumpleaños'. Diseñado para celebraciones inolvidables llenas de alegría y asombro total.", price: 226550, image: "assets/images/ramo42.webp" },

{ id: 8, code: "008", category: "regalos", tags: ["peluche"], name: "Ternura Disfrazada", description: "Adorable cerdito disfrazado de osito cariñosito azul de 22 cm. Detalle tierno que conquista con dulzura y originalidad única. Perfecto para sorpresas espontáneas llenas de amor.", price: 132800, image: "assets/images/ramo8.webp" },

{ id: 18, code: "018", category: "regalos", tags: ["peluche"], name: "Kurumi Kawaii", description: "Adorable Kurumi de 22 cm. Personaje encantador perfecto para sorprender a fans del anime con detalle tierno y lleno de personalidad única especial.", price: 132800, image: "assets/images/ramo18.webp" },

{ id: 20, code: "020", category: "regalos", tags: ["peluche","rosas eternas"], name: "Abrazo Cariñosito", description: "Incluye osito de 40 cm + 4 hermosas rosas eternas + moño en cinta satinada + papel coreano + base para que se pare solo. Ternura máxima garantizada.", price: 234400, image: "assets/images/ramo20.webp" },

{ id: 4, code: "004", category: "regalos", tags: ["oso de rosas"], name: "Abrazo Eterno Mini", description: "Adorable oso de 29 cm elaborado con rosas en el color de tu preferencia. Viene en elegante caja de acetato con cinta de encaje. Regalo tierno que permanece para siempre.", price: 256250, image: "assets/images/ramo4.webp" },

{ id: 13, code: "013", category: "regalos", tags: ["oso de rosas"], name: "Abrazo Eterno Grande", description: "Majestuoso oso de 40 cm elaborado con rosas en el color de tu preferencia. Pregunta por modelos disponibles. Viene en caja de acetato con cinta de encaje elegante.", price: 421900, image: "assets/images/ramo13.webp" },

{ id: 16, code: "016", category: "regalos", tags: ["peluche"], name: "Universo Tierno", description: "Hermoso conejo de 43 cm con diseño galaxia en caja de acetato con decoraciones especiales. Regalo único que fusiona ternura con misterio del cosmos.", price: 421900, image: "assets/images/ramo16.webp" },

{ id: 22, code: "022", category: "regalos", tags: ["belleza"], name: "Kit de Belleza", description: "Incluye: rubor Anika + tinta Anika + polvo de hadas + kit de brochas + sobre de colágeno facial + 6 pomos faciales + sobre de mascarilla para puntos negros. Regalo completo de belleza.", price: 265600, image: "assets/images/ramo22.webp" },

{ id: 28, code: "028", category: "regalos", tags: ["rosas","hotwheels"], name: "Trío Motorizado", description: "Arreglo con 16 rosas frescas + 3 Hotwheels + carta personalizada + 2 fotos en papel fotográfico. Combina romance con pasión por la velocidad perfectamente.", price: 265600, image: "assets/images/ramo28.webp" },

{ id: 14, code: "014", category: "regalos", tags: ["snacks"], name: "Dulzura Motorizada", description: "Incluye Detodito mediano + papas pequeñas + chocolatina jumbo grande + maní + gomitas Trululu + 4 carros Hotwheels + carta en papel fotográfico + papel coreano + moño.", price: 273450, image: "assets/images/ramo14.webp" },

{ id: 24, code: "024", category: "regalos", tags: ["rosas","chocolates"], name: "Corazón Dulce", description: "Incluye 48 rosas + flores de encaje + 8 chocolates + caja decorada con cinta satinada + moño + carta opcional en papel fotográfico. Amor expresado completamente.", price: 415600, image: "assets/images/ramo24.webp" },

{ id: 3, code: "003", category: "regalos", tags: ["rosas","fresas","baileys"], name: "Tentación Gourmet", description: "Rosas frescas + 15 fresas con cobertura de chocolate en caja de corazón + botella de Baileys. La fusión perfecta entre romance, sabor y celebración en un solo detalle irresistible.", price: 578100, image: "assets/images/ramo3.webp" },

{ id: 48, code: "048", category: "regalos", tags: ["rosas","anchetas","baileys"], name: "Cesta Dulce Celebración", description: "Elegante cesta de rosas frescas acompañada de chocolates selectos y una botella de Vino. Combinación perfecta de romance, dulzura y sofisticación para celebrar momentos especiales con estilo único e inolvidable.", price: 406250, image: "assets/images/ramo48.webp" },

{ id: 49, code: "049", category: "ramos", tags: ["flores"], name: "Jardín Encantado", description: "Hermoso bouquet que combina hortensias, lirios y margaritas frescas en perfecta armonía. Mezcla de elegancia, pureza y frescura natural que transmite sentimientos sinceros con belleza desbordante en cada detalle.", price: 203750, image: "assets/images/ramo49.webp" },

{ id: 50, code: "050", category: "ocasiones", tags: ["cumpleaños","sorpresa","peluche","girasoles"], name: "Princesa Hermosa", description: "Caja de madera decorada con globo burbuja personalizado 'Feliz Cumpleaños mi princesa hermosa' + 5 globos pequeños dentro + bouquet de 3 girasoles con follaje verde + peluche de Stitch + mini torta + jugo natural + rollos de huevo con rancheras + granola con fruta. Celebración completa inolvidable.", price: 343750, image: "assets/images/ramo50.webp" }

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

// --- HELPERS DE NEUROVENTAS (precio anterior + descuento) ---
// Genera precio "Antes" un 30% mayor al precio actual, redondeado a 1000.
function _calcShopPrice(price) {
    return Math.ceil((price * 1.30) / 1000) * 1000;
}

// Decide si un producto es "más vendido" / "premium" / "edición limitada"
// usando el id como semilla (determinista — siempre el mismo badge en el mismo producto).
function _badgeForProduct(p) {
    if (!p) return null;
    const tags = (p.tags || []).join(' ');
    if (p.id % 9 === 0) return { txt: '⭐ Más vendido', cls: 'badge-best' };
    if (p.id % 7 === 0) return { txt: '🔥 Top semana', cls: 'badge-hot' };
    if (p.id % 11 === 0) return { txt: '⏰ Últimos 3 hoy', cls: 'badge-low' };
    if (tags.includes('rosas eternas')) return { txt: '💎 Premium', cls: 'badge-prem' };
    if (tags.includes('cumpleaños')) return { txt: '🎉 Top regalo', cls: 'badge-hot' };
    return null;
}

// --- CSS de neuroventas (se inyecta una sola vez) ---
(function injectNeuroSalesCSS() {
    if (document.getElementById('neurosales-css')) return;
    var s = document.createElement('style');
    s.id = 'neurosales-css';
    s.textContent = `
        /* Imagen wrap: relativa para anclar badges */
        .product-card-landing .product-img-wrap { position: relative; }
        /* Badge de descuento (esquina superior izquierda) */
        .product-discount-badge {
            position: absolute; top: 10px; left: 10px;
            background: linear-gradient(135deg, #d62828, #9d0208);
            color: #fff; padding: 6px 12px; border-radius: 20px;
            font-size: 13px; font-weight: 800; letter-spacing: 0.4px;
            box-shadow: 0 4px 12px rgba(157,2,8,0.45);
            z-index: 5; transform: rotate(-4deg);
            animation: neuroPulse 2.2s ease-in-out infinite;
        }
        @keyframes neuroPulse {
            0%,100% { transform: rotate(-4deg) scale(1); }
            50% { transform: rotate(-4deg) scale(1.06); }
        }
        /* Sticker premium/best (esquina superior derecha, debajo del code) */
        .product-status-badge {
            position: absolute; top: 48px; right: 10px;
            color: #fff; padding: 5px 10px; border-radius: 14px;
            font-size: 11px; font-weight: 700; letter-spacing: 0.3px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.18); z-index: 5;
        }
        .product-status-badge.badge-best { background: linear-gradient(135deg,#f59e0b,#d97706); }
        .product-status-badge.badge-hot  { background: linear-gradient(135deg,#ef4444,#b91c1c); }
        .product-status-badge.badge-low  { background: linear-gradient(135deg,#7c3aed,#5b21b6); }
        .product-status-badge.badge-prem { background: linear-gradient(135deg,#0f766e,#0d4842); }
        /* Bloque de precio anclado */
        .price-block-anchor { display: flex; flex-direction: column; align-items: flex-start; gap: 2px; }
        .price-block-anchor .lbl-shop {
            font-size: 11px; color: #888; font-weight: 500; text-transform: uppercase; letter-spacing: 0.4px;
        }
        .price-block-anchor .price-shop {
            font-size: 14px; color: #999; text-decoration: line-through; font-weight: 500;
        }
        .price-block-anchor .lbl-web {
            font-size: 11px; color: #B07F71; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-top: 2px;
        }
        .price-block-anchor .price-web {
            font-size: 22px; color: #B07F71; font-weight: 800; line-height: 1;
        }
        .price-block-anchor .price-save {
            font-size: 11px; color: #16a34a; font-weight: 700; margin-top: 2px;
            background: #ecfdf5; padding: 2px 8px; border-radius: 8px; display: inline-block; align-self: flex-start;
        }
        /* Notificación social flotante (FOMO) */
        .social-notif {
            position: fixed; left: 20px; bottom: 90px; max-width: 310px;
            background: #fff; color: #404040; border-radius: 14px;
            padding: 12px 14px; display: flex; gap: 10px; align-items: flex-start;
            box-shadow: 0 10px 28px rgba(0,0,0,0.18); border-left: 4px solid #16a34a;
            z-index: 9990; font-size: 13px; line-height: 1.4;
            transform: translateY(120%); opacity: 0; transition: all 0.45s cubic-bezier(.22,1.5,.36,1);
            pointer-events: none;
        }
        .social-notif.show { transform: translateY(0); opacity: 1; }
        .social-notif .sn-emoji { font-size: 22px; line-height: 1; }
        .social-notif .sn-name { font-weight: 700; color: #111; }
        .social-notif .sn-time { color: #888; font-size: 11px; margin-top: 3px; }
        @media (max-width: 600px) {
            .social-notif { left: 12px; right: 12px; max-width: none; bottom: 80px; }
        }
    `;
    document.head.appendChild(s);
})();

// --- CREAR TARJETA DE PRODUCTO (con precio anclado + badges) ---
function createCard(product) {
    const newPrice = formatCOP(product.price);
    const shopPriceNum = _calcShopPrice(product.price);
    const shopPrice = formatCOP(shopPriceNum);
    const saveNum = shopPriceNum - product.price;
    const savePrice = formatCOP(saveNum);
    const pct = Math.round((saveNum / shopPriceNum) * 100);
    const badge = _badgeForProduct(product);

    const div = document.createElement('div');
    div.className = 'product-card-landing';
    div.innerHTML = `
        <div class="product-img-wrap" onclick="openLB('../${product.image}', 'COD_${product.code} - ${product.name}', '${newPrice}')">
            <span class="product-discount-badge">-${pct}% HOY</span>
            ${badge ? `<span class="product-status-badge ${badge.cls}">${badge.txt}</span>` : ''}
            <img src="../${product.image}" alt="${product.name} - Flores a domicilio Cali" loading="lazy">
            <span class="product-code-badge">COD_${product.code}</span>
        </div>
        <div class="product-body">
            <h3>${product.name}</h3>
            <p class="desc">${product.description}</p>
            <div class="product-footer-landing">
                <div class="price-block-anchor">
                    <span class="lbl-shop">Antes</span>
                    <span class="price-shop">${shopPrice}</span>
                    <span class="lbl-web">Ahora</span>
                    <span class="price-web">${newPrice}</span>
                    <span class="price-save">Ahorras ${savePrice}</span>
                </div>
                <a href="#" class="btn-order-landing" onclick="orderWA('COD_${product.code}', '${product.name.replace(/'/g, "\\'")}', ${product.price}); return false;">
                    🛒 Pedir
                </a>
            </div>
        </div>
    `;
    return div;
}

// --- NOTIFICACIONES SOCIALES ROTATIVAS (FOMO + prueba social) ---
// Se muestra una "compra reciente" cada ~25 segundos. Datos representativos
// (no nombres reales — patrón Booking/Hotjar). Si quieres usar datos reales
// reemplaza el array por nombres reales con permiso.
(function injectSocialNotifs() {
    var pool = [
        { name: 'Camila R.',    area: 'Granada',         product: 'Ramo Buchón de Rosas',   ago: 4 },
        { name: 'Andrés M.',    area: 'San Fernando',    product: 'Ancheta de Amor',         ago: 7 },
        { name: 'Daniela P.',   area: 'Ciudad Jardín',   product: 'Caja de Rosas Rojas',     ago: 12 },
        { name: 'Juan C.',      area: 'Pance',           product: 'Bouquet Mariposa',        ago: 18 },
        { name: 'Laura V.',     area: 'El Peñón',        product: 'Detalle Encantador',      ago: 23 },
        { name: 'Sofía T.',     area: 'San Antonio',     product: 'Sol Solitario (Girasol)', ago: 31 },
        { name: 'Mateo R.',     area: 'Norte',           product: 'Pasión Bicolor',          ago: 38 },
        { name: 'Valentina O.', area: 'Palmira',         product: 'Anchetas Premium',        ago: 45 },
        { name: 'Sergio A.',    area: 'Jamundí',         product: 'Ramo Eterno (preservado)', ago: 52 },
    ];
    var idx = 0;

    function showOne() {
        var item = pool[idx % pool.length];
        idx++;
        var n = document.createElement('div');
        n.className = 'social-notif';
        n.innerHTML = '<span class="sn-emoji">🌹</span>' +
            '<div><div><span class="sn-name">' + item.name + '</span> de ' + item.area +
            ' acaba de pedir <strong>' + item.product + '</strong></div>' +
            '<div class="sn-time">Hace ' + item.ago + ' min · ✅ Pedido confirmado</div></div>';
        document.body.appendChild(n);
        setTimeout(function() { n.classList.add('show'); }, 50);
        setTimeout(function() {
            n.classList.remove('show');
            setTimeout(function() { if (n.parentNode) n.parentNode.removeChild(n); }, 500);
        }, 6500);
    }

    function start() {
        // Primera notif a los 8 segundos (dar tiempo a que el usuario lea la landing)
        setTimeout(function() {
            showOne();
            setInterval(showOne, 25000);
        }, 8000);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', start);
    } else { start(); }
})();

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
// IMPORTANTE: usa event_callback + setTimeout backup para que la conversión
// se dispare ANTES de que la página pierda foco al abrir WhatsApp. Sin esto se
// pierden ~30-50% de conversiones por race condition.
function orderWA(code, name, price) {
    const formattedPrice = formatCOP(price);
    const landingPath = (typeof window !== 'undefined' && window.location)
        ? window.location.pathname.split('/').pop().replace('.html','')
        : 'desconocida';
    const message = `Hola Flowers Susi Lop 🌹, vi el ramo *${code} - ${name}* (${formattedPrice}) en la web. ¿Está disponible para entrega HOY en Cali?`;
    const url = `https://wa.me/573228853129?text=${encodeURIComponent(message)}`;
    let opened = false;
    const openOnce = () => { if (!opened) { opened = true; window.open(url, '_blank'); } };

    // GA4 event (sin bloqueo)
    if (typeof gtag !== 'undefined') {
        gtag('event', 'product_order', {
            'event_category': 'Catalog',
            'event_label': code,
            'landing': landingPath,
            'value': price,
            'product_name': name
        });
        // Conversión Google Ads con callback
        gtag('event', 'conversion', {
            'send_to': 'AW-17658828097/de5RCLeVpoIcEMGqseRB',
            'value': price,
            'currency': 'COP',
            'event_callback': openOnce
        });
    }

    // Backup: si gtag no carga o el callback no llega en 400ms, abre igual
    setTimeout(openOnce, 400);
}

// --- WHATSAPP GENÉRICO + CONVERSIÓN ---
function contactWA(source, customMsg) {
    const landingPath = (typeof window !== 'undefined' && window.location)
        ? window.location.pathname.split('/').pop().replace('.html','')
        : 'desconocida';
    const msg = customMsg || `Hola Flowers Susi Lop 🌹, vi su web (sección ${landingPath}) y quiero cotizar un arreglo de flores. ¿Me asesoran?`;
    const url = `https://wa.me/573228853129?text=${encodeURIComponent(msg)}`;
    let opened = false;
    const openOnce = () => { if (!opened) { opened = true; window.open(url, '_blank'); } };

    if (typeof gtag !== 'undefined') {
        gtag('event', 'whatsapp_click', {
            'event_category': 'Contact',
            'event_label': source,
            'landing': landingPath,
            'value': 1
        });
        gtag('event', 'conversion', {
            'send_to': 'AW-17658828097/de5RCLeVpoIcEMGqseRB',
            'event_callback': openOnce
        });
    }

    setTimeout(openOnce, 400);
}

// --- INYECTAR NOTA FLOTANTE DE URGENCIA (gatillo de neuroventas) ---
(function injectUrgencyNote() {
    function buildNote() {
        if (document.getElementById('urgencyNoteCali')) return;
        var style = document.createElement('style');
        style.textContent = `
            .urgency-floating-note { position: fixed; bottom: 20px; left: 20px; background: linear-gradient(135deg,#D3A89D,#B07F71); color:#fff; padding:12px 18px; border-radius:30px; font-family:'Poppins','Segoe UI',Tahoma,sans-serif; font-size:14px; font-weight:600; box-shadow:0 6px 18px rgba(196,69,105,0.35); z-index:9998; display:flex; align-items:center; gap:8px; max-width:300px; line-height:1.3; animation: pulseUrgencyCali 2.5s ease-in-out infinite; cursor:pointer; }
            .urgency-floating-note .urgency-icon { font-size:20px; }
            .urgency-floating-note .urgency-close { background:rgba(255,255,255,0.2); border:none; color:#fff; cursor:pointer; border-radius:50%; width:22px; height:22px; display:flex; align-items:center; justify-content:center; font-size:14px; margin-left:6px; flex-shrink:0; }
            @keyframes pulseUrgencyCali { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-4px);} }
            @media (max-width: 600px) { .urgency-floating-note{font-size:12px; padding:10px 14px; max-width:240px; bottom:12px; left:12px;} }
        `;
        document.head.appendChild(style);
        var note = document.createElement('div');
        note.className = 'urgency-floating-note';
        note.id = 'urgencyNoteCali';
        note.innerHTML = '<span class="urgency-icon">🌹</span><span>Pide antes de las <strong>3:00 PM</strong> y entregamos HOY en Cali</span><button class="urgency-close" aria-label="Cerrar">×</button>';
        note.addEventListener('click', function(ev) {
            if (ev.target.classList.contains('urgency-close')) {
                note.style.display = 'none';
                return;
            }
            contactWA('urgency_note', 'Hola Flowers Susi Lop 🌹, quiero entrega HOY en Cali. ¿Tienen cupos disponibles?');
        });
        document.body.appendChild(note);
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', buildNote);
    } else {
        buildNote();
    }
})();

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

// --- CONTADOR DE URGENCIA "ENTREGA HOY" (escasez temporal real) ---
// Inyecta en el .top-bar un mensaje dinámico:
//   • Antes de las 3:00 PM: "Pide en las próximas Xh Ym y entregamos HOY antes de las 6 PM"
//   • Después de 3:00 PM: "Próximas entregas: MAÑANA. Pide ya y aseguras tu cupo"
(function injectUrgencyCountdown() {
    function updateCountdown() {
        var bar = document.querySelector('.top-bar');
        if (!bar) return;
        var marker = document.getElementById('urgencyCountdownText');
        if (!marker) {
            // Insertar marker dentro del .top-bar al final
            marker = document.createElement('span');
            marker.id = 'urgencyCountdownText';
            marker.style.cssText = 'display:block;font-weight:700;margin-top:2px;font-size:13px;color:#fff;';
            bar.appendChild(marker);
        }

        var now = new Date();
        var cutoff = new Date(now); cutoff.setHours(15, 0, 0, 0); // 3:00 PM hoy
        var diffMs = cutoff - now;

        if (diffMs > 0) {
            var totalMin = Math.floor(diffMs / 60000);
            var h = Math.floor(totalMin / 60);
            var m = totalMin % 60;
            var label = (h > 0 ? h + 'h ' : '') + m + 'm';
            marker.innerHTML = '⏰ Pide en las próximas <strong>' + label + '</strong> y entregamos HOY antes de las 6:00 PM';
        } else {
            marker.innerHTML = '🌅 Próximas entregas: MAÑANA. Pide ya y aseguras tu cupo del primer turno';
        }
    }

    function start() {
        updateCountdown();
        setInterval(updateCountdown, 60000); // refresca cada minuto
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', start);
    } else { start(); }
})();