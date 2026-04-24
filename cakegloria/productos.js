// ============================================
// DATOS DE PRODUCTOS - CakeGloria
// ============================================
// imagen: puede ser "imagenes/cake1.jpg" (una foto)
//         o ["imagenes/cake1.jpg", "imagenes/cake1b.jpg"] (varias fotos)
// ============================================

var WHATSAPP_NUMBER_PRODUCTOS = '+5352780323'; // ← CAMBIAR AL NÚMERO REAL

var productosData = [
    {
        id: 1,
        nombre: "Cake Felicidades Clásico",
        descripcion: "Suave panetela de vainilla con opción de relleno de chocolate o totalmente vainilla. Decorado con delicadas flores de crema y detalles personalizados para celebrar cualquier ocasión.",
        medida: "21x12",
        precio: 4500,
        moneda: "CUP",
        imagen: [
            "imagenes/cakeclasico/1776719085.jpg",
            "imagenes/cakeclasico/1776719092.jpeg",
            "imagenes/cakeclasico/1776719098.jpeg",
            "imagenes/cakeclasico/1776719106.jpg"
        ],
        categoria: "clasicos",
        disponible: true
    },
    {
        id: 2,
        nombre: "Cake Bombón",
        descripcion: "Exquisita panetela de chocolate triple rellena de ganache, cubierta con chocolate semiamargo y decorada con virutas que aportan textura y sabor intenso.",
        medida: "21x12",
        precio: 5500,
        moneda: "CUP",
        imagen: [
            "imagenes/bombon/1776721487_compressed.png",
            "imagenes/bombon/1776721638_compressed.png",
            "imagenes/bombon/1776722562_compressed.jpeg",
            "imagenes/bombon/1776722572_compressed.jpeg",
            "imagenes/bombon/1776722581_compressed.jpeg",
            "imagenes/bombon/1776722588_compressed.jpeg"
        ],
        categoria: "clasicos",
        disponible: true
    },
    {
        id: 3,
        nombre: "Cake de Nata",
        descripcion: "Panetela de chocolate triple con relleno cremoso de ganache, cubierta con nata fresca y detalles decorativos que realzan su elegancia.",
        medida: "21x12",
        precio: 6500,
        moneda: "CUP",
        imagen: [
            "imagenes/nata/cakenata.jpeg",
            "imagenes/nata/cakenata1.jpeg",
            "imagenes/nata/cakenata2.jpeg"
        ],
        categoria: "clasicos",
        disponible: true
    },
    {
        id: 4,
        nombre: "Cake Muñequito",
        descripcion: "Divertida panetela decorada con muñequitos coloridos, ideal para cumpleaños infantiles y celebraciones temáticas.",
        medida: "21x12",
        precio: 5000,
        moneda: "CUP",
        imagen: [
            "imagenes/muñequito/1776739888.png",
            "imagenes/muñequito/1776739902.png"
        ],
        categoria: "tematicos",
        disponible: true
    },
    {
        id: 5,
        nombre: "Cake Muñequito de Bombón",
        descripcion: "Panetela de chocolate con decoración de muñequitos elaborados en bombón, perfecta para sorprender a los más pequeños.",
        medida: "21x12",
        precio: 5500,
        moneda: "CUP",
        imagen: [
            "imagenes/muñequito/1776739845.png",
            "imagenes/muñequito/1776739860.png"
        ],
        categoria: "tematicos",
        disponible: true
    },
    {
        id: 6,
        nombre: "Cake de Santos",
        descripcion: "Panetela decorada con motivos religiosos, ideal para celebraciones espirituales y ocasiones especiales.",
        medida: "21x12",
        precio: 5500,
        moneda: "CUP",
        imagen: [
            "imagenes/santos/1776741342.png",
            "imagenes/santos/1776741333.jpeg"
        ],
        categoria: "especiales",
        disponible: true
    },
    {
        id: 7,
        nombre: "Cake de Santos con Hoja Comestible",
        descripcion: "Panetela decorada con imágenes religiosas impresas en hoja comestible, aportando un toque único y personalizado.",
        medida: "21x12",
        precio: 6500,
        moneda: "CUP",
        imagen: [
            "imagenes/santos/1776741399.png",
            "imagenes/santos/1776741352.jpeg"
        ],
        categoria: "especiales",
        disponible: true
    },
    {
        id: 8,
        nombre: "Cake de Santos de Bombón",
        descripcion: "Panetela de chocolate con decoración temática religiosa en bombón, combinando tradición y dulzura.",
        medida: "21x12",
        precio: 6000,
        moneda: "CUP",
        imagen: [
            "imagenes/santos/1776741382.png",
            "imagenes/santos/1776741443.jpeg"
        ],
        categoria: "especiales",
        disponible: true
    },
    {
        id: 9,
        nombre: "Cake Cuadrado",
        descripcion: "Imponente cake cuadrado de gran tamaño, ideal para compartir en eventos familiares o celebraciones grandes.",
        medida: "26x26",
        precio: 12000,
        moneda: "CUP",
        imagen: [
            "imagenes/cuadrado/1776743644.jpeg",
            "imagenes/cuadrado/1776743771.jpeg"
        ],
        categoria: "clasicos",
        disponible: true
    },
    {
        id: 10,
        nombre: "Cake Doble de Alto Redondo",
        descripcion: "Elegante cake redondo de dos niveles, con altura especial para destacar en cualquier mesa de celebración.",
        medida: "22x20",
        precio: 12000,
        moneda: "CUP",
        imagen: [
            "imagenes/cuadrado/1776742388.jpeg",
            "imagenes/cuadrado/1776742448.jpeg"
        ],
        categoria: "clasicos",
        disponible: true
    },
    {
        id: 11,
        nombre: "Cake Rectangular",
        descripcion: "Cake rectangular de gran tamaño, perfecto para reuniones y celebraciones con muchos invitados.",
        medida: "23x29",
        precio: 12000,
        moneda: "CUP",
        imagen: [
            "imagenes/cuadrado/1776742462.jpeg"
        ],
        categoria: "clasicos",
        disponible: true
    },
    {
        id: 12,
        nombre: "Cake Bombón con Confituras",
        descripcion: "Panetela de chocolate con relleno de ganache y confituras frutales, que aportan frescura y contraste de sabores.",
        medida: "21x12",
        precio: 6500,
        moneda: "CUP",
        imagen: [
            "imagenes/confitura/1776794583.jpeg",
            "imagenes/confitura/1776794672.jpeg",
            "imagenes/confitura/1776790363.jpeg"
        ],
        categoria: "confituras",
        disponible: true
    },
    {
        id: 13,
        nombre: "Cake Bombón con Confituras y Nata",
        descripcion: "Deliciosa combinación de panetela de chocolate con confituras frutales y cobertura de nata fresca.",
        medida: "21x12",
        precio: 7500,
        moneda: "CUP",
        imagen: [
            "imagenes/confitura/1776790474.jpeg",
            "imagenes/confitura/1776790409.jpeg",
            "imagenes/confitura/1776790446.jpeg"
        ],
        categoria: "confituras",
        disponible: true
    },
    {
        id: 14,
        nombre: "Cake Temático",
        descripcion: "Cake decorado con diseños personalizados según la ocasión, ideal para cumpleaños, aniversarios y celebraciones especiales.",
        medida: "21x12",
        precio: 6000,
        moneda: "CUP",
        imagen: [
            "imagenes/tematico/1776824070.jpeg",
            "imagenes/tematico/1776825749.jpeg",
            "imagenes/tematico/1776824099.jpeg"
        ],
        categoria: "tematicos",
        disponible: true
    },
    {
        id: 15,
        nombre: "Cake Temático de Nata",
        descripcion: "Panetela decorada con nata fresca y motivos temáticos, perfecta para quienes buscan un toque elegante y festivo.",
        medida: "21x12",
        precio: 7500,
        moneda: "CUP",
        imagen: [
            "imagenes/tematico/1776825726.jpeg",
            "imagenes/tematico/1776825841.jpeg",
            "imagenes/tematico/1776825848.jpeg"
        ],
        categoria: "tematicos",
        disponible: true
    },
        {
        id: 16,
        nombre: "Cake Temático de Hoja Comestible",
        descripcion: "Panetela decorada con diseños impresos en hoja comestible, ofreciendo un acabado único y personalizado para cualquier celebración especial.",
        medida: "21x12",
        precio: 7000,
        moneda: "CUP",
        imagen: [
            "imagenes/tematico/1776824080.jpeg",
            "imagenes/tematico/1776824089.jpeg",
            "imagenes/tematico/1776825740.jpeg",
            "imagenes/tematico/1776824616.jpeg"
        ],
        categoria: "tematicos",
        disponible: true
    },
    {
        id: 17,
        nombre: "Cake Temático de Bombón",
        descripcion: "Panetela de chocolate decorada con bombones y motivos temáticos, ideal para quienes buscan un toque dulce y creativo en sus celebraciones.",
        medida: "21x12",
        precio: 7000,
        moneda: "CUP",
        imagen: [
            "imagenes/tematico/1776824524.jpeg",
            "imagenes/tematico/1776824616.jpeg"
        ],
        categoria: "tematicos",
        disponible: true
    },
    {
        id: 18,
        nombre: "Cake Tres pisos",
        descripcion: "Cake Tres pisos",
        medida: "21x12",
        precio: 150,
        moneda: "USD",
        imagen: [
            "imagenes/cakeTresPisos/cakeTresPisos.jpeg",
            "imagenes/cakeTresPisos/cakeTresPisos1.jpeg"
        ],
        categoria: "clasicos",
        disponible: true
    },
    {
        id: 19,
        nombre: "Cake Tres leches",
        descripcion: "Cake Tres leches",
        medida: "21x12",
        precio: 8000,
        moneda: "CUP",
        imagen: [
            "imagenes/tresleches/tresleches.jpeg",
            "imagenes/tresleches/tresleches1.jpeg"
        ],
        categoria: "clasicos",
        disponible: true
    },
    {
        id: 20,
        nombre: "Cake Altos",
        descripcion: "Cake Altos",
        medida: "21x18",
        precio: 1500,
        moneda: "CUP",
        imagen: [
            "imagenes/cakealtos/cakealtos1.jpeg",
            "imagenes/cakealtos/cakealtos.jpeg",
            "imagenes/cakealtos/cakealtos2.jpeg"
        ],
        categoria: "clasicos",
        disponible: true
    },
    {
        id: 21,
        nombre: "Cake de revelación de sexo",
        descripcion: "Cake de revelación de sexo",
        medida: "21x12",
        precio: 5000,
        moneda: "CUP",
        imagen: [
            "imagenes/reveleacionsexo/1777051307.jpeg",
            "imagenes/reveleacionsexo/1777051312.jpeg",
            "imagenes/reveleacionsexo/1777051319.jpeg"
        ],
        categoria: "clasicos",
        disponible: true
    },
    {
        id: 22,
        nombre: "Cake de revelación de sexo con temática",
        descripcion: "Cake de revelación de sexo con temática",
        medida: "21x12",
        precio: 6000,
        moneda: "CUP",
        imagen: [
            "imagenes/revelacionsexotematico/revelacionSexoTematico.jpeg",
            "imagenes/revelacionsexotematico/revelacionSexoTematico1.jpeg"
        ],
        categoria: "clasicos",
        disponible: true
    },
    {
        id: 23,
        nombre: "Cake 15",
        descripcion: "Puede variar el precio según relleno y decoración",
        medida: "?",
        precio: 80,
        moneda: "USD",
        imagen: [
            "imagenes/cake15/cake.jpeg",
            "imagenes/cake15/cake2.jpeg",
            "imagenes/cake15/cake3.jpeg",
            "imagenes/cake15/cake4.jpeg",
            "imagenes/cake15/cake5.jpeg",
            "imagenes/cake15/cake6.jpeg",
            "imagenes/cake15/cake7.jpeg",
            "imagenes/cake15/cake9.jpeg",
            "imagenes/cake15/cake10.jpeg",
            "imagenes/cake15/cake11.jpeg",
            "imagenes/cake15/cake12.jpeg"
        ],
        categoria: "clasicos",
        disponible: true
    },
    {
        id: 24,
        nombre: "Cake de un piso para boda o quince",
        descripcion: "Puede variar precio depende del relleno y la decoración",
        medida: "21x12",
        precio: 30,
        moneda: "USD",
        imagen: [
            "imagenes/cakeUnPisoBoda/cakeUnpiso.jpeg",
            "imagenes/cakeUnPisoBoda/cakeUnpiso1.jpeg",
            "imagenes/cakeUnPisoBoda/cakeUnpiso2.jpeg"
        ],
        categoria: "clasicos",
        disponible: true
    },
    {
        id: 25,
        nombre: "Cake de un piso para boda o quince",
        descripcion: "Puede variar precio depende del relleno y la decoración",
        medida: "21x18",
        precio: 60,
        moneda: "USD",
        imagen: [
            "imagenes/cakeUnPisoBodas/cakeUnpiso1.jpeg",
            "imagenes/cakeUnPisoBodas/cakeUnpiso.jpeg"
        ],
        categoria: "clasicos",
        disponible: true
    },
    {
        id: 26,
        nombre: "Cake de niña",
        descripcion: "Cake de niña",
        medida: "21x11",
        precio: 6000,
        moneda: "CUP",
        imagen: [
            "imagenes/cakeUnPisoBodas/cakeUnpiso1.jpeg",
            "imagenes/cakeUnPisoBodas/cakeUnpiso.jpeg"
        ],
        categoria: "clasicos",
        disponible: true
    }
];