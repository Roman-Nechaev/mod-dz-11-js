const axios = require('axios');
import apiSrttings from './settingsMovie';

const { movieAPIUrl, movieKey } = apiSrttings;
export const getPopuletMovies = () => {
  return axios.get(`${movieAPIUrl}/movie/popular`, {
    params: {
      api_key: movieKey,
    },
  });
};

// 76ed63f80dba3e42bfe198c0806fa9ba
