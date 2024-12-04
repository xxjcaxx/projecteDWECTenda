export class ProductosComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const productos = this.getProductos();
    if (!productos) return;

    let divProductos = productos
      .map(
        (p) => `
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
  </div>
  </div>
  </div>
  `
      )
      .join("");

    this.innerHTML = `
          <div>${divProductos}</div>
        `;
  }

  getCategorias() {
    const data = this.getAttribute("data-productos");
    return JSON.parse(data);
  }
}
