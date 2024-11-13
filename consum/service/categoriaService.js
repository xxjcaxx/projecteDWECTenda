export { getListCategorias, getCategoria };
import { getDatos } from "../supaservice";

async function getListCategorias() {
  const datos = await getDatos("categorias", "*", "");
  let arrayDatos = Array.isArray(datos) ? datos : [datos];
  return arrayDatos;
}

async function getCategoria(categoriaId) {
  const datos = await getDatos("categorias", "*", `id=eq.${categoriaId}`);
  let arrayDatos = Array.isArray(datos) ? datos : [datos];
  return arrayDatos;
}
