import { createElement } from "../render.js";

const createNoMoviesTemplate = () => (
    `<h2 class="films-list__title">There are no movies in our database</h2>`
);

export default class NoMoviesView {
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
        return createNoMoviesTemplate();
    }

    removeElement() {
        this._element = null;
    }
}
