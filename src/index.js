import { getUser } from './API/server-request';
import imgListTamplate from './components/imgList.hbs';

let search = 'cat';

const galleryListRef = document.querySelector('.gallery');
const searchFormRef = document.querySelector('.search-form');

searchFormRef.addEventListener('submit', sabmitFormOn);

// let isDataLoading = false;
function sabmitFormOn(evt) {
  evt.preventDefault();

  const { currentTarget: formRef } = evt;
  //   if (isDataLoading) return;
  //   isDataLoading = true;

  const formData = new FormData(formRef);
  const body = '';

  formData.forEach((value, kay) => {
    body[kay] = search;
    requestUser(value); //поисковый запрос
  });
}

const renderImg = hits => {
  const listimg = hits.map(hit => {
    const {
      webformatURL,
      largeImageURL,
      tags,
      likes,
      views,
      comments,
      downloads,
    } = hit;
    return {
      webformatURL,
      likes,
      tags,
      views,
      comments,
      largeImageURL,
      downloads,
    };
  });

  galleryListRef.innerHTML = imgListTamplate(listimg);
}; // отрисовка страницы

async function requestUser(pr) {
  try {
    const dataRequest = await getUser(pr);
    renderImg(dataRequest); // рендер принемает данные сервера
  } catch (error) {
    console.log('Ошибка');
  }
} // запрос на сервер промис
