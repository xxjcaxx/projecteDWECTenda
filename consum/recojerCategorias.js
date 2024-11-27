import { getDatos } from "./supaservice";
export {obtenerDatosCategorias}

async function obtenerDatosCategorias() {
    const tabla = "categorias";
    const campos = "*";
    const filtros = "";

    const datos = await getDatos(tabla, campos, filtros);

    let arrayDatos = Array.isArray(datos) ? datos : [datos];
    return arrayDatos;
}