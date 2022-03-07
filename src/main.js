import { renderTemplate, RenderPosition } from './render.js';
import { createUserProfileTemplate } from './view/user-profile-view.js';
import { createNavigationTemplate } from './view/navigation-view.js';
import { createFilterTemplate } from './view/filter-view.js';
import { createBoardTemplate } from './view/board-view.js';
import { createFooterStatisticsTemplate } from './view/footer-statistics-view.js';
import { createFilmCardTemplate } from './view/film-card-view.js';
import { createPopupTemplate } from './view/popup-view.js';
import { createShowMoreButtonTemplate } from './view/show-more-button-view.js';

import { generateFilm } from './mock/film.js';

const FILM_STEP = 5;
const FILM_COUNT = 22;

const films = Array.from({length: FILM_COUNT}, generateFilm);

const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');

renderTemplate(siteHeaderElement, createUserProfileTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteMainElement, createNavigationTemplate(films), RenderPosition.BEFOREEND);
renderTemplate(siteMainElement, createFilterTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteMainElement, createBoardTemplate(), RenderPosition.BEFOREEND);

const filmsListElement = siteMainElement.querySelector('.films-list');
const filmsListContainerElement = siteMainElement.querySelectorAll('.films-list__container');

for (let i = 0; i < Math.min(films.length, FILM_STEP); i++) {
    renderTemplate(filmsListContainerElement[0], createFilmCardTemplate(films[i]), RenderPosition.BEFOREEND);
}

if (films.length > FILM_STEP) {
    let renderFilmCount = FILM_STEP;

    renderTemplate(filmsListElement, createShowMoreButtonTemplate(), RenderPosition.BEFOREEND);

    const showMoreButton = filmsListElement.querySelector('.films-list__show-more');

    showMoreButton.addEventListener('click', (evt) => {
        evt.preventDefault();
        
        films
            .slice(renderFilmCount, renderFilmCount + FILM_STEP)
            .forEach((film) => {
                renderTemplate(filmsListContainerElement[0], createFilmCardTemplate(film), RenderPosition.BEFOREEND);
            });
        
        renderFilmCount += FILM_STEP;

        if (renderFilmCount >= films.length) {
            showMoreButton.remove();
        }
    });
}

renderTemplate(filmsListContainerElement[1], createFilmCardTemplate(films[i]), RenderPosition.BEFOREEND);
renderTemplate(filmsListContainerElement[1], createFilmCardTemplate(films[++i]), RenderPosition.BEFOREEND);
renderTemplate(filmsListContainerElement[2], createFilmCardTemplate(films[++i]), RenderPosition.BEFOREEND);
renderTemplate(filmsListContainerElement[2], createFilmCardTemplate(films[++i]), RenderPosition.BEFOREEND);

const footerElement = document.querySelector('.footer');
const footerStatisticsElement = footerElement.querySelector('.footer__statistics');

renderTemplate(footerStatisticsElement, createFooterStatisticsTemplate(), RenderPosition.BEFOREEND);
// renderTemplate(footerElement, createPopupTemplate(films[++i]), RenderPosition.AFTEREND);