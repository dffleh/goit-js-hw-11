// import './css/styles.css'
// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";
import scroll from "./scroll";
import Notiflix from "notiflix";
import { getRefs } from "./getRefs";
import { fetchFoto } from "./fetchFoto";
import { clearGalleryDiv } from "./renderFunction";


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
// refs.loadMoreBtn.addEventListener('click', loadMoreClk);

async function onSubmit(event) {
    event.preventDefault()
    submitValue = event.target.searchQuery.value.trim();
    console.dir(event.target);
    pageforBtn = 1;

    if (!submitValue) {
        refs.gallery.innerHTML = '';
        return;
    }
    const response = await fetchFoto(submitValue,pageforBtn)
    currentHits = response.hits.length;

    
}


