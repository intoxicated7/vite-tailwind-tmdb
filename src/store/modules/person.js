import axios from 'axios'

const API_URL = 'https://api.themoviedb.org/3'
const API_KEY = 'ee9090b2c6944693ad4efa0be4ac9cd5'

const state = {
  person: [],
  moviePeople: [],
  personMovies: [],
  tvPeople: [],
  popularPeople: []
};

const actions = {
  getPerson({ commit }, itemId) {
    axios.get(`${API_URL}/person/${itemId}?api_key=${API_KEY}`)
      .then(response => {
        commit('SET_PERSON', response.data)
        console.log(response.data)
      })
  },
  getMoviePeople({ commit }, itemId) {
    axios.get(`${API_URL}/movie/${itemId}/credits?api_key=${API_KEY}`)
      .then(response => {
        commit('SET_MOVIE_PEOPLE', response.data)
        console.log(response.data)
      })
  },
  getPersonMovies({ commit }, itemId) {
    axios.get(`${API_URL}/person/${itemId}/movie_credits?api_key=${API_KEY}&language=ru`)
      .then(response => {
        commit('SET_PERSON_MOVIES', response.data)
        console.log(response.data)
      })
  },
  getPopularPeople({ commit }, itemId) {
    axios.get(`${API_URL}/person/popular?api_key=${API_KEY}`)
      .then(response => {
        commit('SET_POPULAR_PEOPLE', response.data.results)
        console.log(response.data.results)
      })
  }
};

const mutations = {
  SET_PERSON(state, person) {
    state.person = person
  },
  SET_PERSON_MOVIES(state, movies) {
    state.personMovies = movies
  },
  SET_MOVIE_PEOPLE(state, people) {
    state.moviePeople = people
  },
  SET_POPULAR_PEOPLE(state, people) {
    state.popularPeople = people
  },
};

const getters = {
  person: (state) => state.person,
  personMovies: (state) => state.personMovies,
  moviePeople: (state) => state.moviePeople,
  popularPeople: (state) => state.popularPeople
};

export default {
  state,
  actions,
  mutations,
  getters
}