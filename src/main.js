import { createUserProfileTemplate } from './view/user-profile-view.js';
import { createNavigationTemplate } from './view/navigation-view.js';
import FilterView from './view/filter-view.js';
import BoardView  from './view/board-view.js';
import FilmsListView from './view/films-list-view.js';
import FooterStatisticsView from './view/footer-statistics-view.js';
import { createFilmCardTemplate } from './view/film-card-view.js';
import { createPopupTemplate } from './view/popup-view.js';
import ShowMoreButtonView from './view/show-more-button-view.js';
import NoMoviesView from './view/no-movies-view.js';

import { RenderPosition, renderTemplate, renderElement, createElement } from './render.js';

import { generateFilm } from './mock/film.js';

const FILM_STEP = 5;
const FILM_COUNT = 22;

const films = Array.from({length: FILM_COUNT}, generateFilm);

const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');


renderTemplate(siteHeaderElement, createUserProfileTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteMainElement, createNavigationTemplate(films), RenderPosition.BEFOREEND);
renderElement(siteMainElement, new FilterView().element, RenderPosition.BEFOREEND);

const boardComponent = new BoardView();
renderElement(siteMainElement, boardComponent.element, RenderPosition.BEFOREEND);

const filmsListComponent = new FilmsListView();
renderElement(boardComponent.element, filmsListComponent.element, RenderPosition.BEFOREEND);

const filmsListElement = siteMainElement.querySelector('.films-list');
const filmsListContainerElement = filmsListComponent.element.querySelectorAll('.films-list__container');

console.log(filmsListContainerElement);

for (var i = 0; i < Math.min(films.length, FILM_STEP); i++) {
    renderTemplate(filmsListContainerElement[0], createFilmCardTemplate(films[i]), RenderPosition.BEFOREEND);
}

if (films.length > FILM_STEP) {
    let renderFilmCount = FILM_STEP;

    const showMoreButtonComponent = new ShowMoreButtonView();

    renderElement(filmsListElement, showMoreButtonComponent.element, RenderPosition.BEFOREEND);

    showMoreButtonComponent.element.addEventListener('click', (evt) => {
        evt.preventDefault();
        
        films
            .slice(renderFilmCount, renderFilmCount + FILM_STEP)
            .forEach((film) => {
                renderTemplate(filmsListContainerElement[0], createFilmCardTemplate(film), RenderPosition.BEFOREEND);
            });
        
        renderFilmCount += FILM_STEP;
        
        if (renderFilmCount >= films.length) {
            showMoreButtonComponent.element.remove();
            showMoreButtonComponent.removeElement();
        }
    });
}

// renderTemplate(filmsListContainerElement[1], createFilmCardTemplate(films[i]), RenderPosition.BEFOREEND);
// renderTemplate(filmsListContainerElement[1], createFilmCardTemplate(films[++i]), RenderPosition.BEFOREEND);
// renderTemplate(filmsListContainerElement[2], createFilmCardTemplate(films[++i]), RenderPosition.BEFOREEND);
// renderTemplate(filmsListContainerElement[2], createFilmCardTemplate(films[++i]), RenderPosition.BEFOREEND);

const footerElement = document.querySelector('.footer');
const footerStatisticsElement = footerElement.querySelector('.footer__statistics');

renderElement(footerStatisticsElement, new FooterStatisticsView().element, RenderPosition.BEFOREEND);
// renderTemplate(footerElement, createPopupTemplate(films[++i]), RenderPosition.AFTEREND);