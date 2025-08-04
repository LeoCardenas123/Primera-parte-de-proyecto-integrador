//-------------------------
// Variables globales
//-------------------------

let cardsSection = ''; // acumulador de HTML

//-------------------------
// Funciones Globales
//-------------------------

let opciones = document.getElementById('opciones')

//SI SE QUIERE AGREGAR CATEGORIAS, AGREGARLAS COMO HTML EN opciones.innerHTMLH
const crearCategoria = () => {
    
    opciones.innerHTML = 
    `
    <option value="todas">Todas</option>
        <option value="electronica">Electrónica</option>
        <option value="calzado">Calzado</option>
        <option value="accesorios">Accesorios</option>
        <option value="electrodomesticos">Electrodomésticos</option>
    <option value="tecnologia">Tecnologia</option>
    ` 
    console.error(opciones.innerText)
}

const representarCardsProductos = () => {
    
    for(let i=0; i<productosGlobal.length; i++){
        let productoo = productosGlobal[i];

        let categoriaLower = productoo.categoria.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

        let cards = 
        `
        <section value="${categoriaLower}">
            <img src="${productoo.foto}" alt="${productoo.nombre} id="foto-card"></img>
            <h3>${productoo.nombre}</h3>
            <ul>
                <li>Precio: $${productoo.precio}</li>
                <li>Stock: ${productoo.stock}</li>
                <li>${productoo.marca ? 'Envio disponible':'Envio NO disponible'}</li>
                <li>Categoria: ${productoo.categoria}</li>
                <li>${productoo.descripcionCorta}</li>
                <li>${productoo.descripcionLarga}</li>
                <li>Desde ${productoo.edadDesde} ${productoo.edadDesde == 1? 'año': 'años'}</li>
                <li>Hasta ${productoo.edadHasta} ${productoo.edadHasta == 1? 'año': 'años'}</li>
            </ul>
        </section>
        `
        let cardsSection = cards;

        document.querySelector('.section-cards-body').innerHTML += cardsSection;
    } 
}

/* ---------------------------------------------------------------------- */

const seleccionarCategoria = () =>{
    let selector = document.querySelector('select')
    
    selector.onchange = () => {
        console.log('Se ha efectuado un cambio: ' + selector.value)
    
        let cardsNodeList = document.querySelectorAll('section')
        
        cardsNodeList.forEach(card => {
            card.style.backgroundColor = ''});

        for(let i = 0; i<cardsNodeList.length; i++){
            console.warn(selector.value + ' funciona')

            if(cardsNodeList[i].getAttribute('value') === selector.value || selector.value === "todas"){
                cardsNodeList[i].style.display = ""
            }
            else{
                cardsNodeList[i].style.display = "none"
            }
        }
    }
}

/* ----------------------------------------------------------------------- */

const plegarMenuResposive = () => {
    let botonMenuPlegable = document.getElementById('img-menu')
    let listaPlegable = document.querySelector(".lista-plegable")
    let botonSalir = document.querySelector(".boton-salir")

    botonMenuPlegable.onclick = () => {
        console.error('va funcionando')

        botonMenuPlegable.style.display = "none"
        listaPlegable.style.display = "block"
        botonSalir.style.display = "block"
        document.body.style.overflow = 'hidden';


    }

    botonSalir.onclick = () => {
        listaPlegable.style.display = ""  
        botonMenuPlegable.style.display = ""
        botonSalir.style.display = ""
        document.body.style.overflow = '';

    }

    document.addEventListener("click", (e) => {
        if (!listaPlegable.contains(e.target), !botonMenuPlegable.contains(e.target)) { 
            console.log("Click fuera del menú");
            listaPlegable.style.display = ""  
            botonMenuPlegable.style.display = ""
            botonSalir.style.display = ""

        }
});
}



function start() {
    console.warn(document.querySelector('title').textContent)

    
    crearCategoria();

    console.error(opciones.innerText)
    localStorage.setItem("opciones", opciones.innerText);
    
    representarCardsProductos(); 

    seleccionarCategoria();

    plegarMenuResposive();

}