export class Section {
  constructor(renderer, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems(items,idUser) {
    items.forEach(item => this._renderer(item,idUser));
  }

  addItem(element) {
    this._container.prepend(element);
  }
}
