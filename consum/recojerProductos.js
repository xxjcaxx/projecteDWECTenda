import { getDatos } from "./supaservice";
export {obtenerDatosProductos};

async function obtenerDatosProductos(ids) {
    const tabla = "productes";
    const campos = "*";  
    const filtros = "";

    const datos = await getDatos(tabla, campos, filtros);

    let arrayDatos = Array.isArray(datos) ? datos : [datos]; 
    console.log(arrayDatos);
    return arrayDatos;
}