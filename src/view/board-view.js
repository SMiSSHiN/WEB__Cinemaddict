import { createElement } from "../render.js";

const createBoardTemplate = () => (
    `<section class="films">
    <section class="films-list">
      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
      <div class="films-list__container"></div>
    </section>

    <section class="films-list films-list--extra">
      <h2 class="films-list__title">Top rated</h2>
      <div class="films-list__container"></div>
    </section>

    <section class="films-list films-list--extra">
      <h2 class="films-list__title">Most commented</h2>
      <div class="films-list__container"></div>
    </section>
  </section>`
);

export default class BoardView {
    constructor() {
        this._element = null;
    }

    get element() {
        if(!this._element) {
            this._element = createElement(this.template);
        }

        return this._element
    }

    get template() {
        return createBoardTemplate();
    }

    removeElement() {
        this._element = null;
    }
}
