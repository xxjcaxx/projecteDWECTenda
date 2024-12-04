import { obtenerDatosProductos } from "../recojerProductos";
import { renderProductos } from "../view/scriptsProductos";
import { cargarPaginaCategoria } from "../controller/categoriaController";
import { obtenerDatosClientes } from "../recojerClientes";
import { renderClientes } from "../view/listarClientes";
import { renderCategoria } from "../view/detalls_categoria";
import { getListCategorias } from "../service/categoriaService";
import { renderCategories } from "../view/categories";
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
            cuerpoContainer.append(renderClientes(lineaClientes));

        break;
        case 'categoria':
            const lineaCategorias = await getListCategorias();
            console.log(lineaCategorias)
            cuerpoContainer.innerHTML = renderCategories(lineaCategorias);

        break;
        case 'productos':
           const lineaProductoss = await obtenerDatosProductos();
           cuerpoContainer.innerHTML = renderProductos(lineaProductoss);

        break;

        case 'registro':
            cuerpoContainer.innerHTML = "<form-registre></form-registre>";
        break;
        

        default:
            window.location.hash = '#/tienda';
        break;
    
    }
}
