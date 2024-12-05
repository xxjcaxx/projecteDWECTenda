// Import our custom CSS
import './style/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import { router } from './router/router'

import { renderProductos } from './view/scriptsProductos'

import { renderClientes } from './view/listarClientes'
import { obtenerDatosClientes } from './recojerClientes'

import { getListaImagenesUrl } from './view/imagenes'
import { renderProducte } from './view/detalls_producte'
import { cargarPaginaProducto } from './controller/productoController'

import { obtenerDatosCategorias } from './recojerCategorias'
import { renderCategories } from './view/categories'


import { FormRegistro } from "./view/registre";
import { LoginFormComponent } from './WebComponents/LoginForm'

document.addEventListener("DOMContentLoaded", async ()=>{


    router(window.location.hash);
    window.addEventListener("hashchange", () => {
        router(window.location.hash);
        });
 

})