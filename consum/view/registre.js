import { enviarRegistre } from "../supaservice.js";
export class FormRegistro extends HTMLElement {
    constructor() {
      super();
    }

    esAtributValid(atributo, regex) {
        return regex.test(atributo);
    }
  
    connectedCallback() {
      this.innerHTML = `
        <div class="container mt-5">
            <div id="mensatge"></div>
            <h2 id="registreForm" class="text-center mb-4">Formulari de Registre</h2>
            <form id="registreForm" method="POST">
                <!-- Correu electrònic -->
                <div class="mb-3">
                <label for="correu" class="form-label">Correu electrònic</label>
                <input type="email" class="form-control" id="correu" name="correu" placeholder="Correu electrònic" required>
                <div id="correuError" class="text-danger mt-2" style="display: none;"></div> <!-- Error de correu -->
                </div>

                <!-- Contrasenya -->
                <div class="mb-3">
                <label for="contrasenya" class="form-label">Contrasenya</label>
                <input type="password" class="form-control" id="contrasenya" name="contrasenya" placeholder="Contrasenya" required>
                <div id="contrasenyaError" class="text-danger mt-2" style="display: none;"></div> <!-- Error contrasenya -->
                </div>

                <!-- Confirmar contrasenya -->
                <div class="mb-3">
                <label for="confContrasenya" class="form-label">Confirmar contrasenya</label>
                <input type="password" class="form-control" id="confContrasenya" name="confContrasenya" placeholder="Repeteix contrasenya" required>
                <div id="confContrasenyaError" class="text-danger mt-2" style="display: none;"></div> <!-- Error confirmar contrasenya -->
                </div>

                <!-- Botó d'Enviar -->
                <div class="text-center">
                <button id="botoEnviar" type="submit" class="btn btn-primary">Registrar-se</button>
                </div>
            </form>
        </div>
      `;
  
      this.form = this.querySelector('#registreForm');
      this.submitButton = this.querySelector('#botoEnviar');
      /*this.messageCorreu = this.querySelector('#correuError');
      this.messageContr = this.querySelector('#contrasenyaError');
      this.messageContr2 = this.querySelector('#confContrasenyaError');*/
  
      this.addEventListeners();
    }
  
    addEventListeners() {
      const inputs = this.querySelectorAll('input');
  
      // Valida els inputs i activa/desactiva el botó d'enviament
      /*inputs.forEach((input) => {
        input.addEventListener('input', () => {
          const isValid = this.form.checkValidity();
          this.submitButton.disabled = !isValid;
        });
      });*/
  
      // Gestiona l'enviament del formulari
      this.submitButton.addEventListener('click', async (event) => {
        event.preventDefault();
  
        //this.submitButton.disabled = true;
  
        const data = {
          correu: this.querySelector('#correu').value,
          contrasenya: this.querySelector('#contrasenya').value,
          confContrasenya: this.querySelector('#confContrasenya').value
        };

        const correuRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const contraRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;



        // Limpiar errores previos
        document.getElementById('correuError').style.display = 'none';
        document.getElementById('contrasenyaError').style.display = 'none';
        document.getElementById('confContrasenyaError').style.display = 'none';

        let valid = true;

        // Validar correu electrònic
        if (!this.esAtributValid(data.correu,correuRegex)) {
            document.getElementById('correuError').textContent = 'El correu electrònic no és vàlid.';
            document.getElementById('correuError').style.display = 'block';
            valid = false;
        }

        // Validar contrasenya
        if (!this.esAtributValid(data.contrasenya,contraRegex)) {
            document.getElementById('contrasenyaError').textContent = 'La contrasenya ha de tenir almenys 6 caràcters, incloent una lletra majúscula i un número.';
            document.getElementById('contrasenyaError').style.display = 'block';
            valid = false;
        }

        // Validar que les contrasenyes coincideixen
        if (data.contrasenya !== data.confContrasenya) {
            document.getElementById('confContrasenyaError').textContent = 'Les contrasenyes no coincideixen.';
            document.getElementById('confContrasenyaError').style.display = 'block';
            valid = false;
        }

        const mensatge = document.getElementById("mensatge");
        mensatge.innerHTML="";
        if (valid) {
          let resposta;
            try {
                resposta = await enviarRegistre(data.correu, data.contrasenya);
                mensatge.innerHTML=`<p class="text-success">Te has registrado correctamente</p>`;
            } catch (error) {
                mensatge.innerHTML=`<p class="text-danger">No te has podido registrar: ${error}</p>`;
            }
            
            this.querySelector('#correu').value="";
            this.querySelector('#contrasenya').value="";
            this.querySelector('#confContrasenya').value="";
        }
        });
    }
  }
  
  // Registra el Web Component
  customElements.define('form-registre', FormRegistro);
  




    