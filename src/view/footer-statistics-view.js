// Переписать, когда будет кол-во фильмов в БД

import { createElement } from "../render.js";

const createFooterStatisticsTemplate = () => (
    `<p>130 291 movies inside</p>`
);

export default class FooterStatisticsView {
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
        return createFooterStatisticsTemplate();
    }

    removeElement() {
        this._element = null;
    }
}
