// [+] Генерировать массив
// [+] Сделать film-card-view.js шаблоном
// [+] Сделать film-popup.js шаблоном 
// [ ]  - добавить отрисовку комментариев

import dayjs from 'dayjs';

import { getRandomInteger } from '../utils/utils.js';

const generateName = () => {
    const names = [
        'The Dance of Life',
        'Sagebrush Trail',
        'The Man with the Golden Arm',
        'Santa Claus Conquers the Martians',
        'Popeye the Sailor Meets Sindbad the Sailor',
        'The Great Flamarion',
        'Made for Each Other'
    ];

    const randomIndex = getRandomInteger(0, names.length - 1);

    return names[randomIndex];
};

const generatePoster = () => {
    const posters = [
        'the-dance-of-life.jpg',
        'sagebrush-trail.jpg',
        'the-man-with-the-golden-arm.jpg',
        'santa-claus-conquers-the-martians.jpg',
        'popeye-meets-sinbad.png',
        'the-great-flamarion.jpg',
        'made-for-each-other.png'
    ];

    const randomIndex = getRandomInteger(0, posters.length - 1);

    return posters[randomIndex];
};

const generateDescription = () => {
    const MIN_LENGTH = 1;
    const MAX_LENGTH = 5;

    const descriptions = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Cras aliquet varius magna, non porta ligula feugiat eget.',
        'Fusce tristique felis at fermentum pharetra.',
        'Aliquam id orci ut lectus varius viverra.',
        'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
        'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
        'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
        'Sed sed nisi sed augue convallis suscipit in sed felis.',
        'Aliquam erat volutpat.',
        'Nunc fermentum tortor ac porta dapibus.',
        'In rutrum ac purus sit amet tempus.'
    ]; 

    var randomDescriptions = descriptions.slice();

    const randomLength = getRandomInteger(MIN_LENGTH, MAX_LENGTH);
    for (let i = 0; i < descriptions.length - randomLength; i++)
        randomDescriptions.splice(getRandomInteger(randomDescriptions.length - 1), 1);

    return randomDescriptions;
};

const generateCommentsIds = () => {
    const commentsIds = [];

    for(let i = 0; i < getRandomInteger(0, 5); i++)
        commentsIds.push(i);

    return commentsIds;
};

const generateRating = () => {
    return getRandomInteger(10, 100) / 10;
};

const generateHumanNames = (several = false) => {
    const names = [
        'Alejandro Gonsales Inarritu',
        'Robert Zemeckis',
        'Stephen Spielberg',
        'Quentin Tarantino',
        'Martin Scorsese',
        'Hayao Miazaki',
        'Robert Rodrigues',
        'Brad Bird',
        'Robert De Niro',
        'Michael Caine',
        'Leonardo DiCaprio',
        'Matt Damon',
        'Christian Bale',
        'Edward Norton',
        'Takeshi Kitano',
        'Gary Oldman',
        'Tom Hanks',
        'Harrison Ford',
        'Ralph Fiennes'
    ];

    if (!several) {
        const randomIndex = getRandomInteger(0, names.length - 1);

        return names[randomIndex];
    }

    const humanNames = [];

    const randomLength = getRandomInteger(1, 5);
    for (let i = 0; i < randomLength; i++) {
        humanNames.push(
            names[getRandomInteger(0, names.length - 1)]
        );
    }

    return humanNames;
};

const generateGenres = () => {
    const genres = [
        'Action',
        'Animation',
        'Thriller',
        'Sci-Fi'
    ];

    const randomGenres = genres.slice();

    const randomLength = getRandomInteger(1, genres.length - 1);
    for (let i = 0; i < genres.length - randomLength; i++) {
        randomGenres.splice(getRandomInteger(0, randomGenres.length - 1), 1)
    }

    return randomGenres;
};

const generateDate = () => {
    const maxYearsGap = 100;
    const randomYearsGap = getRandomInteger(-maxYearsGap, 1);

    // return dayjs().add(randomYearsGap, 'year').format('YYYY/MM/DD h:mm');
    return dayjs().add(randomYearsGap, 'year').format('DD MMMM YYYY');
};

// const generateComment = () => {    
//     const comments = [
//         'Interesting setting and a good cast',
//         'Booooooooooring',
//         'Very very old. Meh',
//         'Almost two hours? Seriously?'
//     ];

//     const emotions = [
//         'smile',
//         'sleeping',
//         'puke',
//         'angry'
//     ];

//     const randomAuthorsIndex = getRandomInteger(0, authors.length - 1);
//     const randomCommentIndex = getRandomInteger(0, comments.length - 1);
//     const randomEmotionsIndex = getRandomInteger(0, emotions.length - 1);

//     // const MAX_GAP = 6;  
//     // const randomDateGap = getRandomInteger(-MAX_GAP, 0);
//     // const randomDate = dayjs().add(randomDateGap, 'month').format('YYYY-MM-DDTHH:mm:ssZ[Z]');

//     return {
//         author: authors[randomAuthorsIndex],
//         comment: comments[randomCommentIndex],
//         date: "2019-05-11T16:12:32.554Z",
//         emotion: emotions[randomEmotionsIndex]
//     };
// };

export const generateFilm = () => {
    const alreadyWatched = Boolean(getRandomInteger(0, 1));
    const watchingDate = alreadyWatched === true ? dayjs().format('YYYY-MM-DDTHH:mm:ssZZ[Z]') : null;

    return {
        filmInfo: {
            title: generateName(),
            totalRating: generateRating(),
            poster: generatePoster(),
            ageRating: 0,
            director: generateHumanNames(), 
            writers: generateHumanNames(true),                      // Array
            actors: generateHumanNames(true),                       // Array
            release: {
                date: generateDate(),
                releaseCountry: 'Russia'
            },
            runtime: getRandomInteger(15, 380),
            genre: generateGenres(),                                // Array
            description: generateDescription(),                     // Array
        },
        userDetails: {
            watchlist: Boolean(getRandomInteger(0, 1)),
            alreadyWatched,
            watchingDate, 
            favorite: Boolean(getRandomInteger(0, 1))
        },
        comments: generateCommentsIds()                             // Array
    };
};
