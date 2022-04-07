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

import { render, RenderPosition } from './render.js';

import { generateFilm } from './mock/film.js';

const FILM_STEP = 5;
const FILM_COUNT = 22;

const renderFilm = (filmsListElement, film) => {
    const filmComponent = new FilmCardView(film);
    
    // [-] Добавить смену курсора с стрелки на палец при наведении на эти 3 элемента
    const filmComponenPoster = filmComponent.element.querySelector('.film-card__poster');
    const filmComponentTitle = filmComponent.element.querySelector('.film-card__title');
    const filmComponentComments = filmComponent.element.querySelector('.film-card__comments');

    const cardToPopupOnClickElements = [filmComponenPoster, filmComponentTitle, filmComponentComments];

    const replaceCardToPopup = () => {
        popupComponent.film = film;
        // [?] Тем не менее можно кликать на элементы за Popup...
        // [?] Как исправить
        siteBodyElement.classList.add('hide-overflow');
        render(footerElement, popupComponent.element, RenderPosition.AFTEREND);

        const popupComponentCloseElement = popupComponent.element.querySelector('.film-details__close-btn');

        document.addEventListener('keydown', onEscKeyDown);
        popupComponentCloseElement.addEventListener('click', onCloseClick);
    };

    const replacePopupToCard = () => {
        popupComponent.element.remove();
        
        removePopupEvents();
    };

    const onEscKeyDown = (evt) => {
        if(evt.key === 'Escape' || evt.key === 'Esc') {
            evt.preventDefault();
            replacePopupToCard();
        }
    }; 

    const onCloseClick = () => {
        replacePopupToCard();
    };

    const removePopupEvents = () => {
        const popupComponentCloseElement = popupComponent.element.querySelector('.film-details__close-btn');

        siteBodyElement.classList.remove('hide-overflow');

        popupComponentCloseElement.removeEventListener('click', onCloseClick);
        document.removeEventListener('keydown', onEscKeyDown);
    };

    render(filmsListElement, filmComponent.element, RenderPosition.BEFOREEND);

    cardToPopupOnClickElements.forEach((element) => {
        element.addEventListener('click', () => {
            replaceCardToPopup();
        });
    });
};

const films = Array.from({length: FILM_COUNT}, generateFilm);
const filter = createFilter(films);

const siteHeaderElement = document.querySelector('.header');
const siteBodyElement = document.querySelector('body');
const siteMainElement = document.querySelector('.main');

render(siteHeaderElement, new UserProfileView().element, RenderPosition.BEFOREEND);
render(siteMainElement, new NavigationView(filter).element, RenderPosition.BEFOREEND);
render(siteMainElement, new FilterView().element, RenderPosition.BEFOREEND);

const boardComponent = new BoardView();
render(siteMainElement, boardComponent.element, RenderPosition.BEFOREEND);

const filmsListComponent = new FilmsListView();
render(boardComponent.element, filmsListComponent.element, RenderPosition.BEFOREEND);

const filmsListElement = boardComponent.element.querySelector('.films-list');
const filmsListContainerElement = filmsListComponent.element.querySelectorAll('.films-list__container');

if(films.length === 0) {
    render(filmsListElement, new NoMoviesView().element, RenderPosition.AFTERBEGIN)
}

const popupComponent = new PopupView();

for (var i = 0; i < Math.min(films.length, FILM_STEP); i++) {
    renderFilm(filmsListContainerElement[0], films[i]);
}

if (films.length > FILM_STEP) {
    let renderFilmCount = FILM_STEP;

    const showMoreButtonComponent = new ShowMoreButtonView();

    render(filmsListElement, showMoreButtonComponent.element, RenderPosition.BEFOREEND);

    showMoreButtonComponent.element.addEventListener('click', (evt) => {
        evt.preventDefault();
        
        films
            .slice(renderFilmCount, renderFilmCount + FILM_STEP)
            .forEach((film) => {
                renderFilm(filmsListContainerElement[0], film);
            });
        
        renderFilmCount += FILM_STEP;
        
        if (renderFilmCount >= films.length) {
            showMoreButtonComponent.element.remove();
            showMoreButtonComponent.removeElement();
        }
    });
}

const footerElement = document.querySelector('.footer');
const footerStatisticsElement = footerElement.querySelector('.footer__statistics');

render(footerStatisticsElement, new FooterStatisticsView().element, RenderPosition.BEFOREEND);
