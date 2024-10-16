// Import our custom CSS
import './style/styles.scss'
import { categories } from './dadesTest/dades';
import { renderCategoria } from './view/detalls_categoria';
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

document.addEventListener("DOMContentLoaded", ()=>{
    const div = document.querySelector("#containerCategorias");
    div.append(renderCategoria(categories[1])) ;

});