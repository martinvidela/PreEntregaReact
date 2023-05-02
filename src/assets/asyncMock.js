const products = [
  {
    id: 1,
    nombre: "Consola Xbox Series X",
    precio: 499.99,
    descripcion: "La consola de última generación de Microsoft, con capacidad para juegos en 4K y HDR",
    imagen: "https://images.start.com.ar/RRT-00002GPUL1M.jpg",
    stock: 25
  },
  {
    id: 2,
    nombre: "Tarjeta gráfica NVIDIA GeForce RTX 3080",
    precio: 799.99,
    descripcion: "La tarjeta gráfica de alto rendimiento para juegos más potente de NVIDIA",
    imagen: "https://images.start.com.ar/VDO0601.jpg",
    stock: 10
  },
  {
    id: 3,
    nombre: "Monitor de oficina PHILIPS 21.5 LCD FHD",
    precio: 699.99,
    descripcion: "Un monitor de oficina de alta calidad con resolución 2K",
    imagen: "https://images.start.com.ar/221V877.jpg",
    stock: 5
  },
  {
    id: 5,
    nombre: "Logitech WIRELESS M280 BLUE ",
    precio: 18.99,
    descripcion: "Un mouse para oficina de buena calidad con teclas programables",
    imagen: "https://images.start.com.ar/910-004361.jpg",
    stock: 10
  }
];


export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    } ), 500
  })
}