export { renderProducte, renderProducteEnCategoria };
import { comentarios } from "../dadesTest/dades";
import { renderComentaris } from "./comentaris";

function renderProducte(producte) {
  let divProducte = document.createElement("div");
  let textoDiv = `
  <h1 class="text-center h1">${producte.nom}</h1>
  <img src="${producte.foto} class="img-fluid" alt="${producte.nom}" />
  <div id="divGaleria">Galeria<div>
  <p class="lead">${producte.descripcio}</p>
  <table class="table table-striped table-hover">
    <tr>
      <td>Preu: </td>
      <td>${producte.preu}</td>
    </tr>
    <tr>
      <td>Marca: </td>
      <td>${producte.marca}</td>
    </tr>
    <tr>
      <td>Categoria: </td>
      <td>${producte.categoria}</td>
    </tr>
    <tr>
      <td>Pes: </td>
      <td>${producte.pes}</td>
    </tr>
    <tr>
      <td>Dimensions: </td>
      <td>${producte.dimensions}</td>
    </tr>
  </table>
  <div id="divComentari">Comentaris<div>
   </div>`;

  divProducte.innerHTML = textoDiv;
  let listaComentarios = comentarios.filter(
    (c) => c.idProducto === producte.id
  );
  divProducte.append(renderComentaris(listaComentarios));
  return divProducte;
}

function renderProducteEnCategoria(producte) {
  return `<div class="col-md-4 mb-4">
  <div class="card shadow-sm h-100">
      <!--<img src="https://via.placeholder.com/300x200" class="card-img-top" alt="${producte.nom}">-->
      <div class="card-body">
          <h5 class="card-title">${producte.nom}</h5>
          <p class="card-text text-muted">${producte.descripcio}</p>
          <p class="fw-bold">${producte.preu}€</p>
          <a href="#" class="btn btn-primary w-100">Añadir al carrito</a>
      </div>
  </div>
</div>
`;
}
