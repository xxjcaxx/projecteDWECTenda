// Import our custom CSS
import { obtenerDatosProductos } from './recojerProductos'
import './style/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import { renderProductos } from './view/scriptsProductos'

document.addEventListener("DOMContentLoaded", async ()=>{

    //Productos
    const divProductos = document.querySelector("#containerProductos")
    let productos = await obtenerDatosProductos()
    divProductos.innerHTML= renderProductos(productos)

})