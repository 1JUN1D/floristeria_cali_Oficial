/* =====================================================
   CATÁLOGO FLORES DEL ENCANTO — CALI
   Fuente única de productos. La usan catalogo.html y las landing pages.
   Precios en pesos colombianos. La foto de cada producto es /assets/foto<id>.webp
   (versión liviana de /assets/<id>.png).
   ===================================================== */

const products = [
    {
        id: 1,
        name: "Ramo Cumpleaños Feliz",
        price: 160000,
        image: "/assets/foto1.webp",
        description: "Ramo de 15 rosas rojas con listón personalizado de «Feliz Cumpleaños», 2 mariposas, tarjeta personalizada y su decoración elegante, ideal para sorprender en su día.",
        categories: ["rosas-rojas", "cumpleanos"]
    },
    {
        id: 2,
        name: "Ramo de 12 Rosas con Mariposas",
        price: 123000,
        image: "/assets/foto2.webp",
        description: "Ramo de 12 rosas rojas con 2 mariposas y tarjeta personalizada, ideal para sorprender a tu persona favorita, y además está en oferta.",
        categories: ["rosas-rojas", "amor", "oferta"]
    },
    {
        id: 3,
        name: "Amor y Ternura",
        price: 248000,
        image: "/assets/foto3.webp",
        description: "Ramo de 12 rosas rojas con 3 chocolates Ferrero, peluche de Stitch, tarjeta personalizada y su decoración elegante, un detalle tierno ideal para sorprender.",
        categories: ["rosas-rojas", "peluches", "chocolates", "amor"]
    },
    {
        id: 4,
        name: "Ramo Exclusivo Cumpleaños",
        price: 358000,
        image: "/assets/foto4.webp",
        description: "Ramo de 50 rosas rojas con listón de cumpleaños, 2 mariposas, corona, tarjeta personalizada y su decoración elegante, el ramo más impactante para celebrar un cumpleaños.",
        categories: ["rosas-rojas", "cumpleanos", "grandes"]
    },
    {
        id: 5,
        name: "Corazón Lleno de Amor",
        price: 373000,
        image: "/assets/foto5.webp",
        description: "Corazón premium de 22 rosas rojas con 3 girasoles, 4 chocolates Ferrero y un osito de «Feliz Día», ideal para sorprender, enamorar o conquistar.",
        categories: ["cajas", "rosas-rojas", "girasoles", "chocolates", "peluches", "amor"]
    },
    {
        id: 6,
        name: "Amor y Alegría",
        price: 223000,
        image: "/assets/foto6.webp",
        description: "Bouquet de 5 girasoles con rusco verde, peluche de Stitch de 20 cm, papel coreano, moño y tarjeta personalizada, un ramo alegre que ilumina cualquier día.",
        categories: ["girasoles", "peluches"]
    },
    {
        id: 7,
        name: "Ramo 15 Años",
        price: 198000,
        image: "/assets/foto7.webp",
        description: "Ramo de 15 rosas rojas con listón personalizado de «Felices 15 Años», corona, mariposa, tarjeta personalizada y su decoración elegante, pensado para la quinceañera.",
        categories: ["rosas-rojas", "quince"]
    },
    {
        id: 8,
        name: "Directo al Cora",
        price: 123000,
        image: "/assets/foto8.webp",
        description: "Ramo de 10 rosas con globo de corazón, mariposa, tarjeta personalizada y su decoración elegante, un detalle que llega directo al corazón.",
        categories: ["rosas-rojas", "globos", "amor"]
    },
    {
        id: 9,
        name: "Detalle que No Puede Faltar",
        price: 160000,
        image: "/assets/foto9.webp",
        description: "Ramo de 8 rosas con osito de «Feliz Día», papel coreano, moño, tarjeta y su decoración elegante, el detalle perfecto para cualquier ocasión.",
        categories: ["rosas-rojas", "peluches"]
    },
    {
        id: 10,
        name: "Dulce Amor",
        price: 285000,
        image: "/assets/foto10.webp",
        description: "Caja de rosas con 3 chocolates, un osito, globo de corazón y globo de «Feliz Día», un regalo completo para sorprender a quien quieres.",
        categories: ["cajas", "rosas-rojas", "peluches", "chocolates", "globos", "amor"]
    },
    {
        id: 11,
        name: "Ramo 50 Rosas Aniversario",
        price: 323000,
        image: "/assets/foto11.webp",
        description: "Ramo de 50 rosas con listón personalizado de «Feliz Aniversario», corona, mariposas y tarjeta con el mensaje que desees, para celebrar su historia juntos.",
        categories: ["rosas-rojas", "amor", "grandes"]
    },
    {
        id: 12,
        name: "Buchón Ternura 50 Rosas",
        price: 335000,
        image: "/assets/foto12.webp",
        description: "Ramo buchón de 50 rosas rosadas con listón personalizado para la cumpleañera más hermosa, corona, mariposas y tarjeta personalizada.",
        categories: ["rosas", "cumpleanos", "grandes"]
    },
    {
        id: 13,
        name: "Rosas para la Más Hermosa",
        price: 185000,
        image: "/assets/foto13.webp",
        description: "Ramo de 12 rosas con listón «Para la más hermosa», corona, moño y tarjeta, un ramo elegante para consentirla.",
        categories: ["rosas-rojas", "amor"]
    },
    {
        id: 14,
        name: "Ramo Exclusivo 24 Rosas",
        price: 210000,
        image: "/assets/foto14.webp",
        description: "Ramo de 24 rosas rojas con corona, 3 mariposas doradas, papel coreano, moño y tarjeta personalizada, a súper precio.",
        categories: ["rosas-rojas", "amor", "oferta"]
    },
    {
        id: 15,
        name: "Ramo Propuesta de Amor",
        price: 223000,
        image: "/assets/foto15.webp",
        description: "Ramo de 14 rosas con perlita, listón personalizado, corona, mariposa, 5 chocolates y tarjeta personalizada, ideal para pedir el sí.",
        categories: ["rosas-rojas", "chocolates", "amor"]
    },
    {
        id: 16,
        name: "Ramo Cumpleaños con Girasoles",
        price: 73000,
        image: "/assets/foto16.webp",
        description: "Ramo de 3 girasoles con perlita, papel coreano, globo de «Feliz Cumpleaños» y tarjeta, un detalle alegre para celebrar sin gastar de más.",
        categories: ["girasoles", "globos", "cumpleanos"]
    },
    {
        id: 17,
        name: "Cilindro Cumpleaños Feliz",
        price: 233000,
        image: "/assets/foto17.webp",
        description: "Cilindro con 10 rosas, 3 chocolates Ferrero y su decoración, ideal para sorprender en su cumpleaños.",
        categories: ["cajas", "rosas-rojas", "chocolates", "cumpleanos"]
    },
    {
        id: 18,
        name: "Ramo Primaveral",
        price: 160000,
        image: "/assets/foto18.webp",
        description: "Ramo de 5 girasoles con su decoración, ideal para alegrar el día de alguien especial.",
        categories: ["girasoles"]
    },
    {
        id: 19,
        name: "Para Mi Princesa",
        price: 223000,
        image: "/assets/foto19.webp",
        description: "Ramo de 20 rosas con listón personalizado, corona, mariposa y su decoración, para la princesa de tu vida.",
        categories: ["rosas-rojas", "quince", "amor"]
    },
    {
        id: 20,
        name: "Corazón Loco por Ti",
        price: 608000,
        image: "/assets/foto20.webp",
        description: "Corazón de 16 rosas con 15 chocolates Ferrero, una botella pequeña de JP Chenet y tarjeta personalizada, ideal para conquistar.",
        categories: ["cajas", "rosas-rojas", "chocolates", "amor", "grandes"]
    },
    {
        id: 21,
        name: "Cubito Ternura",
        price: 223000,
        image: "/assets/foto21.webp",
        description: "Cubo de 18 rosas rosadas y blancas con chocolate Ferrero de 3 unidades y globo de cumpleaños, ideal para sorprender.",
        categories: ["cajas", "rosas", "chocolates", "globos", "cumpleanos"]
    },
    {
        id: 22,
        name: "Amor Puro",
        price: 233000,
        image: "/assets/foto22.webp",
        description: "Ramo de 14 rosas con chocolate corazón Ferrero de 8 unidades, su decoración elegante y tarjeta personalizada.",
        categories: ["rosas-rojas", "chocolates", "amor"]
    },
    {
        id: 23,
        name: "La Graduada Más Hermosa",
        price: 210000,
        image: "/assets/foto23.webp",
        description: "Ramo de 24 rosas rosadas y blancas con listón personalizado y birrete de graduación, para celebrar su gran logro.",
        categories: ["rosas", "grados"]
    },
    {
        id: 24,
        name: "Ramo Feliz Grado",
        price: 185000,
        image: "/assets/foto24.webp",
        description: "Ramo de 8 rosas con osito graduado de «Feliz Día» con birrete y su decoración, un detalle tierno para el día del grado.",
        categories: ["rosas-rojas", "peluches", "grados"]
    },
    {
        id: 25,
        name: "Arreglo Exclusivo Feliz Grado",
        price: 358000,
        image: "/assets/foto25.webp",
        description: "Arreglo redondo de rosas rosadas y blancas con globo burbuja, osito personalizado con birrete y tarjeta personalizada.",
        categories: ["rosas", "peluches", "globos", "grados"]
    },
    {
        id: 26,
        name: "Ramo Ternura de Grado",
        price: 248000,
        image: "/assets/foto26.webp",
        description: "Ramo de 12 rosas fucsia con 5 chocolates Ferrero, peluche especial con birrete y su decoración.",
        categories: ["rosas", "chocolates", "peluches", "grados"]
    },
    {
        id: 27,
        name: "Ramo 12 Rosas de Grado",
        price: 160000,
        image: "/assets/foto27.webp",
        description: "Ramo de 12 rosas personalizado con birrete, mariposas y su decoración, ideal para felicitar en su graduación.",
        categories: ["rosas-rojas", "grados"]
    },
    {
        id: 28,
        name: "Ramo Graduada con Girasoles",
        price: 233000,
        image: "/assets/foto28.webp",
        description: "Ramo de 6 girasoles con perlita blanca, oso personalizado con birrete y globo burbuja de «Feliz Grado».",
        categories: ["girasoles", "peluches", "globos", "grados"]
    },
    {
        id: 29,
        name: "Ramo Exclusivo Graduación",
        price: 373000,
        image: "/assets/foto29.webp",
        description: "Ramo de 40 rosas con 3 mariposas decorativas, globo burbuja para la graduada más hermosa, decoración elegante y tarjeta personalizada, para sorprender en este gran logro.",
        categories: ["rosas-rojas", "globos", "grados", "grandes"]
    },
    {
        id: 30,
        name: "Ramo 15 Primaveras",
        price: 185000,
        image: "/assets/foto30.webp",
        description: "Ramo de 15 rosas rosadas con listón personalizado de «Felices 15 Años», corona, mariposa y tarjeta personalizada.",
        categories: ["rosas", "quince"]
    },
    {
        id: 31,
        name: "Ramo Exclusivo de Girasoles",
        price: 475000,
        image: "/assets/foto31.webp",
        description: "Ramo buchón de 24 girasoles con su decoración, ideal para sorprender a esa persona que tanto amas.",
        categories: ["girasoles", "grandes"]
    },
    {
        id: 32,
        name: "Cilindro de Rosas",
        price: 210000,
        image: "/assets/foto32.webp",
        description: "Cilindro con 12 rosas rosadas, chocolate Ferrero de 3 unidades y su decoración.",
        categories: ["cajas", "rosas", "chocolates"]
    },
    {
        id: 33,
        name: "Ramo Especial 12 Girasoles",
        price: 298000,
        image: "/assets/foto33.webp",
        description: "Ramo de 12 girasoles con su decoración, ideal para sorprender y alegrar su día.",
        categories: ["girasoles"]
    },
    {
        id: 34,
        name: "Ramo Dulce Amor Stitch",
        price: 248000,
        image: "/assets/foto34.webp",
        description: "Ramo de 12 rosas y un girasol con perla, peluche pequeño de Stitch y chocolate corazón de 3 unidades, un combo completo para sorprender.",
        categories: ["rosas-rojas", "girasoles", "peluches", "chocolates", "amor"]
    },
    {
        id: 35,
        name: "Cubo de Rosas Cumpleaños",
        price: 198000,
        image: "/assets/foto35.webp",
        description: "Cubo de rosas rojas con un girasol al centro y globo de «Feliz Cumpleaños», ideal para sorprender en su día.",
        categories: ["cajas", "rosas-rojas", "cumpleanos", "globos"]
    }
];

/* Etiquetas legibles de cada categoría */
const categoryLabels = {
    'rosas-rojas': 'Rosas Rojas',
    'rosas': 'Rosas Rosadas y Blancas',
    'girasoles': 'Girasoles',
    'cumpleanos': 'Cumpleaños',
    'quince': '15 Años',
    'grados': 'Grados',
    'amor': 'Amor y Aniversario',
    'peluches': 'Con Peluche',
    'chocolates': 'Con Chocolates',
    'globos': 'Con Globo',
    'cajas': 'Cajas, Cubos y Corazones',
    'grandes': 'Ramos Grandes',
    'oferta': 'En Oferta'
};

/* Número de WhatsApp de la floristería */
const WHATSAPP_NUMBER = '573044510598';
const SITE_URL = 'http://floristeriacali.dondeseria.com/';
