import { createElement } from "../render.js";

const createFilterTemplate = () => (
    `<ul class="sort">
    <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
    <li><a href="#" class="sort__button">Sort by date</a></li>
    <li><a href="#" class="sort__button">Sort by rating</a></li>
  </ul>`
);

export default class FilterView {
    constructor() {
        this._element = null;
    }

    get element() {
        if(!this._element) {
            this._element = createElement(this.template);
        }

        return this._element;
    }

    get template() {
        return createFilterTemplate();
    }

    removeElement() {
        this._element = null;
    }
}
