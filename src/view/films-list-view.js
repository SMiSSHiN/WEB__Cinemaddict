import { createElement } from "../render.js";

// [?] Подумать, как добавить TopRated, MostCommented разметку
// [A] 

const createFilmsListTemplate = () => (
    `<section class="films-list">
    <!-- <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2> -->
    <div class="films-list__container"></div>
  </section>`
);

const createMostRatedListTemplate = () => (
    `<section class="films-list films-list--extra">
    <h2 class="films-list__title">Top rated</h2>
    <div class="films-list__container"></div>
  </section>`
);

const createMostCommentedListTemplate = () => (
    `<section class="films-list films-list--extra">
    <h2 class="films-list__title">Most commented</h2>
    <div class="films-list__container"></div>
  </section>`
);

export default class FilmsListView {
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
        return createFilmsListTemplate();
    }

    removeElement() {
        this._element = null;
    }
}
