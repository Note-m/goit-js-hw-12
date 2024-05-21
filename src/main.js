import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

//import functions
import { render } from './js/render-functions';
import { fetchNewPhotos, PER_PAGE } from './js/pixabay-api.js';
import {
  ShowLoader,
  HideLoader,
  ShowLoadMoreBtn,
  DisableSearchBtn,
  EnableSearchBtn,
  HideLoadMoreBtn,
} from './js/helper/helper.js';

const formSearch = document.querySelector('.form-search');
const imgGallery = document.querySelector('.gallery');
const searchBtn = document.querySelector('.btn-search');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more');

//big pictures builder
const builder = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsDelay: 250,
});

//search params

let totalPages = 0;
let query = '';
let photosPage = 1;

const search = async event => {
  event.preventDefault();

  // get query string
  const form = event.currentTarget;
  query = form.elements.searchWords.value.trim();

  imgGallery.innerHTML = '';
  photosPage = 1;

  //cheak is empty searchQuery
  if (query === '') {
    HideLoadMoreBtn(loadMoreBtn);
    iziToast.error({
      message: 'Field cannot be empty!',
    });
    formSearch.reset();
    return;
  }

  try {
    ShowLoader(loader);
    DisableSearchBtn(searchBtn);

    //render gallery
    const { hits, totalHits } = await fetchNewPhotos(query, photosPage);

    if (totalHits === 0) {
      EnableSearchBtn(searchBtn);

      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });

      formSearch.reset();
      HideLoader(loader);
      return;
    }
    //render gallery and add big pictures
    imgGallery.insertAdjacentHTML('beforeend', render(hits));
    smoothScroll();
    builder.refresh();

    EnableSearchBtn(searchBtn);
    // ShowLoadMoreBtn(loadMoreBtn);
    HideLoader(loader);

    totalPages = Math.ceil(totalHits / PER_PAGE);
    if (totalPages > 1) {
      // Show laod more btn
      ShowLoadMoreBtn(loadMoreBtn);
    }
    if (totalPages === 1) {
      // Show laod more btn
      HideLoadMoreBtn(loadMoreBtn);
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    }
  } catch (error) {
    //  enable search button and hide loader
    EnableSearchBtn(searchBtn);
    HideLoader(loader);

    iziToast.error({
      message: 'Search params is not valid!',
      position: 'topRight',
    });
    formSearch.reset();
    return;
  }
  formSearch.reset();
};
// -1- event (submit form(click no search btn))
formSearch.addEventListener('submit', search);

const smoothScroll = () => {
  const lastEl = document.querySelector('.photo-container:last-child');
  const photoPosHeight = lastEl.getBoundingClientRect().height;
  const scrollHeight = photoPosHeight * 2;
  window.scrollBy({
    top: scrollHeight,
    left: 0,
    behavior: 'smooth',
  });
};
const PressedBtmLoadMore = async event => {
  try {
    event.preventDefault();

    ShowLoader(loader);

    photosPage += 1;

    //render more pictures
    const { hits, totalHits } = await fetchNewPhotos(query, photosPage);

    imgGallery.insertAdjacentHTML('beforeend', render(hits));
    builder.refresh();
    smoothScroll();

    HideLoader(loader);
    if (totalHits === 0) {
      EnableSearchBtn(searchBtn);
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      formSearch.reset();
      HideLoader(loader);
      return;
    }
    totalPages = Math.ceil(totalHits / PER_PAGE);
    if (photosPage >= totalPages) {
      // Show laod more btn
      HideLoadMoreBtn(loadMoreBtn);
      loadMoreBtn.removeEventListener('click', PressedBtmLoadMore);
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
      return;
    }
  } catch (error) {
    HideLoadMoreBtn(loadMoreBtn);
    iziToast.error({
      message: "We're sorry, but you've reached the end of search results.",
      position: 'topRight',
    });
  }
};

// -2- second event(click on btn load more)
loadMoreBtn.addEventListener('click', PressedBtmLoadMore);
