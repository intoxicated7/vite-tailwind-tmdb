import axios from 'axios'

const API_URL = 'https://api.themoviedb.org/3'
const API_KEY = 'ee9090b2c6944693ad4efa0be4ac9cd5'

const state = {
  movie: [],
  movieVideo: [],
  popularMovies: [],
  ratedMovies: [],
  topRatedMovies: [],
  upcomingMovies: []
};

const actions = {
  getMovie({ commit }, itemId) {
    axios.get(`${API_URL}/movie/${itemId}?api_key=${API_KEY}&language=ru`)
      .then(response => {
        commit('SET_MOVIE', response.data)
        console.log(response.data)
      })
  },
  getMovieVideo({ commit }, itemId) {
    axios.get(`${API_URL}/movie/${itemId}/videos?api_key=${API_KEY}&language=ru`)
      .then(response => {
        commit('SET_MOVIE_VIDEO', response.data.results)
        console.log(response.data.results)
      })
  },
  getPopularMovies({ commit }) {
    axios.get(`${API_URL}/movie/popular?api_key=${API_KEY}&language=ru`)
      .then(response => {
        commit('SET_POPULAR_MOVIES', response.data.results)
        console.log(response.data.results)
      })
  },
  getRatedMovies({ commit }) {
    axios.get(`${API_URL}/movie/top_rated?api_key=${API_KEY}&language=ru`)
      .then(response => {
        commit('SET_RATED_MOVIE', response.data.results)
        console.log(response.data.results)
      })
  },
   getUpcomingMovies({ commit }) {
    axios.get(`${API_URL}/movie/upcoming?api_key=${API_KEY}&language=ru`)
      .then(response => {
        commit('SET_UPCOMING_MOVIE', response.data.results)
        console.log(response.data.results)
      })
  }
};

const mutations = {
  SET_MOVIE(state, movie) {
    state.movie = movie
  },
  SET_MOVIE_VIDEO(state, video) {
    state.movieVideo = video
  },
  SET_POPULAR_MOVIES(state, movies) {
    state.popularMovies = movies
  },
  SET_RATED_MOVIE(state, movies) {
    state.ratedMovies = movies
  },
  SET_UPCOMING_MOVIE(state, movies) {
    state.upcomingMovies = movies
  },
};

const getters = {
  movie: (state) => state.movie,
  movieVideo: (state) => state.movieVideo,
  popularMovies: (state) => state.popularMovies,
  ratedMovies: (state) => state.ratedMovies,
  upcomingMovies: (state) => state.upcomingMovies,
};

export default {
  state,
  actions,
  mutations,
  getters
};