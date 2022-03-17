// Переписать, когда будет структура пользователя
// Написать ф-ию createFilter(films), которая будет возвращать
//  готовый объект {films.length, watchedFilmsCount, voriteFilmsCount}

export const createNavigationTemplate = (films) => {  
  
  let favoriteFilmsCount = 0;
  let watchedFilmsCount  = 0;
  
  films.forEach(film => {
      if (film.userDetails.favorite === true)
          favoriteFilmsCount += 1;
      if (film.userDetails.alreadyWatched === true)
          watchedFilmsCount += 1;
  });

    return `<nav class="main-navigation">
    <div class="main-navigation__items">
      <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
      <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${films.length}</span></a>
      <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">${watchedFilmsCount}</span></a>
      <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${favoriteFilmsCount}</span></a>
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`
};
