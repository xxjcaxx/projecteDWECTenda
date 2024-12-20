import { obtenerDatosProductos } from "../recojerProductos";
import { obtenerDatosCategorias } from "../recojerCategorias";
import { renderProductos } from "../view/scriptsProductos";
import { renderProducte } from "../view/detalls_producte";
import { renderCategoria } from "../view/detalls_categoria";
import { obtenerDatosClientes } from "../recojerClientes";
import { renderClientes } from "../view/listarClientes";
import { getListCategorias } from "../service/categoriaService";
export { router };
import { CategoriesComponent } from "../WebComponents/CategoriesComponent";
customElements.define("categories-component", CategoriesComponent);
import { ProductosComponent } from "../WebComponents/ProductosComponent";
customElements.define("productos-component", ProductosComponent);

async function router(route) {
  // eslint-disable-next-line no-unused-vars
  const [hash, routeModel, routeID] = route.split("/");
  const cuerpoContainer = document.getElementById("containerProductos");

  switch (routeModel) {
    case "tienda":
      const lineaProductos = await obtenerDatosProductos();
      cuerpoContainer.innerHTML = renderProductos(lineaProductos);

      break;

    case "clientes":
      const lineaClientes = await obtenerDatosClientes();
      cuerpoContainer.innerHTML = "";
      cuerpoContainer.append(renderClientes(lineaClientes));

      break;

    case "categorias":
      let lineaCategorias = await getListCategorias();

      // Creamos el componente de categorías
      const categoriesComponent = document.createElement("categories-component");

      // Pasamos las categorías como atributo
      categoriesComponent.setAttribute(
        "data-categorias",
        JSON.stringify(lineaCategorias)
      );

      // Limpiamos el contenedor y añadimos el componente
      cuerpoContainer.innerHTML = "";
      cuerpoContainer.append(categoriesComponent);

      break;

    case "productos":
      const lineaProductoss = await obtenerDatosProductos();

      const productosComponent = document.createElement("productos-component");
      productosComponent.setAttribute(
        "data-productos",
        JSON.stringify(lineaProductoss)
      );

      cuerpoContainer.innerHTML = "";
      cuerpoContainer.append(productosComponent);
      //cuerpoContainer.innerHTML = renderProductos(lineaProductoss);

      break;

    case "producto":
      const producto = await obtenerDatosProductos(`id=eq.${routeID}`);
      cuerpoContainer.innerHTML = "";
      cuerpoContainer.appendChild(await renderProducte(producto[0]));
      break;

    case "categoria":
      const categoria = await obtenerDatosCategorias(`id=eq.${routeID}`);
      cuerpoContainer.innerHTML = "";
      cuerpoContainer.appendChild(await renderCategoria(categoria[0]));
      break;

    case "registro":
      cuerpoContainer.innerHTML = "<form-registre></form-registre>";
      break;

    case "login":
      cuerpoContainer.innerHTML = "<login-form></login-form>";
      break;

    default:
      window.location.hash = "#/tienda";
      break;
  }
}
