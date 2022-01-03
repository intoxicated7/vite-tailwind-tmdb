import axios from 'axios'

const API_URL = 'https://api.themoviedb.org/3'
const API_KEY = 'ee9090b2c6944693ad4efa0be4ac9cd5'

const state = {
  tv: [],
  popularTv: [],
  ratedTv: [],
  airingToday: []
};

const actions = {
    getTv({ commit }, itemId) {
    axios.get(`${API_URL}/tv/${itemId}?api_key=${API_KEY}&language=ru`)
      .then(response => {
        commit('SET_TV', response.data)
        console.log(response.data)
      })
  },
  getPopularTv({ commit }) {
    axios.get(`${API_URL}/tv/popular?api_key=${API_KEY}&language=ru`)
      .then(response => {
        commit('SET_POPULAR_TV', response.data.results)
        console.log(response.data.results)
      })
  },
  getRatedTv({ commit }) {
    axios.get(`${API_URL}/tv/top_rated?api_key=${API_KEY}&language=ru`)
      .then(response => {
        commit('SET_RATED_TV', response.data.results)
        console.log(response.data.results)
      })
  },
  getAiringToday({ commit }) {
    axios.get(`${API_URL}/tv/airing_today?api_key=${API_KEY}&language=ru`)
      .then(response => {
        commit('SET_AIRING_TODAY', response.data.results)
        console.log(response.data.results)
      })
  }
};

const mutations = {
  SET_TV(state, tv) {
    state.tv = tv
  },
  SET_POPULAR_TV(state, tv) {
    state.popularTv = tv
  },
  SET_RATED_TV(state, tv) {
    state.ratedTv = tv
  },
  SET_AIRING_TODAY(state, tv) {
    state.airingToday = tv
  },
};

const getters = {
  tv: (state) => state.tv,
  popularTv: (state) => state.popularTv,
  ratedTv: (state) => state.ratedTv,
  airingToday: (state) => state.airingToday
};

export default {
  state,
  actions,
  mutations,
  getters
}