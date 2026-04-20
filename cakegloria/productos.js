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
            "imagenes/17767179834ddb(1).png",
            "imagenes/17767179834ddb(2).png",
            "imagenes/17767179834ddb(3).png",
            "imagenes/17767179834ddb(4).png"
        ],
        categoria: "clasicos",
        disponible: true
    },
    {
        id: 2,
        nombre: "Cake Chocolate Intenso",
        descripcion: "Panetela de chocolate triple con relleno de ganache. Cobertura de chocolate semiamargo y virutas.",
        medida: "18x10",
        precio: 3800,
        moneda: "CUP",
        imagen: [
            "imagenes/cake2.jpg",
            "imagenes/cake2b.jpg"
        ],
        categoria: "clasicos",
        disponible: false
    },
    {
        id: 3,
        nombre: "Cake Corazón Rosa",
        descripcion: "Panetela de vainilla con relleno de dulce de leche. Forma de corazón, ideal para San Valentín o aniversarios.",
        medida: "20x15",
        precio: 5000,
        moneda: "CUP",
        imagen: "imagenes/cake3.jpg",
        categoria: "tematicos",
        disponible: true
    },
    {
        id: 4,
        nombre: "Cake Infantil Personalizado",
        descripcion: "Panetela de vainilla o chocolate con decoración temática infantil. Consultar personajes y diseños disponibles.",
        medida: "22x14",
        precio: 5500,
        moneda: "CUP",
        imagen: [
            "imagenes/cake4.jpg",
            "imagenes/cake4b.jpg",
            "imagenes/cake4c.jpg",
            "imagenes/cake4d.jpg"
        ],
        categoria: "tematicos",
        disponible: true
    },
    {
        id: 5,
        nombre: "Mini Cake Personal",
        descripcion: "Mini cake individual de vainilla o chocolate con decoración sencilla. Perfecto para obsequios o detalles.",
        medida: "8x8",
        precio: 800,
        moneda: "CUP",
        imagen: "imagenes/cake5.jpg",
        categoria: "mini",
        disponible: true
    },
    {
        id: 6,
        nombre: "Mini Cake Vainilla",
        descripcion: "Mini cake de vainilla con cobertura de crema y decoración con frutos rojos. Porción individual elegante.",
        medida: "10x10",
        precio: 950,
        moneda: "CUP",
        imagen: [
            "imagenes/cake6.jpg",
            "imagenes/cake6b.jpg"
        ],
        categoria: "mini",
        disponible: true
    },
    {
        id: 7,
        nombre: "Cake Bodas Elegante",
        descripcion: "Panetela de dos o tres pisos, sabores a elegir. Decoración elegante con flores de crema o fondant. Cotizar según diseño.",
        medida: "Personalizado",
        precio: 12000,
        moneda: "CUP",
        imagen: [
            "imagenes/cake7.jpg",
            "imagenes/cake7b.jpg",
            "imagenes/cake7c.jpg"
        ],
        categoria: "especiales",
        disponible: true
    },
    {
        id: 8,
        nombre: "Cake Doble Piso Festivo",
        descripcion: "Dos pisos de sabores combinados. Decoración festiva con colores a elegir. Ideal para cumpleaños de 15 o eventos.",
        medida: "Personalizado",
        precio: 8500,
        moneda: "CUP",
        imagen: "imagenes/cake8.jpg",
        categoria: "especiales",
        disponible: false
    }
];