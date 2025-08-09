//-------------------------
// Variables globales
//-------------------------

//-------------------------
// Funciones Globales
//-------------------------
// Al cargar la página, recuperar los datos
    /* window.addEventListener('DOMContentLoaded'), () => {
        let productos = JSON.parse(localStorage.getItem('productos')) || [];}
 */

let opcionesAlta = localStorage.getItem("opciones")

const agregarCategoriaAFormulario = () => {
    let lineas = opcionesAlta.split('\n');
    
    console.error(lineas)

    let seleccionarCategoria = document.querySelector('#categoria');

    for(let i=1; i<lineas.length; i++){
        console.log(lineas[i])
        seleccionarCategoria.innerHTML += `<option value="${lineas[i]}">${lineas[i]}</option>`;
    }
}

function mostrarMensajeError(msj){
    console.error(msj)
}
function validarInputs(valor){
    let mensaje = 'el minimod de caracteres es 3'
    const longitud = valor.length

    if(longitud < 3){
        mostrarMensajeError(mensaje)
        return false
    } else {
        return valor
    }
}
validarInputs(refNombre.value)

function agregar(e){
    e.preventDefault()

    console.log('agregar()')

    const refNombre = document.querySelector('#nombre')
    const refPrecio = document.querySelector('#precio')
    const refStock = document.querySelector('#stock')
    const refMarca = document.querySelector('#marca')
    const refCategoria = document.querySelector('#categoria')
    const refDescripcionCorta = document.querySelector('#descripcioncorta')
    const refDescripcionLarga = document.querySelector('#descripcionlarga')
    const refEdadDesde = document.querySelector('#edaddesde')
    const refEdadHasta = document.querySelector('#edadhasta')
    const refFoto = document.querySelector('#foto')
    const refEnvio = document.querySelector('#envio')

    const nombre = refNombre.value 
    const precio = refPrecio.value 
    const stock = refStock.value 
    const marca = refMarca.value 
    const categoria = refCategoria.value 
    const descripcionCorta = refDescripcionCorta.value
    const descripcionLarga = refDescripcionLarga.value
    const edadDesde = refEdadDesde.value
    const edadHasta = refEdadHasta.value        
    const foto = refFoto.value 
    const envio = refEnvio.checked
    
    const producto = {
        nombre: nombre,   
        precio: +precio,
        stock: parseInt(stock),
        marca: marca,
        categoria: categoria, 
        descripcionCorta: descripcionCorta,
        descripcionLarga: descripcionLarga,
        edadDesde: edadDesde,
        edadHasta: edadHasta,
        foto: foto,
        envio: envio 
    }
    console.error(producto)

    refNombre.value = ''
    refPrecio.value =''
    refStock.value =''
    refMarca.value =''
    refCategoria.value =''
    refDescripcionCorta.value =''
    refDescripcionLarga.value =''
    refEdadDesde.value = ''
    refEdadHasta.value = ''
    refFoto.value =''
    refEnvio.checked = false

    productos.push(producto)
    localStorage.setItem('productos', JSON.stringify(productos))

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
            <th>Descripción corta</th>
            <th>Descripción larga</th>
            <th>foto</th>
            <th>Edad desde</th>
            <th>Edad Hasta</th>
            <th>envio</th>
        </tr>
        `


        for(let i=0; i<productos.length; i++){
            filasTabla +=
        `
        <tr>
            <td>${productos[i].nombre}</td>
            <td>${productos[i].precio}</td>
            <td>${productos[i].stock}</td>
            <td>${productos[i].marca}</td>
            <td>${productos[i].categoria}</td>
            <td>${productos[i].descripcionCorta}</td>
            <td>${productos[i].descripcionLarga}</td>
            <td><img src="${productos[i].foto}" alt="${productos.nombre}" class="imagenes-tabla"></td>
            <td>${productos[i].edadDesde}</td>
            <td>${productos[i].edadHasta}</td>
            <td>${productos[i].envio}</td>
        </tr>
        `
        }
        

        document.querySelector('table').innerHTML = filasTabla
}

let productos = [];

window.addEventListener('DOMContentLoaded', () => {
    const guardados = localStorage.getItem('productos');
    if (guardados) {
        productos = JSON.parse(guardados);
    }
});


function start() {
    console.warn(document.querySelector('title').textContent)
    agregarCategoriaAFormulario()
    representarTablaProductos()
}