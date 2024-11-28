// Import our custom CSS
import './style/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import { router } from './router/router'


document.addEventListener("DOMContentLoaded", async ()=>{

    router(window.location.hash);
    window.addEventListener("hashchange", () => {
        router(window.location.hash);
        });
 
})