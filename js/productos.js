/* =====================================================
   CATÁLOGO ATELIER VERGARA — CALI
   Fuente única de productos. La usan catalogo.html y las landing pages.
   Precios en pesos colombianos. La foto de cada producto es /assets/foto<id>.webp
   (versión liviana de /assets/<id>.png).
   ===================================================== */

const products = [
    {
        id: 1,
        name: "Ramo Buchón Inicial y Corazón",
        price: 250000,
        image: "/assets/foto1.webp",
        description: "Ramo buchón de rosas rojas con la inicial que elijas y un corazón hechos en gypsophila, rodeado de nube blanca, mariposas doradas y papel negro con filo blanco.",
        categories: ["rosas-rojas", "amor", "grandes"]
    },
    {
        id: 2,
        name: "Ramo Mi Primera Comunión",
        price: 221000,
        image: "/assets/foto2.webp",
        description: "Ramo buchón de rosas blancas y rosadas con lirios rosados, listón «Mi Primera Comunión» y mariposas doradas, envuelto en papel blanco para celebrar ese día especial.",
        categories: ["rosas", "lirios", "grandes"]
    },
    {
        id: 3,
        name: "Ramo Graduada Más Hermosa",
        price: 213000,
        image: "/assets/foto3.webp",
        description: "Ramo buchón de rosas rojas con listón «Para la graduada más hermosa» y papel blanco con franjas, el detalle ideal para celebrar su grado.",
        categories: ["rosas-rojas", "grados", "grandes"]
    },
    {
        id: 4,
        name: "Ramo Mi Niña Hermosa",
        price: 218000,
        image: "/assets/foto4.webp",
        description: "Ramo buchón de rosas rojas con listón negro y frase dorada personalizada, envuelto en papel y tul negro, para decirle todo lo que sientes.",
        categories: ["rosas-rojas", "amor", "grandes"]
    },
    {
        id: 5,
        name: "Ramo Felices 18",
        price: 225000,
        image: "/assets/foto5.webp",
        description: "Ramo buchón de rosas blancas y rosadas con nube de gypsophila, listón «Felices 18» con moño de perlas y figuras decorativas, perfecto para un cumpleaños especial.",
        categories: ["rosas", "cumpleanos", "grandes"]
    },
    {
        id: 6,
        name: "Ramo Rosas Amarillas con Corona",
        price: 275000,
        image: "/assets/foto6.webp",
        description: "Ramo de rosas amarillas con corona plateada, mariposas doradas y papel blanco con cintas amarillas, un detalle luminoso para consentir a una reina.",
        categories: ["cumpleanos", "grandes"]
    },
    {
        id: 7,
        name: "Ramo Clásico de Rosas Rojas",
        price: 100000,
        image: "/assets/foto7.webp",
        description: "Ramo de rosas rojas con mariposa dorada, papel blanco con filo negro y moño negro, el clásico que nunca falla.",
        categories: ["rosas-rojas", "amor"]
    },
    {
        id: 8,
        name: "Ramo Primavera Rosa",
        price: 225000,
        image: "/assets/foto8.webp",
        description: "Ramo de lirios rosados, rosas fucsia y rosa pálido, claveles y solidago, con mariposas rosadas y papel rosado, lleno de color y aroma.",
        categories: ["lirios", "rosas", "cumpleanos"]
    },
    {
        id: 9,
        name: "Ramo Girasoles y Rosas Rojas",
        price: 231000,
        image: "/assets/foto9.webp",
        description: "Ramo de girasoles y rosas rojas con solidago, mariposas doradas y papel negro, una mezcla alegre y elegante a la vez.",
        categories: ["girasoles", "rosas-rojas"]
    },
    {
        id: 10,
        name: "Ramo Rojo Pasión",
        price: 219000,
        image: "/assets/foto10.webp",
        description: "Ramo de rosas rojas intensas con mariposas doradas, papel negro translúcido y moño dorado, elegante para aniversarios y fechas especiales.",
        categories: ["rosas-rojas", "amor"]
    },
    {
        id: 11,
        name: "Ramo de Lirios Rosados",
        price: 95000,
        image: "/assets/foto11.webp",
        description: "Ramo de lirios rosados con follaje verde y papel lila, fresco y perfumado, un detalle sencillo y muy bonito.",
        categories: ["lirios"]
    },
    {
        id: 12,
        name: "Ramo Rosas Rosadas Temático",
        price: 96000,
        image: "/assets/foto12.webp",
        description: "Ramo de rosas rosadas con tarjeta y figura del personaje favorito, papel lila y moño fucsia, ideal para el cumpleaños de una niña o una joven.",
        categories: ["rosas", "cumpleanos"]
    },
    {
        id: 13,
        name: "Ramo Rosa Pastel",
        price: 96000,
        image: "/assets/foto13.webp",
        description: "Ramo de rosas rosadas en papel rosado translúcido con moño dorado y rosado, delicado y romántico.",
        categories: ["rosas", "amor"]
    },
    {
        id: 14,
        name: "Ramo Mi Graduación",
        price: 113000,
        image: "/assets/foto14.webp",
        description: "Ramo de rosas rosadas con solidago, globo «Mi Graduación», figura de graduada, fotos y tarjeta personalizada, para celebrar su logro.",
        categories: ["rosas", "grados", "globos"]
    },
    {
        id: 15,
        name: "Ramo Rosas Rojas con Fotos",
        price: 106000,
        image: "/assets/foto15.webp",
        description: "Ramo de rosas rojas con solidago, mariposas, tus fotos tipo polaroid y tarjeta personalizada, envuelto en papel rosado con moño fucsia.",
        categories: ["rosas-rojas", "amor"]
    },
    {
        id: 16,
        name: "Ramo Girasoles Perlados",
        price: 250000,
        image: "/assets/foto16.webp",
        description: "Ramo de girasoles y rosas rojas con nube de gypsophila y perlas, envuelto en papel negro y dorado, grande y vistoso.",
        categories: ["girasoles", "rosas-rojas", "grandes"]
    },
    {
        id: 17,
        name: "Ramo de Tulipanes con Mensaje",
        price: 244000,
        image: "/assets/foto17.webp",
        description: "Ramo de tulipanes naranja y rosados con gypsophila, mariposa y tarjeta con tu mensaje, envuelto en papel rosado con moño.",
        categories: ["tulipanes", "amor"]
    },
    {
        id: 18,
        name: "Ramo de Tulipanes Lila y Blanco",
        price: 244000,
        image: "/assets/foto18.webp",
        description: "Ramo de tulipanes morados y blancos con nube de gypsophila, mariposas doradas y papel blanco plisado, suave y elegante.",
        categories: ["tulipanes"]
    },
    {
        id: 19,
        name: "Caja Corazón de Rosas Rosadas",
        price: 245000,
        image: "/assets/foto19.webp",
        description: "Caja negra en forma de corazón con rosas rosadas y gypsophila, acompañada de tus fotos tipo polaroid y una carta personalizada.",
        categories: ["cajas", "rosas", "amor"]
    },
    {
        id: 20,
        name: "Corazón de Rosas con Fresas y Licor",
        price: 350000,
        image: "/assets/foto20.webp",
        description: "Caja corazón de rosas rojas y blancas con gypsophila, botella de licor con moño y cajón de fresas cubiertas de chocolate, el regalo completo para sorprender.",
        categories: ["cajas", "rosas-rojas", "chocolates", "amor", "grandes"]
    },
    {
        id: 21,
        name: "Ramo Te Amamos Mami",
        price: 188000,
        image: "/assets/foto21.webp",
        description: "Ramo de rosas blancas y rojas en franjas con gypsophila, fotos familiares y tarjeta «Te amamos mami», en papel rojo con moño.",
        categories: ["rosas-rojas", "rosas"]
    },
    {
        id: 22,
        name: "Ramo Buchón Rojo y Plata",
        price: 238000,
        image: "/assets/foto22.webp",
        description: "Ramo buchón de rosas rojas con gypsophila y mariposas plateadas, envuelto en papel blanco con filo negro.",
        categories: ["rosas-rojas", "amor", "grandes"]
    },
    {
        id: 23,
        name: "Arreglo Cumpleaños en Canasta",
        price: 438000,
        image: "/assets/foto23.webp",
        description: "Gran arreglo en canasta con girasoles, rosas blancas y amarillas, lirios, solidago y follaje, con letrero de «Feliz Cumpleaños» y cintas.",
        categories: ["girasoles", "lirios", "cumpleanos", "grandes"]
    },
    {
        id: 24,
        name: "Ramo Graduada con Fotos",
        price: 238000,
        image: "/assets/foto24.webp",
        description: "Ramo de rosas rojas con gypsophila, letrero «Para la graduada más hermosa» y tus fotos, en papel transparente con detalles negros y moño negro.",
        categories: ["rosas-rojas", "grados"]
    },
    {
        id: 25,
        name: "Ramo Corazón Cumpleaños",
        price: 238000,
        image: "/assets/foto25.webp",
        description: "Ramo de rosas rojas con un corazón de flores fucsia al centro, tus fotos, carta de cumpleaños y mariposas, en papel negro con filo dorado.",
        categories: ["rosas-rojas", "cumpleanos", "amor"]
    },
    {
        id: 26,
        name: "Ramo Lirios y Hortensia",
        price: 225000,
        image: "/assets/foto26.webp",
        description: "Ramo de lirios rosados, hortensia blanca, claveles rojos y follaje con listón personalizado, envuelto en papel negro con filo dorado.",
        categories: ["lirios", "cumpleanos"]
    },
    {
        id: 27,
        name: "Ramo Felicidades Graduada",
        price: 200000,
        image: "/assets/foto27.webp",
        description: "Ramo de rosas color durazno con solidago, globo de graduación, figura de graduada y tarjeta personalizada, en papel rosado con moño.",
        categories: ["rosas", "grados", "globos"]
    },
    {
        id: 28,
        name: "Corazón de Rosas Amarillas",
        price: 238000,
        image: "/assets/foto28.webp",
        description: "Ramo en forma de corazón de rosas amarillas rodeado de rosas rojas, con moño de perlas y tarjeta con tu mensaje, en papel gris.",
        categories: ["rosas-rojas", "amor"]
    },
    {
        id: 29,
        name: "Ramo ¿Puedo Ser Tu Novio?",
        price: 244000,
        image: "/assets/foto29.webp",
        description: "Ramo buchón de rosas rojas y fucsia con listón «¿Puedo ser tu novio?», corona dorada y mariposas, en papel blanco, para la pregunta más importante.",
        categories: ["rosas-rojas", "amor", "grandes"]
    },
    {
        id: 30,
        name: "Ramo Rojo y Rosa",
        price: 219000,
        image: "/assets/foto30.webp",
        description: "Ramo de rosas rojas y rosadas intercaladas en papel blanco y rosado con cintas, romántico y lleno de color.",
        categories: ["rosas-rojas", "rosas", "amor"]
    },
    {
        id: 31,
        name: "Ramo de Tulipanes Cumpleaños",
        price: 169000,
        image: "/assets/foto31.webp",
        description: "Ramo de tulipanes de colores con solidago, margaritas y eucalipto, con foto y tarjeta de cumpleaños, mariposas y papel blanco.",
        categories: ["tulipanes", "cumpleanos"]
    },
    {
        id: 32,
        name: "Corazón Amarillo con Peluche",
        price: 325000,
        image: "/assets/foto32.webp",
        description: "Ramo con corazón de rosas amarillas rodeado de rosas blancas y gypsophila, con peluche de abeja y caja de chocolates Ferrero Rocher.",
        categories: ["peluches", "chocolates", "rosas", "cumpleanos", "grandes"]
    },
    {
        id: 33,
        name: "Canasta Rosas, Vino y Chocolates",
        price: 300000,
        image: "/assets/foto33.webp",
        description: "Canasta de mimbre con rosas rojas, gypsophila y follaje, botella de vino y chocolates Ferrero Rocher, con moño rojo.",
        categories: ["rosas-rojas", "chocolates", "amor"]
    },
    {
        id: 34,
        name: "Ramo Hortensia Azul y Lirios",
        price: 175000,
        image: "/assets/foto34.webp",
        description: "Ramo de hortensia azul con lirios blancos y follaje verde, envuelto en papel rosado claro, fresco y diferente.",
        categories: ["lirios"]
    },
    {
        id: 35,
        name: "Oso de Rosas en Caja",
        price: 619000,
        image: "/assets/foto35.webp",
        description: "Oso hecho de rosas rojas con corona plateada y moño de perlas, en caja negra con dorado, el regalo más impactante del catálogo.",
        categories: ["cajas", "rosas-rojas", "amor", "grandes"]
    }
];

/* Etiquetas legibles de cada categoría */
const categoryLabels = {
    'rosas-rojas': 'Rosas Rojas',
    'rosas': 'Rosas Rosadas y Blancas',
    'girasoles': 'Girasoles',
    'lirios': 'Lirios',
    'tulipanes': 'Tulipanes',
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
const WHATSAPP_NUMBER = '573235933021';
const SITE_URL = 'http://floristeriacali.dondeseria.com/';
