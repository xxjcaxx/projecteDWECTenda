import { productes } from "../dadesTest/dades";
export { renderCategoria };

function renderProducte(producte, categoria) {
    console.log(producte)
    if (producte.categoria === categoria){
        return `
            <li class="list-group-item list-group-item-action">${producte.nom}</li>
        `
    }

}

function renderCategoria(categoria) {
  let divCategories = document.createElement("div");
  let textoDiv = `
    <h1 class="text-center h1">${categoria.nom}</h1>
    <p class="lead">${categoria.id}</p>
    <p class="lead">${categoria.descripcio}</p>
    <ul class="list-group">
        ${productes.map(p => renderProducte(p, categoria.nom)).join("")}

    </ul>
  `;

  divCategories.innerHTML = textoDiv;

  return divCategories;
}
