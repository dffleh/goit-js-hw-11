import { getRefs } from './getRefs';

const refs = getRefs();

export function clearGalleryDiv() {
    return (refs.div.innerHTML = '');
}

export async function renderGalleryDiv(data) {
    const photoCard = data.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        return `<div class="photo-card">
        <a class="photo-card__item" href="${largeImageURL}">
          <img class="photo-card__image" src="${webformatURL}" alt="${tags}" loading="lazy"/></a>
            <div class="info">
              <p class="info-item">
                <b>Likes</b><br>
                ${likes}
              </p>
              <p class="info-item">
                <b>Views</b><br>
                ${views}
              </p>
              <p class="info-item">
                <b>Comments</b><br>
                ${comments}
              </p>
              <p class="info-item">
                <b>Downloads</b><br>
                ${downloads}
              </p>
            </div>
      </div>`
    }).join('');

  return refs.gallery.insertAdjacentHTML('beforeend', photoCard);
};