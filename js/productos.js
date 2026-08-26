/* =====================================================
   CATÁLOGO FLOWERS SUSI LOP — CALI
   Fuente única de productos. La usan catalogo.html y las landing pages.
   Precios en pesos colombianos.
   ===================================================== */

const products = [
    {
        id: 1,
        name: "Corona de Rosas Rojas",
        price: 118750,
        image: "/assets/foto1.webp",
        description: "Rosas rojas de botón grande abiertas sobre nube blanca, montadas en una caja de cartón troquelada en forma de corona rosada con cintas de raso. Un detalle con aire de realeza: llega listo para poner sobre la mesa y es de los que se fotografían apenas se entregan.",
        categories: ["rosas-rojas", "cajas", "amor"]
    },
    {
        id: 2,
        name: "Claveles Berenjena en Florero",
        price: 162500,
        image: "/assets/foto2.webp",
        description: "Claveles en tonos berenjena, fucsia y rosa pastel intercalados con ramas de nube blanca, dispuestos en florero de vidrio con lazo de raso al cuello. Los claveles son de las flores que más duran en agua: este arreglo sigue lindo una y dos semanas después.",
        categories: ["claveles", "floreros", "mix"]
    },
    {
        id: 3,
        name: "Girasol en Blanco y Negro",
        price: 156250,
        image: "/assets/foto3.webp",
        description: "Un girasol grande y abierto rodeado de pompones blancos y amarillos, nube y hojas de eucalipto azul, envuelto en papel coreano negro con filo blanco. El contraste del papel oscuro con el amarillo lo vuelve un ramo moderno, elegante y muy vistoso.",
        categories: ["girasoles", "mix"]
    },
    {
        id: 4,
        name: "Campestre Sol y Fucsia",
        price: 137500,
        image: "/assets/foto4.webp",
        description: "Dos girasoles abiertos acompañados de claveles fucsia y rosados, una rosa rosada, una rosa roja y nube blanca, envueltos en papel kraft y atados con cuerda de fique. Colorido, alegre y con ese aire de flores recién traídas del campo.",
        categories: ["girasoles", "claveles", "mix"]
    },
    {
        id: 5,
        name: "Ramo Rosado con Astromelias",
        price: 106250,
        image: "/assets/foto5.webp",
        description: "Claveles rosados en base, rosas fucsia, astromelias moteadas, margaritas blancas y ramas de eucalipto, en papel blanco y negro con lazo de raso. Una mezcla suave y femenina, del tamaño justo para llevar de visita o mandar a la oficina.",
        categories: ["claveles", "mix", "rosas"]
    },
    {
        id: 6,
        name: "Docena Clásica de Rosas Rojas",
        price: 81250,
        image: "/assets/foto6.webp",
        description: "Doce rosas rojas de tallo largo con nube blanca y eucalipto, envueltas en papel blanco con filo dorado y cuerda de fique. La forma más directa de decir «te amo» y nuestra opción más económica dentro de las rosas: no falla en ningún aniversario.",
        categories: ["rosas-rojas", "amor", "economico"]
    },
    {
        id: 7,
        name: "Claveles Rosados en Papel Negro",
        price: 106250,
        image: "/assets/foto7.webp",
        description: "Claveles rosados de flor ancha con acentos berenjena, pompones amarillos y eucalipto, envueltos en papel negro brillante y rematados con un lazo de raso blanco. Sobrio por fuera, muy dulce por dentro: perfecto para un cumpleaños o un agradecimiento.",
        categories: ["claveles", "mix"]
    },
    {
        id: 8,
        name: "Florero Romántico Rojo y Rosa",
        price: 118750,
        image: "/assets/foto8.webp",
        description: "Rosas rojas, claveles rosados y fucsia con nube blanca y hoja verde, ya montados en florero de vidrio con moño de raso blanco. Llega listo, sin necesidad de buscar dónde ponerlo, y es de los arreglos que más rinden por lo que cuestan.",
        categories: ["floreros", "rosas-rojas", "claveles"]
    },
    {
        id: 9,
        name: "Bolso Campestre en Kraft",
        price: 143750,
        image: "/assets/foto9.webp",
        description: "Canasta tipo bolso en cartón kraft con base forrada en fique: adentro, rosas fucsia, claveles rosados, pompones amarillos, nube y eucalipto. Se entrega con manija, así que se lleva y se muestra sin despeinar ni una flor.",
        categories: ["mix", "rosas", "claveles"]
    },
    {
        id: 10,
        name: "Ramo Blanco de Lirios y Rosas",
        price: 156250,
        image: "/assets/foto10.webp",
        description: "Lirios orientales abiertos, rosas blancas y pompones blancos sobre follaje verde y eucalipto, envueltos en papel no tejido blanco con lazo de raso y tarjeta para la dedicatoria. La opción más apropiada para condolencias, agradecimientos formales y visitas de hospital.",
        categories: ["blancos", "mix", "condolencias"]
    },
    {
        id: 11,
        name: "Media Docena de Rosas Amarillas",
        price: 93750,
        image: "/assets/foto11.webp",
        description: "Seis rosas amarillas de botón grande con nube blanca y eucalipto, envueltas en papel amarillo texturizado con lazo de raso al tono. Alegres y luminosas: se regalan para celebrar la amistad, un logro o simplemente para levantarle el día a alguien.",
        categories: ["rosas", "economico"]
    },
    {
        id: 12,
        name: "Bouquet Sol de Girasoles y Gerberas",
        price: 187500,
        image: "/assets/foto12.webp",
        description: "Girasoles, rosas color champán, gerberas amarillas y astromelias sobre follaje verde y una hoja de monstera, envueltos en tul amarillo con moño de raso. Un ramo grande y radiante, pensado para entradas triunfales y buenas noticias.",
        categories: ["girasoles", "mix", "rosas"]
    },
    {
        id: 13,
        name: "Quince Años en Rosa y Lila",
        price: 237500,
        image: "/assets/foto13.webp",
        description: "Rosas rosadas y lilas entre abundante nube blanca y eucalipto, con un osito de peluche con corona y una tiara decorativa entre las flores, envuelto en papel rosado texturizado con lazo de raso y tarjeta personalizada. Nuestro diseño para quinceañeras y cumpleaños de princesa.",
        categories: ["rosas", "peluches", "cumpleanos"]
    },
    {
        id: 14,
        name: "Jardín Silvestre en Kraft",
        price: 181250,
        image: "/assets/foto14.webp",
        description: "Rosas rosadas, lisianthus lila, claveles rojos, margaritas blancas, helechos, eucalipto y hojas de monstera, en papel kraft con cuerda de fique. Un arreglo abundante y natural, como un jardín recogido esa misma mañana.",
        categories: ["mix", "rosas", "claveles"]
    },
    {
        id: 15,
        name: "Sombrerera Negra Feliz Cumpleaños",
        price: 287500,
        image: "/assets/foto15.webp",
        description: "Sombrerera negra rebosante de girasoles, gerberas fucsia, rosas naranjas, hortensias rosadas, lisianthus y margaritas, con eucalipto cayendo por los bordes y tarjeta de «Feliz Cumpleaños». La pieza más celebratoria del catálogo y la que más impacto causa al entregarla.",
        categories: ["cajas", "mix", "cumpleanos", "girasoles"]
    },
    {
        id: 16,
        name: "Florero Blanco de Lirios y Rosas",
        price: 243750,
        image: "/assets/foto16.webp",
        description: "Lirios blancos, rosas marfil y pompones blancos abiertos entre eucalipto y follaje verde, montados en florero de vidrio con lazo de raso y tarjeta en kraft. Un arreglo alto, sereno y de mucha presencia: ideal para condolencias, oficinas y recepciones.",
        categories: ["blancos", "floreros", "condolencias"]
    },
    {
        id: 17,
        name: "Sombrerera de Hortensias Pastel",
        price: 300000,
        image: "/assets/foto17.webp",
        description: "Sombrerera color champán con hortensias rosadas, blancas y azules acompañadas de rosas rosadas y ramas de eucalipto. La combinación pastel más pedida para bautizos, baby showers y aniversarios: delicada, abundante y de las que se recuerdan.",
        categories: ["cajas", "rosas", "blancos"]
    }
];

/* Etiquetas legibles de cada categoría */
const categoryLabels = {
    'rosas-rojas': 'Rosas Rojas',
    'rosas': 'Rosas de Color',
    'girasoles': 'Girasoles',
    'claveles': 'Claveles',
    'mix': 'Ramos Mix',
    'cajas': 'Cajas y Sombrereras',
    'floreros': 'Floreros',
    'blancos': 'Flores Blancas',
    'condolencias': 'Condolencias',
    'cumpleanos': 'Cumpleaños y 15 Años',
    'peluches': 'Con Peluche',
    'amor': 'Amor y Aniversario',
    'economico': 'Económicos'
};

/* Número de WhatsApp de la floristería */
const WHATSAPP_NUMBER = '573228853129';
const SITE_URL = 'http://floristeriacali.dondeseria.com/';
