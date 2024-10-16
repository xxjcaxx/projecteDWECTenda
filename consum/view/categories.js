export { renderCategories };

function renderCategories(categories) {
    return categories.map((categoria) => {
        return `<div class="list-group d-inline-block">
        <a class="p-4 list-group-item list-group-item-action">
        <span class="fs-5 fw-bold">${categoria.nom}</span><br>
        <span class="text-body-secondary">${categoria.descripcio}</span>
        </a></div>`
    }).join(" ")
}