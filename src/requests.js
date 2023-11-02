const baseUrl = process.env.REACT_APP_BASE_URL;
const APIKey = process.env.REACT_APP_API_KEY;

const requests = {
  getTrending: `${baseUrl}/trending/all/week?api_key=${APIKey}&language=en-US`,
  getNetflixOriginals: `${baseUrl}/discover/tv?api_key=${APIKey}&with_networks=213`,
  getTopRated: `${baseUrl}/movie/top_rated?api_key=${APIKey}&language=en-US`,
  getPopular: `${baseUrl}/movie/popular?api_key=${APIKey}&language=en-US`,
  getAction: `${baseUrl}/discover/movie?api_key=${APIKey}&with_genres=28`,
  getComedy: `${baseUrl}/discover/movie?api_key=${APIKey}&with_genres=35`,
  getHorror: `${baseUrl}/discover/movie?api_key=${APIKey}&with_genres=27`,
  getCrime: `${baseUrl}/discover/movie?api_key=${APIKey}&with_genres=80`,
};

export default requests;
