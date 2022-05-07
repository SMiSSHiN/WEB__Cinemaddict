import AbstractView from "./abstract-view.js";

// [ ] Разбить на:
// [+]   - FilmsList
// [ ]   - FilmsListTopRated
// [ ]   - FilmsListMostCommented
const createBoardTemplate = () => (`<section class="films"></section>`);

export default class BoardView extends AbstractView {
    get template() {
        return createBoardTemplate();
    }
}
