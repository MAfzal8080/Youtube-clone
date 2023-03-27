import axios from 'axios'
const BASE_URL = 'https://youtube-v31.p.rapidapi.com'


const options = {
  method: 'GET',
  url: BASE_URL,
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '16803756eamsh04c2afade60c51cp1f3027jsnc3381e26dc37',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const FetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}
