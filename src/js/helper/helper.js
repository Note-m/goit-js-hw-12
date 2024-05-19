export const ShowLoader = loader => {
  loader.classList.remove('display-none');
};

export const HideLoader = loader => {
  loader.classList.add('display-none');
};
export const ShowLoadMoreBtn = loadMore => {
  loadMore.classList.remove('load-more-none');
};
export const HideLoadMoreBtn = loadMore => {
  loadMore.classList.add('load-more-none');
};
export const DisableSearchBtn = searchBtn => {
  searchBtn.classList.add('btn-search-disable');
};
export const EnableSearchBtn = searchBtn => {
  searchBtn.classList.remove('btn-search-disable');
};
// export default function ShowLoadMoreBtn() {
//   const loadMore = document.querySelector('.load-more');
//   loadMore.classList.remove('load-more-none');
// }
