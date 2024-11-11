export { getListProductosByCatergoria };
import { getDatos } from "../supaservice";

async function getListProductosByCatergoria(categoriaId) {
  const datos = await getDatos(
    "productes",
    "*",
    `categoria=eq.${categoriaId}`
  );
  let arrayDatos = Array.isArray(datos) ? datos : [datos];
  return arrayDatos;
}
