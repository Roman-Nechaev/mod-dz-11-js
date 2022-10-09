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

  paxaBayServiseApi.query = search;
  paxaBayServiseApi.resetPage(); // сброс страницы
  paxaBayServiseApi.fetchImg().then(hits => {
    clearImgListContainer(); // ощищает форму перед новым запросом поиска
    appendImgListTamplate(hits);
  });
  paxaBayServiseApi.fetchImg().then(hits => {
    console.log(hits.total);
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
