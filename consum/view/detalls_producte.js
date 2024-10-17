export { renderProducte };
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
