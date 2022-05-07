import AbstractView from "./abstract-view.js";

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

export default class FilmsListView extends AbstractView {
    get template() {
        return createFilmsListTemplate();
    }
}
