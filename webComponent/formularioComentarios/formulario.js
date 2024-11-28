export {FormularioComentariosComponent}
import { callCrearComentario } from "../../consum/view/comentaris_supabase";


class FormularioComentariosComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = ` <form id="exampleForm">
        <label for="textInput">Texto:</label>
        <input type="text" id="textInput" value="Texto inicial"><br><br>
        
        <label>Opciones:</label>
        <input type="radio" name="options" value="opcion1" checked> Opción 1
        <input type="radio" name="options" value="opcion2"> Opción 2<br><br>
        
        <label for="checkboxInput">Casilla:</label>
        <input type="checkbox" id="checkboxInput" checked><br><br>
        
        <label for="selectInput">Selecciona:</label>
        <select id="selectInput">
            <option value="1">Opción 1</option>
            <option value="2" selected>Opción 2</option>
            <option value="3">Opción 3</option>
        </select><br><br>
        
        <button type="button" onclick="callCrearComentario()">Enviar comentario</button>
    </form>`;
  }
}

customElements.define("formulario-comentarios", FormularioComentariosComponent);

let event = new CustomEvent