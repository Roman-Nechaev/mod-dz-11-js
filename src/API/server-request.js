const axios = require('axios');
const KEY = '25776093-bb4fa85787ae7c355f18a58ee';
const URL = 'https://pixabay.com/api/';
export async function getUser(search) {
  try {
    const response = await axios.get(
      `${URL}?key=${KEY}&q=${search}&image_type=photo&orientation=horizontal&safesearch=true&per_page=5`
    );

    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

const test = 'yellow+flowers';

getUser(test).then(res => console.log(res.data.hits));
//  const {
//    webformatURL,
//    largeImageURL,
//    tags,
//    likes,
//    views,
//    comments,
//    downloads,
//  } = response.data.hits;
