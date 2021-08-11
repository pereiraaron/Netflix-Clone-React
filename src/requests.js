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
// Alternate method
//  export requests = axios.create({
//      baseUrl: "https://api.themoviedb.org/3"
//      This will automatically set the baseUrl
//  })
// Make a get req -> axios.get(getTrending)
// When get func is called the default url will be baseUrl
// and it will be concatenated with the parameter in the get call
// This will be the final url {baseUrl(which was created using axios.create)}+{getTrending}
export default requests;
