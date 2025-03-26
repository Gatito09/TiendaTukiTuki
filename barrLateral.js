function mostrarSeccion(id) {
    document.querySelectorAll('.seccion').forEach(div => {
        div.classList.add('subOculto')
    });

    document.getElementById(id).classList.remove('subOculto');
};