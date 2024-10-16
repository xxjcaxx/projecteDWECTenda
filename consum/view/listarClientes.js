export { renderClientes };

function renderClientes(clientes) {
    const clientesContainer = document.createElement('div');
    clientes.forEach((c) => {
        const HTMLCLientes = `<div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${c.nom}</h5>
        <p class="card-text">${c.correuElectronic}</p>
        <p class="card-text">${c.telefon}</p>
        
        </div>
        </div>`
        const divClientes = document.createElement('div');
        divClientes.innerHTML = HTMLCLientes;

        clientesContainer.append(divClientes.firstElementChild);

    });

    return clientesContainer;
}