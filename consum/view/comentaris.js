export { renderComentaris };
import { usuaris } from "../dadesTest/dades";
import { FormularioComentariosComponent } from "../../webComponent/formularioComentarios/formulario";

function buscarUsuario(idUsuario) {
  for (const u of usuaris) {
    if (u.id === idUsuario) {
      return u.nom;
    }
  }
}

function renderComentari(comentari) {
  return `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${buscarUsuario(comentari.idUsuario)}</h5>
        <p class="card-text">${comentari.descripcion}</p>
        <div class="btn btn-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-star"
            viewBox="0 0 16 16"
          >
            <path
              d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"
            ></path>
          </svg>
          ${comentari.puntuacion}
        </div>
      </div>
    </div>
  `;
}

function renderComentaris(comentaris) {
  let divComentaris = document.createElement("div");
  const helloComponent = document.createElement('formulario-comentarios');
  divComentaris.innerHTML="Comentarios:"
  
  let textoDiv = ` <formulario-comentarios></formulario-comentarios>
    ${comentaris.map((c) => renderComentari(c)).join("")}
  `;
  divComentaris.innerHTML = "Comentarios:"+ textoDiv;
  return divComentaris;
}
