// Import our custom CSS
import './style/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'


import { getDatos } from './supaservice'

import { getcomentarios } from './view/comentarios'
import { comentarios, productes } from './dadesTest/dades'
import { renderProducte } from './view/detalls_producte'

document.addEventListener("DOMContentLoaded", ()=>{
    document.querySelector("#containerProductos").append(renderProducte(productes[0]))
})
