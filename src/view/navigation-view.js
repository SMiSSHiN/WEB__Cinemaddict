// Переписать, когда будет структура пользователя
// Написать ф-ию createFilter(films), которая будет возвращать
//  готовый объект {films.length, watchedFilmsCount, voriteFilmsCount}
import AbstractView from "./abstract-view.js";

export const createFilter = (films) => {
    let filmsCount = films.length;
    let favoriteFilmsCount = 0;
    let watchedFilmsCount  = 0;
  
    films.forEach(film => {
        if (film.userDetails.favorite === true)
            favoriteFilmsCount += 1;
        if (film.userDetails.alreadyWatched === true)
            watchedFilmsCount += 1;
    });

    return {filmsCount, favoriteFilmsCount, watchedFilmsCount};
};

export const createNavigationTemplate = (filter) => {  
    const {filmsCount, watchedFilmsCount, favoriteFilmsCount} = filter;

    return `<nav class="main-navigation">
    <div class="main-navigation__items">
      <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
      <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${filmsCount}</span></a>
      <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">${watchedFilmsCount}</span></a>
      <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${favoriteFilmsCount}</span></a>
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`
};

export default class NavigationView extends AbstractView {
    constructor(filter) {
        super();
        this._filter = filter;
    }

    get template() {
        return createNavigationTemplate(this._filter);
    }
}
