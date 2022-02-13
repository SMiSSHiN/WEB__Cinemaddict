import { renderTemplate, RenderPosition } from './render.js';
import { createUserProfileTemplate } from './view/user-profile-view.js';
import { createNavigationTemplate } from './view/navigation-view.js';
import { createFilterTemplate } from './view/filter-view.js';
import { createBoardTemplate } from './view/board-view.js';
import { createFooterStatisticsTemplate } from './view/footer-statistics-view.js';
import { createFilmCardTemplate } from './view/film-card-view.js';

const TASK_COUNT = 3;

const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');

renderTemplate(siteHeaderElement, createUserProfileTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteMainElement, createNavigationTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteMainElement, createFilterTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteMainElement, createBoardTemplate(), RenderPosition.BEFOREEND);

const filmsListContainerElement = siteMainElement.querySelectorAll('.films-list__container');

for (let i = 0; i < TASK_COUNT; i++) {
    renderTemplate(filmsListContainerElement[0], createFilmCardTemplate(), RenderPosition.BEFOREEND);
}

renderTemplate(filmsListContainerElement[1], createFilmCardTemplate(), RenderPosition.BEFOREEND);
renderTemplate(filmsListContainerElement[2], createFilmCardTemplate(), RenderPosition.BEFOREEND);

const footerElement = document.querySelector('.footer');
const footerStatisticsElement = footerElement.querySelector('.footer__statistics');

renderTemplate(footerStatisticsElement, createFooterStatisticsTemplate(), RenderPosition.BEFOREEND);