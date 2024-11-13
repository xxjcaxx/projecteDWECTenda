import { getDatos } from "./supaservice";
export {obtenerDatosClientes};

async function obtenerDatosClientes() {
    const tabla = "clientes";
    const campos = "*";  
    const filtros = "";

    const datos = await getDatos(tabla, campos, filtros);

    let arrayDatos = Array.isArray(datos) ? datos : [datos]; 
    return arrayDatos;
}