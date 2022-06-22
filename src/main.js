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

import { render, RenderPosition } from './utils/render.js';

import { generateFilm } from './mock/film.js';

const FILM_STEP = 5;
const FILM_COUNT = 22;

const renderFilm = (filmsListElement, film) => {
    const filmComponent = new FilmCardView(film);
    const popupComponent = new PopupView();
    
    // [?] Добавить смену курсора с стрелки на палец при наведении на эти 3 элемента
    // [+] Добавлено через стили в css...
    const filmComponenPoster = filmComponent.element.querySelector('.film-card__poster');
    const filmComponentTitle = filmComponent.element.querySelector('.film-card__title');
    const filmComponentComments = filmComponent.element.querySelector('.film-card__comments');

    const cardToPopupOnClickElements = [filmComponenPoster, filmComponentTitle, filmComponentComments];


    const replaceCardToPopup = () => {
        popupComponent.film = film;
        // [?] Тем не менее можно кликать на элементы за Popup...
        // [?] Как исправить
        siteBodyElement.classList.add('hide-overflow');
        render(footerElement, popupComponent, RenderPosition.AFTEREND);

        document.addEventListener('keydown', onEscKeyDown);
        popupComponent.setCloseClickHandler(onCloseClick);
    };

    const replacePopupToCard = () => {
        popupComponent.element.remove();
        
        removePopupEvents();
    };

    const removePopupEvents = () => {
        const popupComponentCloseElement = popupComponent.element.querySelector('.film-details__close-btn');

        siteBodyElement.classList.remove('hide-overflow');

        document.removeEventListener('keydown', onEscKeyDown);
        popupComponentCloseElement.removeEventListener('click', onCloseClick);
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

    render(filmsListElement, filmComponent.element, RenderPosition.BEFOREEND);

    cardToPopupOnClickElements.forEach((element) => {
        element.addEventListener('click', () => { 
            replaceCardToPopup(); 
        });
    });
};

const renderBoard = (boardContainer, boardFilms) => {
    const boardComponent = new BoardView();
    const filmsListComponent = new FilmsListView();

    render(boardContainer, boardComponent, RenderPosition.BEFOREEND);
    render(boardComponent.element, filmsListComponent, RenderPosition.BEFOREEND);

    const filmsListElement = boardComponent.element.querySelector('.films-list');
    const filmsListContainerElement = filmsListComponent.element.querySelectorAll('.films-list__container');

    if(boardFilms.length === 0) {
        render(filmsListElement, new NoMoviesView(), RenderPosition.AFTERBEGIN)
    }
    
    for (var i = 0; i < Math.min(boardFilms.length, FILM_STEP); i++) {
        renderFilm(filmsListContainerElement[0], boardFilms[i]);
    }
    
    if (boardFilms.length > FILM_STEP) {
        let renderFilmCount = FILM_STEP;
    
        const showMoreButtonComponent = new ShowMoreButtonView();
    
        render(filmsListElement, showMoreButtonComponent, RenderPosition.BEFOREEND);

        const onShowMoreButtonClick = () => {
            boardFilms
                .slice(renderFilmCount, renderFilmCount + FILM_STEP)
                .forEach((film) => {
                    renderFilm(filmsListContainerElement[0], film);
                });
            
            renderFilmCount += FILM_STEP;
            
            if (renderFilmCount >= boardFilms.length) {
                showMoreButtonComponent.element.remove();
                showMoreButtonComponent.removeElement();
            }
        };
    
        showMoreButtonComponent.setClickHandler(onShowMoreButtonClick);
    }
};

const films = Array.from({length: FILM_COUNT}, generateFilm);
const filter = createFilter(films);

const siteHeaderElement = document.querySelector('.header');
const siteBodyElement = document.querySelector('body');
const siteMainElement = document.querySelector('.main');

render(siteHeaderElement, new UserProfileView(), RenderPosition.BEFOREEND);
render(siteMainElement, new NavigationView(filter), RenderPosition.BEFOREEND);
render(siteMainElement, new FilterView(), RenderPosition.BEFOREEND);

renderBoard(siteMainElement, films);

const footerElement = document.querySelector('.footer');
const footerStatisticsElement = footerElement.querySelector('.footer__statistics');

render(footerStatisticsElement, new FooterStatisticsView(), RenderPosition.BEFOREEND);
