export{Login};
import { comprobarLogin } from "./supaservice";
class Login extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
            <br><br>
        <div class="card">
          <h1 class="card-title">Login</h1>
          <form method="post">
            <div class="usuario-login">
                <label for="correo">Correo Electrónico:</label>
                <input type="email" id="correo" name="email" required>
            </div>
            <br><br>
            <div class="password-login">
                <label for="password">Contraseña:</label>
                <input id="login-password" type="password" id="password" name="password" required>
            </div>
            <br><br>
            <button class="login-button" type="submit">Enviar</button>
            </form>
        </div>`;

    const loginButton = this.querySelector(".login-button");
    loginButton.addEventListener("click",  (event) => {
      event.preventDefault();
      const form= this.querySelector("form");
      const formData = new FormData(form);
      const body = JSON.stringify(Object.fromEntries(formData));
      comprobarLogin(body);

    });
  }
  
}
