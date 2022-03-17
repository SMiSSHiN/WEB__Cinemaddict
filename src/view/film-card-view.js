import dayjs from 'dayjs';

export const createFilmCardTemplate = (film) => {
  const activeButtonClass = 'film-card__controls-item--active';

  const { filmInfo, comments } = film;
  const { userDetails } = film;
  const { title, totalRating, release, runtime, genre, poster, description } = filmInfo;

  return `<article class="film-card">
    <h3 class="film-card__title">${title}</h3>
    <p class="film-card__rating">${totalRating}</p>
    <p class="film-card__info">
      <span class="film-card__year">${release.date}</span>
      <span class="film-card__duration">${dayjs().format('h[h] mm[m]')}</span>
      <span class="film-card__genre">${genre}</span>
    </p>
    <img src="./images/posters/${poster}" alt="" class="film-card__poster">
    <p class="film-card__description">${description}</p>
    <a class="film-card__comments">${comments.length} comments</a>
    <div class="film-card__controls">
      <button class="film-card__controls-item film-card__controls-item--add-to-watchlist ${userDetails.watchlist ? activeButtonClass : ''}" type="button">Add to watchlist</button>
      <button class="film-card__controls-item film-card__controls-item--mark-as-watched ${userDetails.alreadyWatched ? activeButtonClass : ''}" type="button">Mark as watched</button>
      <button class="film-card__controls-item film-card__controls-item--favorite ${userDetails.favorite ? activeButtonClass : ''}" type="button">Mark as favorite</button>
    </div>
  </article>`
};
