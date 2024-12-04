export class CategoriesComponent extends HTMLElement {
  constructor() {
    super();
    //this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const categorias = this.getCategorias();
    if (!categorias) return;

    const categoriasHTML = categorias
      .map(
        (categoria) => `
            <div class="list-group d-inline-block">
              <a class="p-4 list-group-item list-group-item-action">
                <span class="fs-5 fw-bold">${categoria.nombre}</span><br>
                <span class="text-body-secondary">${categoria.descripcion}</span>
              </a>
            </div>
          `
      )
      .join("");

    this.innerHTML = `
        <div>${categoriasHTML}</div>
      `;
  }

  getCategorias() {
    const data = this.getAttribute("data-categorias");
    return JSON.parse(data);
  }
}


