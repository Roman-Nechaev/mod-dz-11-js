import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getUser } from './API/server-request';
import imgListTamplate from './components/imgList.hbs';
import PaxaBayServiseApi from './API/photo-servis-api';
import LoadMoreBtn from './components/load-more-btn';

const galleryListRef = document.querySelector('.gallery');
const searchFormRef = document.querySelector('.search-form');
const loadMoreBtnHtml = document.querySelector('.load-more');

const paxaBayServiseApi = new PaxaBayServiseApi();

const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});

// loadMoreBtn.enable(); // состояние активной кнопки
// loadMoreBtn.disable(); //состояние неактивной кнопки
// loadMoreBtn.show(); // показать кнопку
// loadMoreBtn.hide();  // скрыть кнопку

searchFormRef.addEventListener('submit', sabmitFormOn);
// loadMoreBtnHtml.addEventListener('click', OnLoadMoreQuery);
loadMoreBtn.refs.button.addEventListener('click', onLoadMore);

function onLoadMore(evt) {
  loadMoreBtn.disable(); //состояние неактивной кнопки

  paxaBayServiseApi.fetchImg().then(data => {
    appendImgListTamplate(data);
    if (data.hits.length === 0) {
      console.log('А на этом все ');

      loadMoreBtn.hide(); // скрыть кнопку
      Notify.info('Сожалеем, но вы достигли конца результатов поиска.');
    }
    loadMoreBtn.enable(); // состояние активной кнопки
  });
}

function sabmitFormOn(evt) {
  evt.preventDefault();

  const search = evt.currentTarget.elements.searchQuery.value;
  if (search === '') {
    console.log('поиск пуст');
    return Notify.failure('Введите запрос');
  } else {
    console.log('Поиск не пуст');
    paxaBayServiseApi.query = search;
    paxaBayServiseApi.resetPage(); // сброс страницы

    paxaBayServiseApi.fetchImg().then(hits => {
      clearImgListContainer(); // очищает форму перед новым запросом поиска
      appendImgListTamplate(hits);
      loadMoreBtn.enable(); // состояние активной кнопки

      if (hits.total === 0) {
        loadMoreBtn.hide(); // скрыть кнопку
        return Notify.warning('По Вашему запросу ничего не найдено.');
      } else {
        loadMoreBtn.show(); // показать кнопку

        Notify.success(`Мы нашли ${hits.total} зображений`);
        console.log(`количество изображений ${hits.total}`);
      }
    });
  }
}

// function OnLoadMoreQuery() {
//   paxaBayServiseApi.fetchImg().then(appendImgListTamplate);
//   paxaBayServiseApi.fetchImg().then(data => {
//     if (data.hits.length === 0) {
//       console.log('А на этом все ');
//     }
//   });
// }

function appendImgListTamplate(hits) {
  galleryListRef.insertAdjacentHTML('beforeend', imgListTamplate(hits));
}

function clearImgListContainer() {
  galleryListRef.innerHTML = '';
}
