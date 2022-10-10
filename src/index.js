import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getUser } from './API/server-request';
import imgListTamplate from './components/imgList.hbs';
import PaxaBayServiseApi from './API/photo-servis-api';
let search = 'cat';

const galleryListRef = document.querySelector('.gallery');
const searchFormRef = document.querySelector('.search-form');
const loadMoreBtn = document.querySelector('.load-more');

searchFormRef.addEventListener('submit', sabmitFormOn);
loadMoreBtn.addEventListener('click', OnLoadMoreQuery);
const paxaBayServiseApi = new PaxaBayServiseApi();

function sabmitFormOn(evt) {
  evt.preventDefault();

  const search = evt.currentTarget.elements.searchQuery.value;
  if (search === '') {
    console.log('поиск пуст');
    return Notify.failure('Введите запрос');
  } else {
    console.log('  поиск не пуст');
    paxaBayServiseApi.query = search;
    paxaBayServiseApi.resetPage(); // сброс страницы
    paxaBayServiseApi.fetchImg().then(hits => {
      clearImgListContainer(); // очищает форму перед новым запросом поиска
      appendImgListTamplate(hits);
    });
  }

  paxaBayServiseApi.fetchImg().then(hits => {
    console.log(hits.total);
    if (hits.total === 0) {
      return Notify.warning('По Вашему запросу ничео не найдено.');
    } else {
      Notify.success(`Мы нашли ${hits.total} зображений`);
      console.log(`количество изображений ${hits.total}`);
    }
  });
}

function OnLoadMoreQuery() {
  paxaBayServiseApi.fetchImg().then(appendImgListTamplate);
}

function appendImgListTamplate(hits) {
  galleryListRef.insertAdjacentHTML('beforeend', imgListTamplate(hits));
}

function clearImgListContainer() {
  galleryListRef.innerHTML = '';
}
