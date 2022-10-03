import { getUser } from './API/server-request';
import imgListTamplate from './components/imgList.hbs';

search = 'dog';

const galleryListRef = document.querySelector('.gallery');

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
    console.log(webformatURL);
  });

  galleryListRef.innerHTML = imgListTamplate(listimg);
};

getUser(search).then(({ data }) => {
  const { hits } = data;
  console.log(hits);
  renderImg(hits);
});
