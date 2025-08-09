let formularioComentarios = document.getElementById("formulario-comentarios");
let comentariosDiv = document.getElementById("div-comentarios");
let listaComentarios = document.getElementById("lista-comentarios");

let nombreInput = document.getElementById("nombre");
let emailInput = document.getElementById("email");
let mensajeInput = document.getElementById("mensaje");

let comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];

let bottonBorrar = document.getElementById("boton-borrar");



/* -------------------------------------------------------- */
const mostrarComentariosGuardados = () => {
    listaComentarios.innerHTML = ""; 
    comentarios.forEach((comentario, index) => {
        listaComentarios.innerHTML += `
        <li>
            <p><span>NOMBRE:</span> ${comentario.nombre}</p>
            <p><span>EMAIL:</span> ${comentario.email}</p>
            <p><span>COMENTARIO:</span> ${comentario.mensaje}</p>
            <button class="boton-borrar-seleccionado" data-index="${index}">Borrar este comentario</button>
        </li>
        `;
    });

    let botonesBorrar = document.querySelectorAll(".boton-borrar-seleccionado");
    botonesBorrar.forEach(boton => {
        boton.addEventListener("click", (e) => {
            const index = e.target.getAttribute('data-index');
            comentarios.splice(index, 1); 
            localStorage.setItem("comentarios", JSON.stringify(comentarios)); 
            mostrarComentariosGuardados(); 
        });
    });
};
mostrarComentariosGuardados()
const borrarComentarios = () => {
    bottonBorrar.addEventListener("click", () => {
    console.warn("Borrado de comentarios");
    localStorage.removeItem("comentarios");
    comentarios = [];
    listaComentarios.innerHTML = "";
    }
)
}
borrarComentarios()

const guardadoDeComentarios = () => {
    formularioComentarios.addEventListener("submit", (e) => {
        e.preventDefault();
        
        let nuevoComentario = {
            nombre: nombreInput.value,
            email: emailInput.value,
            mensaje: mensajeInput.value
        };
        
        comentarios.push(nuevoComentario);
        localStorage.setItem("comentarios", JSON.stringify(comentarios));
        
        
        listaComentarios.innerHTML += `
        <li>
        <p><span>NOMBRE:</span> ${nuevoComentario.nombre}</p> 
        <p><span>EMAIL:</span> ${nuevoComentario.email}</p> 
        <p><span>COMENTARIO:</span> ${nuevoComentario.mensaje}</p>
        
        <button class="boton-borrar-seleccionado">Borrar este comentario</button>
        </li>
        `;
        
        nombreInput.value = "";
        emailInput.value = ""; 
        mensajeInput.value = "";
        formularioComentarios.reset();
        
        let botonesBorrar = document.querySelectorAll(".boton-borrar-seleccionado");

         botonesBorrar.forEach(boton => {
            boton.addEventListener("click", (e) => {
            console.warn("Comentario borrado");
            e.target.parentElement.remove();
            comentarios.splice(e.target.dataset.index, 1);
            localStorage.setItem("comentarios", JSON.stringify(comentarios));
            console.error(comentarios)
            });
        })
    })
}



const start = () => {
    guardadoDeComentarios(); 
}