// ============================================
// DATOS DE PRODUCTOS - CakeGloria
// ============================================
// imagen: puede ser "imagenes/cake1.jpg" (una foto)
//         o ["imagenes/cake1.jpg", "imagenes/cake1b.jpg"] (varias fotos)
// ============================================

var WHATSAPP_NUMBER_PRODUCTOS = '+5354022140'; // ← CAMBIAR AL NÚMERO REAL

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
        medida: "12x12",
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
    }
];