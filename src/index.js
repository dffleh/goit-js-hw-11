// import './css/styles.css'

import scroll from "./scroll";
import Notiflix from "notiflix";
import { getRefs } from "./getRefs";
import { fetchFoto } from "./fetchFoto";
import { clearGalleryDiv, renderGalleryDiv } from "./renderFunction";



const refs = getRefs();

// let lightbox = new SimpleLightbox('.photo-link', {
//   captions: true,
//   captionDelay: 200,
//   captionsData: 'alt',
// });

let pageforBtn = 1;
let totalHitsValue = '';
let submitValue = '';

refs.searchForm.addEventListener('submit', onSubmit);
refs.loadMoreBtn.addEventListener('click', loadMore);

async function onSubmit(event) {
    event.preventDefault()
    submitValue = event.target.searchQuery.value.trim();
    console.dir(event.target);
    pageforBtn = 1;

    if (!submitValue) {
        clearGalleryDiv();
        return;
    }
    const response = await fetchFoto(submitValue,pageforBtn)
    currentHits = response.hits.length;
    console.dir(response);
    
    if (response.totalHits > 0) {
        clearGalleryDiv() 
        Notiflix.Notify.success(`Hooray! We found ${response.totalHits} images.`)
        Notiflix.Notify.success('Slava Ukraine');
        renderGalleryDiv(response.hits);
    }

    if (response.totalHits > 40) {
        refs.loadMoreBtn.classList.remove('is-hidden');
      } else {
        refs.loadMoreBtn.classList.add('is-hidden');
      }


    if (response.totalHits === 0) {
        clearGalleryDiv();
        Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
        Notiflix.Notify.success('Slava Ukraine'); 
        refs.loadMoreBtn.classList.add('is-hidden');
     }
}

async function loadMore() {
    pageforBtn +=1;
    const response = await fetchFoto(submitValue, pageforBtn);
    renderGalleryDiv(response.hits);
    currentHits += response.hits.length;

    if (currentHits >= response.totalHits) {
        refs.loadMoreBtn.classList.add('is-hidden');
        Notify.info("We're sorry, but you've reached the end of search results.");
      }
}

