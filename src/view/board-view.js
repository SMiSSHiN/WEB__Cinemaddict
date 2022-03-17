import { createElement } from "../render.js";

// [ ] Разбить на:
// [+]   - FilmsList
// [ ]   - FilmsListTopRated
// [ ]   - FilmsListMostCommented
const createBoardTemplate = () => (`<section class="films"></section>`);

export default class BoardView {
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
        return createBoardTemplate();
    }

    removeElement() {
        this._element = null;
    }
}
