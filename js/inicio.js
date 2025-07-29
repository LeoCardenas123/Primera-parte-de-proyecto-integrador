//-------------------------
// Variables globales
//-------------------------

//-------------------------
// Funciones Globales
//-------------------------
function representarCardsProductos() {
    let cards = ''; // acumulador de HTML
    
    for (var i = 0; i < productos.length; i++) {
        let producto = productos[i];
        
        cards+=`<section>
                    <h3>${producto.nombre}</h3>
                    <img id="foto-producto" src="${producto.foto}" alt="">
                    <ul>
                        <li>Precio: $${producto.precio}</li>
                        <li>Stock: ${producto.stock}</li>
                        <li>Marca: ${producto.marca}</li>
                        <li>Categoria: ${producto.categoria}</li>
                        <li>Detalles: ${producto.detalles}</li>
                        <li>Envio: ${producto.envio? 'Disponible': 'No disponible'}</li>
                    </ul>
                </section>`;
    }
    
    document.querySelector('.section-cards-body').innerHTML = cards;
    
}

function start() {
    console.warn(document.querySelector('title').textContent)

    representarCardsProductos(); 
}
