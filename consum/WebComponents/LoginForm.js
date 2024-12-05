import { enviarLogin } from "../supaservice.js";
export class LoginFormComponent extends HTMLElement {
  constructor() {
    super();
  }

  esAtributValid(atributo, regex) {
    return regex.test(atributo);
  }

  connectedCallback() {
    this.innerHTML = `<div class="container mt-5">
            <div id="errores"></div>
            <form id="loginForm" method="POST">
                
                <div class="mb-3">
                <label for="correu" class="form-label">Correu electrònic</label>
                <input type="email" class="form-control" id="correu" name="correu" placeholder="Correu electrònic" required>
                </div>

               
                <div class="mb-3">
                <label for="contrasenya" class="form-label">Contrasenya</label>
                <input type="password" class="form-control" id="contrasenya" name="contrasenya" placeholder="Contrasenya" required>
                </div>

               
                <div class="text-center">
                <button id="botoEnviar" type="submit" class="btn btn-primary">Login</button>
                </div>
            </form>
        </div>`;

    
    const botonForm = this.querySelector("#loginForm button");
    const form = this.querySelector("#loginForm");

    botonForm.addEventListener("click", async (event) => {
      event.preventDefault()

      const id = this.dataset.id;
      const datos = new FormData(form);

      const correuRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      //Enviar el login
      
      if (this.esAtributValid(datos.get('correu'), correuRegex)) {
        const divErrores = this.querySelector("#errores");
       // console.log("enviando login...");
        try {
          let response = await enviarLogin(datos.get('correu'), datos.get('contrasenya'));
          //console.log(response);

          localStorage.setItem("access_token", response.access_token);
          localStorage.setItem("refresh_token", response.refresh_token);
          localStorage.setItem("user", JSON.stringify(response.user));


          /* Para luego acceder a los datos:
            const accessToken = localStorage.getItem("access_token");
            const refreshToken = localStorage.getItem("refresh_token");
            const user = JSON.parse(localStorage.getItem("user"));
          */

          divErrores.innerHTML = `<p class="text-success">Login correcto</p>`;
        } catch (error) {
          divErrores.innerHTML = `<p class="text-danger">Login error: ${error}</p>`;
        }
      }
    });
  }
}

customElements.define("login-form", LoginFormComponent);
