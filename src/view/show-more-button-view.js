import { createElement } from "../render.js";

const createShowMoreButtonTemplate = () => (`<button class="films-list__show-more">Show more</button>`);

export default class ShowMoreButtonView {
    constructor() {
        this._element = null;
    }

    get element() {
        if (!this._element) {
            this._element =  createElement(this.template);
        }

        return this._element;
    }

    // [?] Зачем это писать ?
    // [A] ...
    get template() {
        return createShowMoreButtonTemplate();
    }

    // [?] Почему не написать тут сразу this._element.remove() ?
    // [A] ...
    removeElement() {
        this._element = null;
    }
}
