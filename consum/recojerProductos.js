import { getDatos } from "./supaservice";
export {obtenerDatosProductos};

async function obtenerDatosProductos() {
    const tabla = "productes";
    const campos = "*";  
    const filtros = "";

    const datos = await getDatos(tabla, campos, filtros);

    let arrayDatos = Array.isArray(datos) ? datos : [datos]; 
    return arrayDatos;
}