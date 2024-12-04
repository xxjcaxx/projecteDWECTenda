import { obtenerDatosProductos } from "../recojerProductos";
import { renderProductos } from "../view/scriptsProductos";
import { obtenerDatosClientes } from "../recojerClientes";
import { renderClientes } from "../view/listarClientes";
import { getListCategorias } from "../service/categoriaService";
export { router };
import { CategoriesComponent } from "../WebComponents/CategoriesComponent";
customElements.define("categories-component", CategoriesComponent);

async function router(route) {
  // eslint-disable-next-line no-unused-vars
  const [hash, routeModel, routeID] = route.split("/");
  const cuerpoContainer = document.getElementById("containerProductos");

  switch (routeModel) {
    case "tienda":{
      const lineaProductos = await obtenerDatosProductos();
      cuerpoContainer.innerHTML = renderProductos(lineaProductos);

      break;
    }
    case "clientes":{
      const lineaClientes = await obtenerDatosClientes();
      cuerpoContainer.innerHTML = "";
      cuerpoContainer.append(renderClientes(lineaClientes));

      break;
    }
    case "categoria": {
      let lineaCategorias = await getListCategorias();
      console.log(lineaCategorias);

      // Creamos el componente de categorías
      const categoriesComponent = document.createElement("categories-component");

      // Pasamos las categorías como atributo
      categoriesComponent.setAttribute("data-categorias",JSON.stringify(lineaCategorias));

      // Limpiamos el contenedor y añadimos el componente
      cuerpoContainer.innerHTML = "";
      cuerpoContainer.append(categoriesComponent);

      break;
    }
    case "productos":{
      const lineaProductoss = await obtenerDatosProductos();
      cuerpoContainer.innerHTML = renderProductos(lineaProductoss);

      break;

    }
    default:
      window.location.hash = "#/tienda";
      break;
  }
}
