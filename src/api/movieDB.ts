import axios from 'axios';

const movieBD = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '4e4c29e6b4749484ceccdd61b57471c6',
    language: 'en-US',
  },
});

export default movieBD;
