const axios = require('axios');
// const KEY = '25776093-bb4fa85787ae7c355f18a58ee';
const URL = 'https://pixabay.com/api/';
// Количество отображаемых элементов

const PAGE = 1; //Страница
let search = ''; // Строка поиска
export async function getUser(search) {
  try {
    const response = await axios.get(`${URL}`, {
      params: {
        key: '25776093-bb4fa85787ae7c355f18a58ee',
        q: search,
        per_page: 5,
        page: PAGE,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });

    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}
