import { obtenerDatosProductos } from "../recojerProductos";
import { renderProductos } from "../view/scriptsProductos";
import { cargarPaginaCategoria } from "../controller/categoriaController";
import { obtenerDatosClientes } from "../recojerClientes";
import { renderClientes } from "../view/listarClientes";
import { renderCategoria } from "../view/detalls_categoria";
import { getListCategorias } from "../service/categoriaService";
import { renderCategories } from "../view/categories";
import {isLoged} from "../supaservice";



async function router(route) {

    const[hash, routeModel, routeID] = route.split('/');
    const cuerpoContainer = document.getElementById("container")
    
    switch (routeModel) {
        case 'login':
            const container= document.createElement("webcomp-login");
            cuerpoContainer.append(container);
            break;
        case 'tienda':
            const lineaProductos = await obtenerDatosProductos();
            cuerpoContainer.innerHTML = renderProductos(lineaProductos);

        break;
        case 'clientes':
            if(isLoged()){
                const lineaClientes = await obtenerDatosClientes();
                cuerpoContainer.innerHTML = "";
                cuerpoContainer.append(renderClientes(lineaClientes));
            }else{
                router("login");
            }
        break;
        case 'categoria':
            const lineaCategorias = await getListCategorias();
            console.log(lineaCategorias)
            cuerpoContainer.innerHTML="";
            cuerpoContainer.append(renderCategories(lineaCategorias));

        break;
        case 'productos':
           const lineaProductoss = await obtenerDatosProductos();
           cuerpoContainer.innerHTML = renderProductos(lineaProductoss);

        break;
        

        default:
            window.location.hash = '#/tienda';
        break;
    
    }
}
