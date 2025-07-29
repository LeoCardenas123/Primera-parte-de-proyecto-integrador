/* var productoNombre = document.getElementById('nombre'), 
    productoPrecio = document.getElementById('precio'),
    productoStock = document.getElementById('stock'),
    productoMarca = document.getElementById('marca'),
    productoCategoria = document.getElementById('categoria'),
    productoDetalles = document.getElementById('detalles'),
    productoEnvio = document.getElementById('envio')



const funcionAgregar = () => {
  let botonAgregar = document.querySelector('button')

  botonAgregar.onclick = (event) => {
    event.preventDefault()

    var productoAAgregar =
      {
        nombre: productoNombre.value,
        precio: productoPrecio.value,
        stock: productoStock.value, 
        marca: productoMarca.value,
        categoria: productoCategoria.value,
        detalles: productoDetalles.value,
        envio: productoEnvio.value
      }   

    console.error(productoAAgregar)
    productos.push(productoAAgregar)
    console.warn(productos)
  }
}
window.onload = funcionAgregar;

 */

var productos  = [
  {
    nombre: "Auriculares Inalámbricos",
    precio: 15999,
    stock: 30,
    marca: "Sony",
    categoria: "Electrónica",
    detalles: "Ninguno",
    foto: "https://noblex.com.ar/media/catalog/product/cache/c8f6a96bef9e9f64cd4973587df2520f/h/p/hp350bt_iafbso0001.jpg",
    envio: true
  },
  {
    nombre: "Auriculares Inalámbricos",
    precio: 15999,
    stock: 30,
    marca: "Sony",
    categoria: "Electrónica",
    detalles: "Ninguno",
    foto: "https://noblex.com.ar/media/catalog/product/cache/c8f6a96bef9e9f64cd4973587df2520f/h/p/hp350bt_iafbso0001.jpg",
    envio: true
  },
  {
    nombre: "Auriculares Inalámbricos",
    precio: 15999,
    stock: 30,
    marca: "Sony",
    categoria: "Electrónica",
    detalles: "Ninguno",
    foto: "https://noblex.com.ar/media/catalog/product/cache/c8f6a96bef9e9f64cd4973587df2520f/h/p/hp350bt_iafbso0001.jpg",
    envio: true
  },
  {
    nombre: "Auriculares Inalámbricos",
    precio: 15999,
    stock: 30,
    marca: "Sony",
    categoria: "Electrónica",
    detalles: "Ninguno",
    foto: "https://noblex.com.ar/media/catalog/product/cache/c8f6a96bef9e9f64cd4973587df2520f/h/p/hp350bt_iafbso0001.jpg",
    envio: true
  },
  {
    nombre: "Zapatillas Running",
    precio: 34999,
    stock: 15,
    marca: "Nike",
    categoria: "Calzado",
    detalles: "Ninguno",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS89X14WsXKVULj9QXkUXRiZpHTJCeG17hjRQ&s",
    envio: false
  },
  {
    nombre: "Cafetera Espresso",
    precio: 45999,
    stock: 8,
    marca: "Philips",
    categoria: "Electrodomésticos",
    detalles: "Ninguno",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcuiIWsI9kxrrypMnVORBnXowuny6FA8OXYw&s",
    envio: true
  },
  {
    nombre: "Mochila Urbana",
    precio: 9999,
    stock: 20,
    marca: "Reebok",
    categoria: "Accesorios",
    detalles: "Ninguno",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr4ArjEQIn79F7vVKBCT5K0azRP7kR2CJV7A&s",
    envio: false
  },
  {
    nombre: "Mochila Urbana",
    precio: 9999,
    stock: 20,
    marca: "Reebok",
    categoria: "Accesorios",
    detalles: "Ninguno",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr4ArjEQIn79F7vVKBCT5K0azRP7kR2CJV7A&s",
    envio: false
  },
  {
    nombre: "Mochila Urbana",
    precio: 9999,
    stock: 20,
    marca: "Reebok",
    categoria: "Accesorios",
    detalles: "Ninguno",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr4ArjEQIn79F7vVKBCT5K0azRP7kR2CJV7A&s",
    envio: false
  },
  {
    nombre: "Mochila Urbana",
    precio: 9999,
    stock: 20,
    marca: "Reebok",
    categoria: "Accesorios",
    detalles: "Ninguno",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr4ArjEQIn79F7vVKBCT5K0azRP7kR2CJV7A&s",
    envio: false
  },
  {
    nombre: "Mochila Urbana",
    precio: 9999,
    stock: 20,
    marca: "Reebok",
    categoria: "Accesorios",
    detalles: "Ninguno",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr4ArjEQIn79F7vVKBCT5K0azRP7kR2CJV7A&s",
    envio: false
  },
  {
    nombre: "Smartwatch Deportivo",
    precio: 22999,
    stock: 12,
    marca: "Xiaomi",
    categoria: "Tecnología",
    detalles: "Ninguno",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp5fX30AV6WQj39ILSwX6KnSxmTZq3mS2pPw&s",
    envio: true
  }
];


