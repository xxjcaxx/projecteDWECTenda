import { productes } from "../dadesTest/dades";
export {renderCategoria};


function generarP(categoria){
        let pProducte = [];
        for (const p of productes) {
            if (p.categoria === categoria.nom){
                let elecmetnP = document.createElement("p");
                elecmetnP.innerText=p.nom;
                pProducte.push(elecmetnP);
            }

        }
        return pProducte
    
}

function renderCategoria(categoria) {
    let divCategories = document.createElement("div");
    let textoDiv = `
    <h1 class="text-center h1">${categoria.nom}</h1>
    <p class="lead">${categoria.id}</p>
    <p class="lead">${categoria.descripcio}</p>
    ${generarP(categoria).map(e => {let obje = document.createElement("p")
        obje.innerHTML = e.innerHTML
        return obje
    })}
        

   
    `
  
    divCategories.innerHTML = textoDiv;

    return divCategories;
  }
  