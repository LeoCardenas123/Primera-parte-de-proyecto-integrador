//-------------------------
// Variables globales
//-------------------------
let formularioAlta = document.querySelector('.alta-form');
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

/* ---------------------- */

function mensajeError(msj){
    console.error(msj)
}

function validarTexto(texto, campo, min=3, max=40) {
    if (!texto || texto.trim().length < min) {
        mensajeError(`El campo ${campo} debe tener al menos ${min} caracteres`);
        return false;
    }
    if (texto.length > max) {
        mensajeError(`El campo ${campo} no debe exceder los ${max} caracteres`);
        return false;
    }else{
        return true;
    }
}

function validarNumero(valor, campo) {
    const numero = Number(valor);
    if (isNaN(numero) || numero < 0) {
        mensajeError(`El campo ${campo} debe ser un número positivo`);
        return false;
    }else{
        return true;
    }
}

function validarEntero(valor, campo) {
    const numero = parseInt(valor);
    if (isNaN(numero) || numero < 0 || !Number.isInteger(numero)) {
        mensajeError(`El campo ${campo} debe ser un número entero positivo`);
        return false;
    }else{
        return true;
    }
}

function validarSeleccion(valor, campo) {
    if (!valor) {
        mensajeError(`Debes seleccionar una opción para ${campo}`);
        return false;
    }
    else{
        return true;
    }
}

function agregar(e){
    e.preventDefault();

    const refNombre = document.querySelector('#nombre').encodeUriComponent();
    const refPrecio = document.querySelector('#precio');
    const refStock = document.querySelector('#stock');
    const refMarca = document.querySelector('#marca').encodeUriComponent();
    const refCategoria = document.querySelector('#categoria');
    const refDescripcionCorta = document.querySelector('#descripcioncorta').encodeUriComponent();
    const refDescripcionLarga = document.querySelector('#descripcionlarga').encodeUriComponent();
    const refEdadDesde = document.querySelector('#edaddesde');
    const refEdadHasta = document.querySelector('#edadhasta');
    const refFoto = document.querySelector('#foto');
    const refEnvio = document.querySelector('#envio');

    // Validaciones
    if (!validarTexto(refNombre.value, "Nombre")) return;
    if (!validarNumero(refPrecio.value, "Precio")) return;
    if (!validarEntero(refStock.value, "Stock")) return;
    if (!validarTexto(refMarca.value, "Marca")) return;
    if (!validarSeleccion(refCategoria.value, "Categoría")) return;
    if (!validarTexto(refDescripcionCorta.value, "Descripción Corta", 5, 100)) return;
    if (!validarTexto(refDescripcionLarga.value, "Descripción Larga", 10, 500)) return;

    
    if (refEdadDesde.value && refEdadHasta.value) {
        const desde = parseInt(refEdadDesde.value);
        const hasta = parseInt(refEdadHasta.value);
        if (isNaN(desde) || isNaN(hasta) || desde < 0 || hasta < 0 || desde > hasta) {
            mensajeError('La edad "Desde" debe ser menor o igual a la edad "Hasta" y ambas positivas');
            return;
        }
    }

    
    if (refFoto.value && !refFoto.value.startsWith('http')) {
        mensajeError('La URL de la foto debe comenzar con "http"');
        return;
    }

    
    const producto = {
        nombre: refNombre.value.trim(),
        precio: +refPrecio.value,
        stock: parseInt(refStock.value),
        marca: refMarca.value.trim(),
        categoria: refCategoria.value,
        descripcionCorta: refDescripcionCorta.value.trim(),
        descripcionLarga: refDescripcionLarga.value.trim(),
        edadDesde: refEdadDesde.value,
        edadHasta: refEdadHasta.value,
        foto: refFoto.value.trim(),
        envio: refEnvio.checked
    };


/* function mensajeError(msj){
    console.error(msj)
}
function validarInputs(valor){
    if(valor < 3){
        mensajeError('El campo no puede tener menos de 3 carcteres')
        return false
    }
    else{
        return valor
    }
}


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
    } */
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