export{Login};
class Login extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
            <br><br>
        <div class="card">
          <h1 class="card-title">Login</h1>
          <form>
            <div class="usuario-login">
                <label  for="name">Nombre:</label>
                <input id="login-nombre" type="text" id="name" name="name" required>
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
    loginButton.addEventListener("click", (event) => {
      event.preventDefault();
    });
  }
}
