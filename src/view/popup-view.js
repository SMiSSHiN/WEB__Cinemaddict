import { createElement } from "../render.js";

const FILM = {
    filmInfo: {
        title: "Popeye the Sailor Meets Sindbad the Sailor",
        totalRating: 1.9,
        poster: "made-for-each-other.png",
        ageRating: 0,
        director: "Christian Bale",
        writers: ["Tom Hanks"],
        actors: [
            "Brad Bird",
            "Michael Caine",
            "Robert De Niro",
            "Robert Zemeckis",
            "Robert Rodrigues"
        ],
        release: {
            date: "18 March 1984",
            releaseCountry: "Russia"
        },
        runtime: 103,
        genre: ["Action"],
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Cras aliquet varius magna, non porta ligula feugiat eget.",
            "Fusce tristique felis at fermentum pharetra."
        ]
    },
    userDetails: {
        watchlist: true,
        alreadyWatched: false,
        watchingDate: null,
        favorite: true
    },
    comments: [0, 1]
}

const createGenreMarkup = (genre) => {
  const genreMarkup = [];
  
  genre.forEach((element) => {
    genreMarkup.push(`<span class="film-details__genre">${element}</span>`);
  });

  return genreMarkup.join('\n');
};

const createActiveButtonClass = (isActive) => {
  if (isActive)
    return 'film-details__control-button--active'

  return ''
};

// Дописать..
const createCommentTemplate = (film) => {
  
};

// Дописать...
const createCommentsTemplate = () => {

};

const createPopupDetailsTemplate = (film) => {
  const { filmInfo } = film;
  const { poster, ageRating, title, totalRating, director, writers, actors, release, runtime, genre, description } = filmInfo;
  const { date, releaseCountry } = release;

  return `<div class="film-details__info-wrap">
  <div class="film-details__poster">
    <img class="film-details__poster-img" src="./images/posters/${poster}" alt="">
    <p class="film-details__age">${ageRating}+</p>
  </div>

  <div class="film-details__info">
    <div class="film-details__info-head">
      <div class="film-details__title-wrap">
        <h3 class="film-details__title">${title}</h3>
        <p class="film-details__title-original">Original: ${title}</p>
      </div>

      <div class="film-details__rating">
        <p class="film-details__total-rating">${totalRating}</p>
      </div>
    </div>

    <table class="film-details__table">
      <tbody><tr class="film-details__row">
        <td class="film-details__term">Director</td>
        <td class="film-details__cell">${director}</td>
      </tr>
      <tr class="film-details__row">
        <td class="film-details__term">Writers</td>
        <td class="film-details__cell">${writers.join(', ')}</td>
      </tr>
      <tr class="film-details__row">
        <td class="film-details__term">Actors</td>
        <td class="film-details__cell">${actors.join(', ')}</td>
      </tr>
      <tr class="film-details__row">
        <td class="film-details__term">Release Date</td>
        <td class="film-details__cell">${date}</td>
      </tr>
      <tr class="film-details__row">
        <td class="film-details__term">Runtime</td>
        <td class="film-details__cell">${runtime}</td>
      </tr>
      <tr class="film-details__row">
        <td class="film-details__term">Country</td>
        <td class="film-details__cell">${releaseCountry}</td>
      </tr>
      <tr class="film-details__row">
        <td class="film-details__term">Genres</td>
        <td class="film-details__cell">
          ${createGenreMarkup(genre)}
      </tr>
    </tbody></table>

    <p class="film-details__film-description">
      ${description}
    </p>
  </div>
  </div>`
};

// Добавить отрисовку комментариев
export const createPopupTemplate = (film) => {
  return `<section class="film-details">
    <form class="film-details__inner" action="" method="get">
      <div class="film-details__top-container">
        <div class="film-details__close">
          <button class="film-details__close-btn" type="button">close</button>
        </div>
        ${createPopupDetailsTemplate(film)}
        <section class="film-details__controls">
          <button type="button" class="film-details__control-button ${createActiveButtonClass(film.userDetails.watchlist)} film-details__control-button--watchlist" id="watchlist" name="watchlist">Add to watchlist</button>
          <button type="button" class="film-details__control-button ${createActiveButtonClass(film.userDetails.alreadyWatched)} film-details__control-button--watched" id="watched" name="watched">Already watched</button>
          <button type="button" class="film-details__control-button ${createActiveButtonClass(film.userDetails.favorite)} film-details__control-button--favorite" id="favorite" name="favorite">Add to favorites</button>
        </section>
      </div>
  
      <div class="film-details__bottom-container">
        <section class="film-details__comments-wrap">
          <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">4</span></h3>
  
          <ul class="film-details__comments-list">
            <li class="film-details__comment">
              <span class="film-details__comment-emoji">
                <img src="./images/emoji/smile.png" width="55" height="55" alt="emoji-smile">
              </span>
              <div>
                <p class="film-details__comment-text">Interesting setting and a good cast</p>
                <p class="film-details__comment-info">
                  <span class="film-details__comment-author">Tim Macoveev</span>
                  <span class="film-details__comment-day">2019/12/31 23:59</span>
                  <button class="film-details__comment-delete">Delete</button>
                </p>
              </div>
            </li>
            <li class="film-details__comment">
              <span class="film-details__comment-emoji">
                <img src="./images/emoji/sleeping.png" width="55" height="55" alt="emoji-sleeping">
              </span>
              <div>
                <p class="film-details__comment-text">Booooooooooring</p>
                <p class="film-details__comment-info">
                  <span class="film-details__comment-author">John Doe</span>
                  <span class="film-details__comment-day">2 days ago</span>
                  <button class="film-details__comment-delete">Delete</button>
                </p>
              </div>
            </li>
            <li class="film-details__comment">
              <span class="film-details__comment-emoji">
                <img src="./images/emoji/puke.png" width="55" height="55" alt="emoji-puke">
              </span>
              <div>
                <p class="film-details__comment-text">Very very old. Meh</p>
                <p class="film-details__comment-info">
                  <span class="film-details__comment-author">John Doe</span>
                  <span class="film-details__comment-day">2 days ago</span>
                  <button class="film-details__comment-delete">Delete</button>
                </p>
              </div>
            </li>
            <li class="film-details__comment">
              <span class="film-details__comment-emoji">
                <img src="./images/emoji/angry.png" width="55" height="55" alt="emoji-angry">
              </span>
              <div>
                <p class="film-details__comment-text">Almost two hours? Seriously?</p>
                <p class="film-details__comment-info">
                  <span class="film-details__comment-author">John Doe</span>
                  <span class="film-details__comment-day">Today</span>
                  <button class="film-details__comment-delete">Delete</button>
                </p>
              </div>
            </li>
          </ul>
  
          <div class="film-details__new-comment">
            <div class="film-details__add-emoji-label"></div>
  
            <label class="film-details__comment-label">
              <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
            </label>
  
            <div class="film-details__emoji-list">
              <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile">
              <label class="film-details__emoji-label" for="emoji-smile">
                <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
              </label>
  
              <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
              <label class="film-details__emoji-label" for="emoji-sleeping">
                <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
              </label>
  
              <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke">
              <label class="film-details__emoji-label" for="emoji-puke">
                <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
              </label>
  
              <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry">
              <label class="film-details__emoji-label" for="emoji-angry">
                <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
              </label>
            </div>
          </div>
        </section>
      </div>
    </form>
  </section>`
};

export default class PopupView {
    constructor(film = FILM) {
        this._film = film;
        this._element = null;
    }

    get element() {
        if(!this._element) {
            this._element = createElement(this.template);
        }

        return this._element;
    }

    get template() {
        return createPopupTemplate(this._film);
    }

    set film(film) {
        // Должна быть проверка на то, какой объект пришел в метод
        this._film = film;
        this._element = createElement(this.template);
    }

    removeElement() {
        this._element = null;
    }
}
