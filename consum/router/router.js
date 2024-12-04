import { obtenerDatosProductos } from "../recojerProductos";
import { obtenerDatosCategorias } from "../recojerCategorias";
import { renderProductos } from "../view/scriptsProductos";

import { cargarPaginaCategoria } from "../controller/categoriaController";
import { obtenerDatosClientes } from "../recojerClientes";
import { renderClientes } from "../view/listarClientes";
import { getListCategorias } from "../service/categoriaService";
import { renderCategories } from "../view/categories";

import { renderProducte } from "../view/detalls_producte";
import { renderCategoria } from "../view/detalls_categoria";
export {router}

async function router(route) {

    const[hash, routeModel, routeID] = route.split('/');
    const cuerpoContainer = document.getElementById("containerProductos")
    
    switch (routeModel) {
        case 'tienda':
            const lineaProductos = await obtenerDatosProductos();
            cuerpoContainer.innerHTML = renderProductos(lineaProductos);

        break;
        case 'clientes':
            const lineaClientes = await obtenerDatosClientes();
            cuerpoContainer.innerHTML = "";
            cuerpoContainer.appendChild(renderClientes(lineaClientes));

        break;
        case 'categorias':
            const lineaCategorias = await getListCategorias();
            cuerpoContainer.innerHTML = "";
            cuerpoContainer.appendChild(renderCategories(lineaCategorias));

        break;
        case 'productos':
           const lineaProductoss = await obtenerDatosProductos();
           cuerpoContainer.innerHTML = renderProductos(lineaProductoss);

        break;
        case 'producto':
            const producto = await obtenerDatosProductos(`id=eq.${routeID}`);
            cuerpoContainer.innerHTML = "";
            cuerpoContainer.appendChild(await renderProducte(producto[0]));
        break;
        case 'categoria':
            const categoria = await obtenerDatosCategorias(`id=eq.${routeID}`);
            cuerpoContainer.innerHTML = "";
            cuerpoContainer.appendChild(await renderCategoria(categoria[0]));
        break;

        case 'registro':
            cuerpoContainer.innerHTML = "<form-registre></form-registre>";
        break;
        

        default:
            window.location.hash = '#/tienda';
        break;
    
    }
}
