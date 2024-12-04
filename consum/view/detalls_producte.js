export { renderProducte, renderProducteEnCategoria };
import { comentarios } from "../dadesTest/dades";
import { getDatos } from "../supaservice";
import { renderComentaris } from "./comentaris";
import { getListaImagenesUrl } from "./imagenes";

async function renderProducte(producte) {
  let divProducte = document.createElement("div");
  divProducte.classList.add("container");
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
  `;

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
function renderProducteEnCategoria(producte) {
  return `<div class="col-md-4 mb-4">
  <div class="card shadow-sm h-100">
      <!--<img src="https://via.placeholder.com/300x200" class="card-img-top" alt="${producte.nom}">-->
      <div class="card-body">
          <h5 class="card-title">${producte.nom}</h5>
          <p class="card-text text-muted">${producte.descripcio}</p>
          <p class="fw-bold">${producte.preu}€</p>
          <a href="#" class="btn btn-primary">Añadir al carrito</a>
          <a href="#/producto/${producte.id}" class="btn btn-primary">Ver</a>
      </div>
  </div>
</div>
`;
}
function createGaleriaImagenes(datosImagenes) {
  // console.log(datosImagenes);

  let divGaleria = document.createElement("div");
  divGaleria.classList.add("carousel", "slide");
  divGaleria.id = "carouselExample";

  divGaleria.innerHTML = ` <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon btn btn-secondary" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon btn btn-secondary" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
`;

  let carousel_inner = document.createElement("div");
  carousel_inner.classList.add("carousel-inner");

  //width 
  divGaleria.style.maxWidth = "25%";
  divGaleria.style.maxHeight = "25%";
  divGaleria.style.marginLeft = "30%";

  for (let index = 0; index < datosImagenes.length; index++) {
    let div = document.createElement("div");
    div.classList.add("carousel-item");

    if (index == 0) div.classList.add("active");

    let img = document.createElement("img");
    //Limitar las imagenes al div carousel_inner
    img.classList.add("d-block");
    img.style.maxHeight = "300px";
    img.style.minHeight = "300px";

    img.src = datosImagenes[index];
    img.alt = "Algo no va bien al cargar la imagen";

    div.append(img);
    carousel_inner.append(div);
  }

  divGaleria.append(carousel_inner);

  return divGaleria;
}