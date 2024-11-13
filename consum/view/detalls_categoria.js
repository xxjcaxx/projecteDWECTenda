export { renderCategoria };
import { renderProducteEnCategoria } from "./detalls_producte";


function renderCategoria(categoria, productes) {
  let divCategories = document.createElement("div");

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
