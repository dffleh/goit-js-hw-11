import { getRefs } from './getRefs';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const refs = getRefs();

export function clearGalleryDiv() {
    return (refs.gallery.innerHTML = '');
}

export async function renderGalleryDiv(data) {
    const photoCard = data.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        return `<div class="gallery-card">
        <a class="gallery-card__item" href="${largeImageURL}">
          <img class="gallery-card__image" src="${webformatURL}" alt="${tags}" loading="lazy"/></a>
            <div class="info">
              <p class="info-item info-likes">
                <b>Likes</b><br>
                ${likes}
              </p>
              <p class="info-item info-views">
                <b>Views</b><br>
                ${views}
              </p>
              <p class="info-item info-comments">
                <b>Comments</b><br>
                ${comments}
              </p>
              <p class="info-item info-downloads">
                <b>Downloads</b><br>
                ${downloads}
              </p>
            </div>
      </div>`
    }).join('');

   refs.gallery.insertAdjacentHTML('beforeend', photoCard);

  let lightbox = new SimpleLightbox('.gallery-card__item', {
    captionDelay: 300,
    captionsData: 'alt',
  });
  lightbox.refresh()
};