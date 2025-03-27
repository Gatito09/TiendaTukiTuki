// Funcion generar link wa.me
function waLinkGenerar(mensaje) {
    let numPais = "51"
    let numero = "999999999"
    let mensajeCodificado = encodeURIComponent('Hola, quisiera saber la disponibilidad del producto: ' + mensaje);

    return `https://wa.me/${numPais}${numero}?text=${mensajeCodificado}`
}

// Funcion cargar planes del JSON
function cargarProductos(seccion, contenedorId) {
    fetch("itemsJuegos.json")
    .then(response => response.json())
    .then(data => {
        const contenedor = document.getElementById(contenedorId);
        const items = data[0][seccion];

        items.forEach(item => {
            const div = document.createElement("div");
            
            div.classList.add("packs");

            div.innerHTML = `
                <img src="${item.imagen}">
                <div class="contenido-pack">
                    <h5>${item.nombre}</h5>
                    <div class="plataforma"><span>Vía de Recarga:</span><b> ${item.plataforma}</b></div>
                </div>
                <div class="controles">
                    <span class="precio">S/${parseFloat(item.precio).toFixed(2)}</span>
                    <a target="_blank" href="${waLinkGenerar(item.nombre)}" class="btn-wsp"><ion-icon name="logo-whatsapp"></ion-icon><span>Consultar</span></a>
                    <a class="btn-detalles">Detalles</a>
                </div>
            `;
            contenedor.appendChild(div);
        });
    })
}

// Funcion cargar las Secciones de productos
cargarProductos("seccion-1", "contenedorPacks1");
cargarProductos("seccion-2", "contenedorPacks2");

// Cargar los planes del JSON
function cargarPlanes(seccion, contenedorId) {
    fetch("itemsJuegos.json")
    .then(response => response.json())
    .then(data => {
        const contenedor = document.getElementById(contenedorId);
        const planes = data[0][seccion];

        let numeroPlan = 1;

        planes.forEach(item => {
            const div = document.createElement("div");
            
            div.classList.add("item");
            div.classList.add("plan" + numeroPlan);

            if (planes.length == 1) {
                widthBtn = 98
            } else {
                widthBtn = 80
            }

            if (numeroPlan > 1) {
                textoMeses = 'Meses'
            } else {
                textoMeses = 'Mes'
            }

            div.innerHTML = `
                <span>${numeroPlan} ${textoMeses}</span>
                <span>S/${parseFloat(item.precio).toFixed(2)}</span>
                <a style="width: ${widthBtn}%;">Consultar</a>
            `;

            contenedor.appendChild(div);
            numeroPlan++;
            console.log("Se genero el numero de plan:" + numeroPlan)
        });
    })
}

// Cargar los Fortnite Crew
cargarPlanes("CrewPlanesNuevos", "contenedorPlanesNuevas");
cargarPlanes("CrewPlanesAntiguos", "contenedorPlanesAntiguas");
cargarPlanes("CrewPlanesEpic", "contenedorPlanesEpic");

// Funcion cargar los items Regalos
function cargarRegalos(seccion, contenedorId) {
    fetch("itemsJuegos.json")
    .then(response => response.json())
    .then(data => {
        const contenedor = document.getElementById(contenedorId);
        const items = data[0][seccion];

        items.forEach(item => {
            const div = document.createElement("div");
            
            div.classList.add("regalosItems");

            if (item.type == "gift") {
                urlImage = 'https://static1.srcdn.com/wordpress/wp-content/uploads/2020/03/Fortnite-Gifts.jpg';
            } else {
                urlImage = item.imagen
            }

            div.innerHTML = `
                <h4>${item.nombre}</h4>
                <img src="${urlImage}"></img>
                <span class="precio">S/${parseFloat(item.precio).toFixed(2)}</span>
                <a>Consultar</a>
            `;
            contenedor.appendChild(div);
        });
    })
}

// Cargar Regalos
cargarRegalos("Regalos", "contenedorRegalos")