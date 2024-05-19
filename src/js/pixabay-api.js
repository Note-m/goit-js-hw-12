const API_KEY = '33935915-442e02dd22c1a8a84f5950f15';
const BASE_URL = 'https://pixabay.com/api/';

export const PER_PAGE = 15;

import axios from 'axios';

axios.defaults.baseURL = BASE_URL;

export const fetchNewPhotos = async (query, photosPage = 1) => {
  const response = await axios.get('', {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      per_page: PER_PAGE,
      page: photosPage,
    },
  });

  return response.data;
};
