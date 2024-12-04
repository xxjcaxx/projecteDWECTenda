import { getDatos } from "./supaservice";
export {obtenerDatosClientes};

async function obtenerDatosClientes(filtros = "") {
    const tabla = "clientes";
    const campos = "*";  

    const datos = await getDatos(tabla, campos, filtros);

    let arrayDatos = Array.isArray(datos) ? datos : [datos]; 
    return arrayDatos;
}