// Import our custom CSS
import { obtenerDatosProductos } from './recojerProductos'
import './style/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import { renderProductos } from './view/scriptsProductos'
import { listaImagenes } from './view/imagenes'
import { renderProducte } from './view/detalls_producte'

document.addEventListener("DOMContentLoaded", async ()=>{

    //Productos
    const divProductos = document.querySelector("#containerProductos")
    let productos = await obtenerDatosProductos()    
    //Testing del producto nº1
    divProductos.append( await renderProducte(productos[0]))
    

})