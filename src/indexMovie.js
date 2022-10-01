import { getPopuletMovies } from './API/movieApi';

// import Handlebars from './components/movieCard.hbs';

getPopuletMovies().then(({ data }) => {
  console.log(data);
});
//
