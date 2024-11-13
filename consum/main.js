// Import our custom CSS
import { obtenerDatosProductos } from './recojerProductos'
import './style/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import { renderProductos } from './view/scriptsProductos'

import { renderClientes } from './view/listarClientes'
import { obtenerDatosClientes } from './recojerClientes'

import { getListaImagenesUrl } from './view/imagenes'
import { renderProducte } from './view/detalls_producte'
import { cargarPaginaProducto } from './controller/productoController'


document.addEventListener("DOMContentLoaded", async ()=>{

    //Productos
    const divProductos = document.querySelector("#containerProductos")
    let productos = await obtenerDatosProductos()    
    //Testing del producto nº1
    divProductos.append( await cargarPaginaProducto(1))
    


    //Clients
    const divClients = document.querySelector("#containerClientes")
    let clientes = await obtenerDatosClientes();
    divClients.append(renderClientes(clientes));
})