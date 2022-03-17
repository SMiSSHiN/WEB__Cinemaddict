import UserProfileView from './view/user-profile-view.js';
import { createFilter } from './view/navigation-view.js';
import NavigationView from './view/navigation-view.js';
import FilterView from './view/filter-view.js';
import BoardView  from './view/board-view.js';
import FilmsListView from './view/films-list-view.js';
import FooterStatisticsView from './view/footer-statistics-view.js';
import FilmCardView from './view/film-card-view.js';
import PopupView from './view/popup-view.js';
import ShowMoreButtonView from './view/show-more-button-view.js';
import NoMoviesView from './view/no-movies-view.js';

import { renderElement, RenderPosition } from './render.js';

import { generateFilm } from './mock/film.js';

const FILM_STEP = 5;
const FILM_COUNT = 22;

const films = Array.from({length: FILM_COUNT}, generateFilm);
const filter = createFilter(films);

const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');

renderElement(siteHeaderElement, new UserProfileView().element, RenderPosition.BEFOREEND);
renderElement(siteMainElement, new NavigationView(filter).element, RenderPosition.BEFOREEND);
renderElement(siteMainElement, new FilterView().element, RenderPosition.BEFOREEND);

const boardComponent = new BoardView();
renderElement(siteMainElement, boardComponent.element, RenderPosition.BEFOREEND);

const filmsListComponent = new FilmsListView();
renderElement(boardComponent.element, filmsListComponent.element, RenderPosition.BEFOREEND);

const filmsListElement = filmsListComponent.element.querySelector('.films-list');
const filmsListContainerElement = filmsListComponent.element.querySelectorAll('.films-list__container');

for (var i = 0; i < Math.min(films.length, FILM_STEP); i++) {
    renderElement(filmsListContainerElement[0], new FilmCardView(films[i]).element, RenderPosition.BEFOREEND);
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
                renderElement(filmsListContainerElement[0], new FilmCardView(film).element, RenderPosition.BEFOREEND);
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
// renderElement(footerElement, new PopupView(films[++i]).element, RenderPosition.AFTEREND);