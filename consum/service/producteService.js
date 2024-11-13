export { getListProductosByCatergoria, getPrdocute };
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

async function getPrdocute(producteId) {
  const datos = await getDatos("productes", "*", `id=eq.${producteId}`);
  let arrayDatos = Array.isArray(datos) ? datos : [datos];
  return arrayDatos;
}
