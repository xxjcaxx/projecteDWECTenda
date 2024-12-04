export { renderCategoria };
  import { obtenerDatosProductos } from "../recojerProductos";
import { renderProducteEnCategoria } from "./detalls_producte";


async function renderCategoria(categoria) {
  let divCategories = document.createElement("div");
  let productes = await obtenerDatosProductos();

  divCategories.innerHTML = `
    <!-- Contenedor Principal -->
    <div class="container my-5">
      <!-- Sección de Categoría -->
      <div class="category mb-5">
        <h2 class="text-primary mb-3">${categoria.nombre}</h2>
        <p class="text-muted mb-4">
        ${categoria.descripcion}
        </p>
        <!-- Listado de Productos -->
        <div class="row">
        ${productes
          .map((p) => {
            return renderProducteEnCategoria(p);
          })
          .join("")}
        </div>
      </div>
    </div>
  `;

  return divCategories;
}
