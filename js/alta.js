//-------------------------
// Variables globales
//-------------------------

//-------------------------
// Funciones Globales
//-------------------------
function agregar(e){
    e.preventDefault()

    console.log('agregar()')

    const refNombre = document.querySelector('#nombre')
    const refPrecio = document.querySelector('#precio')
    const refStock = document.querySelector('#stock')
    const refMarca = document.querySelector('#marca')
    const refCategoria = document.querySelector('#categoria')
    const refDetalles = document.querySelector('#detalles')
    const refFoto = document.querySelector('#foto')
    const refEnvio = document.querySelector('#envio')

    const nombre = refNombre.value 
    const precio = refPrecio.value 
    const stock = refStock.value 
    const marca = refMarca.value 
    const categoria = refCategoria.value 
    const detalles = refDetalles.value 
    const foto = refFoto.value 
    const envio = refEnvio.checked
    
    const producto = {
        nombre: nombre,   
        precio: +precio,
        stock: parseInt(stock),
        marca: marca,
        categoria: categoria, 
        detalles: detalles,
        foto: foto,
        envio: envio 
    }
    console.log(producto)

    refNombre.value = ''
    refPrecio.value =''
    refStock.value =''
    refMarca.value =''
    refCategoria.value =''
    refDetalles.value =''
    refFoto.value =''
    refEnvio.checked = false

    productos.push(producto)

    representarTablaProductos()
}

function representarTablaProductos(){
    let filasTabla = ''
    
    filasTabla += 
        `
        <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>stock</th>
            <th>marca</th>
            <th>categoria</th>
            <th>detalles</th>
            <th>foto</th>
            <th>envio</th>
        </tr>
        `
    
        for(let producto of productos){
            filasTabla += 
                `
                <tr>
                    <td>${producto.nombre}</td>
                    <td>$${producto.precio}</td>
                    <td>${producto.stock}</td>
                    <td>${producto.marca}</td>
                    <td>${producto.categoria}</td>
                    <td>${producto.detalles}</td>
                    <td><img src="${producto.foto}" alt="foto de ${producto.nombre}" class="imagenes-tabla"></td>
                    <td>${producto.envio? 'si': 'no'}</td>
                </tr>
                `
        }
        document.querySelector('table').innerHTML = filasTabla
}

function start() {
    console.warn(document.querySelector('title').textContent)
    representarTablaProductos()
}
