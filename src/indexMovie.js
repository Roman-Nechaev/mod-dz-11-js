import { getPopuletMovies } from './API/movieApi';

// import Handlebars from './components/example.handlebars';
import templateFunction from './components/movieCard.hbs';
// document.body.innerHTML = templateFunction();
getPopuletMovies().then(({ data }) => {
  console.log(data);
});
//
