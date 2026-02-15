import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '21399489-be148a7d0b86f7d0e4ef4262d';

export async function getImagesByQuery(query) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });

  return response.data;
}
