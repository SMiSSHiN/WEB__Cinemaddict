import { createElement } from "../utils/render.js";

export default class AbstractView {
    constructor() {
        if (new.target === AbstractView) {
            throw new Error('Can\'t instantiate AbstractView, only create one.');
        }

        this._element = null;
        this._callback = {};
    }

    get element() {
        if (!this._element) {
            this._element = createElement(this.template);
        }

        return this._element;
    }

    get template() {
        throw new Error('Abstract method is\'t implemented: get template');
    }

    // [?] Почему не написать тут сразу this._element.remove() ?
    // [A] ...
    removeElement() {
        this._element = null;
    }
}
