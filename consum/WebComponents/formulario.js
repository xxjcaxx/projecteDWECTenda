import { callCrearComentario } from "../view/comentaris_supabase";

export class FormularioComentariosComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<form id="comentariForm">
        <label for="textComentario">Comentario:</label>
        <input type="text" id="textComentario" name="descripcio"><br><br> 
        
        <label for="selectPuntuacio">Estrellas:</label>
        <select id="selectPuntuacio" name="puntuacio">
            <option value="1" selected>1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select><br><br>
        
        <button type="button">Enviar comentario</button>
    </form>`;

    const botonForm = this.querySelector("#comentariForm button");
    botonForm.addEventListener("click", () => {
      const id = this.dataset.id;
      const datos = new FormData(document.querySelector("#comentariForm"));
      callCrearComentario(id,datos);
    });
  }
}

customElements.define("formulario-comentarios", FormularioComentariosComponent);
