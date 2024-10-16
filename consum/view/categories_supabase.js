import { getDatos } from "../supaservice";
export {getAndRenderCategorias}

async function getCategorias(){
   getDatos("categorias","nombre,descripcion");
  }
  
  
  function generateCategoriaRow(categoria) {
  
  const arrayTDs = ["nombre", "descripcion"]
    .map(
      (col) =>
        `<td>
            ${categoria[col]}
        </td>`
    )
    .join(" ");
  return `<tr>${arrayTDs}</tr>`;
  }
  
  function generateCategoriasList(categoriasList) {
  const categoriasListDiv = document.createElement("div");
  categoriasListDiv.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Descripción</th>
        </tr>
      </thead>
      ${categoriasList.map(generateCategoriaRow).join(" ")}
    </table>
  `;
  return categoriasListDiv;
  }
  
  
  
  async function getAndRenderCategorias(container){
    container.append(generateCategoriasList(await getCategorias()))
  }