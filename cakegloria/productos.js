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
        descripcion: "Panetela de vainilla rellena de chocolate o todo de vainilla. Decorado con flores de crema y detalles personalizados.",
        medida: "21x12",
        precio: 4500,
        moneda: "CUP",
        imagen: [
            "imagenes/cakeclasico/1776719085.jpg",
            "imagenes/cakeclasico/1776719092.png",
            "imagenes/cakeclasico/1776719098.png",
            "imagenes/cakeclasico/1776719106.jpg"
        ],
        categoria: "clasicos",
        disponible: true
    },
    {
        id: 2,
        nombre: "Cake Bombón",
        descripcion: "Panetela de chocolate triple con relleno de ganache. Cobertura de chocolate semiamargo y virutas.",
        medida: "21x12",
        precio: 5500,
        moneda: "CUP",
        imagen: [
            "imagenes/bombon/1776721487_compressed.png",
            "imagenes/bombon/1776721638_compressed.png",
            "imagenes/bombon/1776722562_compressed.png",
            "imagenes/bombon/1776722572_compressed.png",
            "imagenes/bombon/1776722581_compressed.png",
            "imagenes/bombon/1776722588_compressed.png"
        ],
        categoria: "clasicos",
        disponible: true
    },
    {
        id: 3,
        nombre: "Cake de nata ",
        descripcion: "Panetela de chocolate triple con relleno de ganache. Cobertura de chocolate semiamargo y virutas.",
        medida: "21x12",
        precio: 6000,
        moneda: "CUP",
        imagen: [
            "imagenes/nata/1776738653.png",
            "imagenes/nata/1776738666.png",
            "imagenes/nata/1776738679.png",
            "imagenes/nata/1776738695.png",
            "imagenes/nata/1776738709.png",
            "imagenes/nata/1776738723.png",
        ],
        categoria: "clasicos",
        disponible: true
    },
    {
        id: 4,
        nombre: "Cake muñequito",
        descripcion: "Cake de muñequitos",
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
        nombre: "Cake muñequito de bombón",
        descripcion: "cake de muñequitos de bombón",
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
        nombre: "Cake de santos",
        descripcion: "cake de santos",
        medida: "21x12",
        precio: 5500,
        moneda: "CUP",
        imagen: [
            "imagenes/santos/1776741342.png",
            "imagenes/santos/1776741333.png"
        ],
        categoria: "especiales",
        disponible: true
    },
    {
        id: 7,
        nombre: "Cake de santos de hoja como comestible",
        descripcion: "Cake de santos de hoja como comestible",
        medida: "21x12",
        precio: 6500,
        moneda: "CUP",
        imagen: [
            "imagenes/santos/1776741399.png",
            "imagenes/santos/1776741352.png"
        ],
        categoria: "especiales",
        disponible: true
    },
    {
        id: 8,
        nombre: "Cake de santos de bombon",
        descripcion: "Cake de santos de bombon",
        medida: "21x12",
        precio: 6000,
        moneda: "CUP",
        imagen: [
            "imagenes/santos/1776741382.png",
            "imagenes/santos/1776741443.png"
        ],
        categoria: "especiales",
        disponible: true
    },
    {
        id: 9,
        nombre: "Cake cuadrado",
        descripcion: "Cake cuadrado",
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
        nombre: "Cake doble de alto redondo 22x20",
        descripcion: "Cake cuadrado",
        medida: "26x26",
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
        nombre: "Cake rectangular",
        descripcion: "Cake cuadrado",
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
        nombre: "Cake bombón con confituras",
        descripcion: "Cake bombón con confituras",
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
        nombre: "Cake bombón con confituras y nata",
        descripcion: "Cake bombón con confituras y nata",
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
        nombre: "Cake temáticos",
        descripcion: "Cake temáticos",
        medida: "21x12",
        precio: 6000,
        moneda: "CUP",
        imagen: [
            "imagenes/tematico/1776824070.jpeg",
            "imagenes/tematico/1776824099.jpeg"
        ],
        categoria: "tematicos",
        disponible: true
    },
    {
        id: 15,
        nombre: "Cake temáticos de nata",
        descripcion: "Cake temáticos de nata",
        medida: "21x12",
        precio: 7500,
        moneda: "CUP",
        imagen: [
            "imagenes/tematico/1776824099.jpeg",
            "imagenes/tematico/1776824070.jpeg"
        ],
        categoria: "tematicos",
        disponible: true
    },
    {
        id: 16,
        nombre: "Cake temáticos de hoja comestible",
        descripcion: "Cake temáticos de hoja comestible",
        medida: "21x12",
        precio: 7000,
        moneda: "CUP",
        imagen: [
            "imagenes/tematico/1776824080.jpeg",
            "imagenes/tematico/1776824089.jpeg"
        ],
        categoria: "tematicos",
        disponible: true
    },
    {
        id: 17,
        nombre: "Cake temáticos de bombón",
        descripcion: "Cake temáticos de bombón",
        medida: "21x12",
        precio: 7000,
        moneda: "CUP",
        imagen: [
            "imagenes/tematico/1776824524.jpeg",
            "imagenes/tematico/1776824616.jpeg"
        ],
        categoria: "tematicos",
        disponible: true
    }
];