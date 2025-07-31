//-------------------------
// Variables globales
//-------------------------

let cardsSection = ''; // acumulador de HTML

//-------------------------
// Funciones Globales
//-------------------------
function representarCardsProductos() {
    for (var i = 0; i < productos.length; i++) {
        let producto = productos[i];

        categoriaDeProductoLower = producto.categoria.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")

        let cards =
`<section value = "${categoriaDeProductoLower}">
    <img id="foto-producto" src="${producto.foto}" alt="">
    <h3>${producto.nombre}</h3>
        <ul>
            <li>Precio: $${producto.precio}</li>
            <li>Marca: ${producto.marca}</li>
            <li>Envio: ${producto.envio? 'Disponible': 'No disponible'}</li>
            <li>Detalles: ${producto.detalles}</li>
            <li>Categoria: ${producto.categoria}</li>
            <li>Stock: ${producto.stock}</li>
        </ul>
</section>

`
                ;
        
        cardsSection+= cards        
        
    }
    
    document.querySelector('.section-cards-body').innerHTML = cardsSection;

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
            console.warn(cardsNodeList[i].getAttribute('value') + ' FUNCIONA')

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
    console.log('VA FUNCIONANDO')
    let botonMenuPlegable = document.getElementById('img-menu')
    let listaPlegable = document.querySelector(".lista-plegable")
    let botonSalir = document.querySelector(".boton-salir")

    botonMenuPlegable.onclick = () => {
        console.error('va funcionando')

        botonMenuPlegable.style.display = "none"
        listaPlegable.style.display = "block"
        botonSalir.style.display = "block"

    }

    botonSalir.onclick = () => {
        listaPlegable.style.display = ""  
        botonMenuPlegable.style.display = ""
        botonSalir.style.display = ""
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

    representarCardsProductos(); 

    seleccionarCategoria();

    plegarMenuResposive();
}
