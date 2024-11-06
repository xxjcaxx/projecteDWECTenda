export { renderProducte };
import { comentarios } from "../dadesTest/dades";
import { getDatos } from "../supaservice";
import { renderComentaris } from "./comentaris";
import { getListaImagenesUrl } from "./imagenes";

async function renderProducte(producte) {
  let divProducte = document.createElement("div");
  let textoDiv = `
  <h1 class="text-center h1">${producte.nom}</h1>
  <img src="${producte.foto} class="img-fluid" alt="${producte.nom}" />
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

  let datosImagenes = await getDatos(
    "imatges",
    "*",
    `producteId=eq.${producte.id}`
  );


  let galeria = createGaleriaImagenes(await getListaImagenesUrl(datosImagenes));

  divProducte.append(galeria);
  divProducte.append(renderComentaris(listaComentarios));
  return divProducte;
}

function createGaleriaImagenes(datosImagenes) {
  console.log(datosImagenes);

  let divGaleria = document.createElement("div");
  divGaleria.classList.add("carousel", "slide");
  divGaleria.id="carouselExampleControls";

  divGaleria.innerHTML = `<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>

  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>`;

  let carousel_inner = document.createElement("div");
  carousel_inner.classList.add("carousel-inner");

  console.log(datosImagenes);
  

  for (let index = 0; index < datosImagenes.length; index++) {
    let div = document.createElement("div");
    div.classList.add("carousel-item");

    if (index == 0) div.classList.add("active");

    let img = document.createElement("img");
    img.classList.add("d-block", "w-100");
    img.src = datosImagenes[index];
    img.alt = "Algo no va bien al cargar la imagen";

    div.append(img);
    carousel_inner.append(div);
  }

  divGaleria.append(carousel_inner);

  return divGaleria;
}
