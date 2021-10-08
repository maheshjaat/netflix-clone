//typically we would store in {process.env.API_KEY}
const API_KEY ="1dda96599a87e70120c8d4a1d3d20e78";

const requests={
 fetchTrending:`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`,
 fetchNetflixOriginals:`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
 fetchTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
 fetchActionMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
 fetchComedyMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
 fetchHorrorMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
 fetchRomanceMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
 fetchDocumentaries:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
