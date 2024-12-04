export {renderProductos};
// PRODUCTES : id, nom, preu, descripcio, marca, categoria, pes, dimensions, foto
function renderProductos(productes){
    let divProductos = productes
        .map((p) => `
  <div class="col">
  <div class="card" style="width: 18rem;">
  <img src="/img-placeholder.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${p.nom}</h5>
    <p class="card-text">${p.descripcio}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${p.categoria}</li>
    <li class="list-group-item">${p.marca}</li>
    <li class="list-group-item">Marca: ${p.pes}</li>
    <li class="list-group-item">Precio: ${p.dimensions}</li>
    <li class="list-group-item">${p.preu}</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link btn btn-success" >Añadir al carrito</a>
    <a href="#/producto/${p.id}" class="card-link btn btn-success">Ver</a>
  </div>
  </div>
  </div>
  `

        )
        .join('');
        return divProductos;
  }
  
  