export { renderCategories };

function renderCategories(categories) {

    const categoriasContainer = document.createElement('div');

    categories.map((categoria) => {
        const HTMLCategorias =  `<div class="list-group d-inline-block">
        <a href="#/categoria/${categoria.id}" class="p-4 list-group-item list-group-item-action">
        <span class="fs-5 fw-bold">${categoria.nombre}</span><br>
        <span class="text-body-secondary">${categoria.descripcion}</span>
        </a></div>`

        const divCategorias = document.createElement('div');
        divCategorias.innerHTML = HTMLCategorias;

        categoriasContainer.append(divCategorias.firstElementChild);

    });

    return categoriasContainer;
}