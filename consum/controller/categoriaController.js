import { getCategoria } from "../service/categoriaService"
import { getListProductosByCatergoria } from "../service/producteService";
import { renderCategoria } from "../view/detalls_categoria";
export {cargarPaginaCategoria}

async function cargarPaginaCategoria(categoriaId){
    const categoriaJson = await getCategoria(categoriaId);
    console.log(categoriaJson);
    const listProductesJson = await getListProductosByCatergoria(categoriaId);
   
    return renderCategoria(categoriaJson[0], listProductesJson);
}