import { createElement } from "../render.js";
import AbstractView from "./abstract-view.js";

const createShowMoreButtonTemplate = () => (`<button class="films-list__show-more">Show more</button>`);

export default class ShowMoreButtonView extends AbstractView {
    get template() {
        return createShowMoreButtonTemplate();
    }
}
