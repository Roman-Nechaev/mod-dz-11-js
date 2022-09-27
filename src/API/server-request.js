// const axios = require('axios');
// const KEY = '25776093-bb4fa85787ae7c355f18a58ee';
// const URL = 'https://pixabay.com/api/';
// const PER_PAGE = 5; // Количество отображаемых элементов
// const PAGE = 1; //Страница
// let search = ''; // Строка поиска
// export async function getUser(search) {
//   try {
//     const response = await axios.get(
//       `${URL}?key=${KEY}&q=${search}&image_type=photo&orientation=horizontal&safesearch=true&page=${PAGE}&per_page=${PER_PAGE}`
//     );

//     console.log(response.data);
//     return response;
//   } catch (error) {
//     console.error(error);
//   }
// }

// search = 'yellow+flowers';

// getUser(search).then(res => console.log(res.data.hits));
