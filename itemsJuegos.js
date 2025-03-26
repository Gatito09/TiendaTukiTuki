// Cargar seccion 1 del JSON
fetch("itemsJuegos.json")
.then(response => response.json())
.then(data => {
    const contenedor = document.getElementById("contenedorPacks1");
    const items = data[0]["seccion-1"];

    items.forEach(item => {
        const div = document.createElement("div");

        div.classList.add("packs");

        div.innerHTML = `
            <img src="${item.imagen}">
            <div class="contenido-pack">
                <h5>${item.nombre}</h5>
                <div class="plataforma"><span>Via de Recarga:</span><b> ${item.plataforma}</b></div>
            </div>
            <div class="controles">
                <span class="precio">S/${parseFloat(item.precio).toFixed(2)}</span>
                <button class="btn-wsp"><ion-icon name="logo-whatsapp"></ion-icon><span>Consultar</span></button>
                <button class="btn-detalles">Detalles</button>
            </div>
        `;
        contenedor.appendChild(div);
    });
})
.catch(error => console.error("Error cargando los productos:", error));

// Cargar seccion 2 del JSON
fetch("itemsJuegos.json")
.then(response => response.json())
.then(data => {
    const contenedor = document.getElementById("contenedorPacks2");
    const items = data[0]["seccion-2"];

    items.forEach(item => {
        const div = document.createElement("div");

        div.classList.add("packs");

        div.innerHTML = `
            <img src="${item.imagen}">
            <div class="contenido-pack">
                <h5>${item.nombre}</h5>
                <div class="plataforma"><span>Via de Recarga:</span><b> ${item.plataforma}</b></div>
            </div>
            <div class="controles">
                <span class="precio">S/${parseFloat(item.precio).toFixed(2)}</span>
                <button class="btn-wsp"><ion-icon name="logo-whatsapp"></ion-icon><span>Consultar</span></button>
                <button class="btn-detalles">Detalles</button>
            </div>
        `;
        contenedor.appendChild(div);
    });
})
.catch(error => console.error("Error cargando los productos:", error));