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

        // --- VALIDACIONES ---
        const nombre = nombreInput.value.trim();
        const email = emailInput.value.trim();
        const mensaje = mensajeInput.value.trim();

        let errores = [];

        if (nombre === "") {
            errores.push("El nombre es obligatorio.");
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            errores.push("El email es obligatorio.");
        } else if (!emailRegex.test(email)) {
            errores.push("El email no tiene un formato válido.");
        }

        if (mensaje === "") {
            errores.push("El comentario no puede estar vacío.");
        } else if (mensaje.length < 5) {
            errores.push("El comentario debe tener al menos 5 caracteres.");
        }

        // Mostrar errores si hay
        if (errores.length > 0) {
            alert(errores.join("\n"));
            return; // no sigue con el guardado
        }

        // --- GUARDAR COMENTARIO ---
        let nuevoComentario = {
            nombre: encodeURIComponent(nombre),
            email: encodeURIComponent(email),
            mensaje: encodeURIComponent(mensaje)
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

        formularioComentarios.reset();

        // --- BOTONES BORRAR ---
        let botonesBorrar = document.querySelectorAll(".boton-borrar-seleccionado");
        botonesBorrar.forEach((boton, index) => {
            boton.addEventListener("click", (e) => {
                console.warn("Comentario borrado");
                e.target.parentElement.remove();
                comentarios.splice(index, 1);
                localStorage.setItem("comentarios", JSON.stringify(comentarios));
            });
        });
    });

}



const start = () => {
    guardadoDeComentarios(); 
}