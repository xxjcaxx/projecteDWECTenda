import { getPrdocute } from "../service/producteService";
import { renderProducte } from "../view/detalls_producte";
export {cargarPaginaProducto}

async function cargarPaginaProducto(produtoId){
    const productoJson = await getPrdocute(produtoId);
    return renderProducte(productoJson[0]);
}