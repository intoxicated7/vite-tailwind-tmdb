import { createStore } from 'vuex'
import movie from './modules/movie.js'
import tv from './modules/tv.js'
import person from './modules/person.js'
import auth from './modules/auth.js'

const store = createStore({
  state: {},
  actions: {},
  mutations: {},
  modules: {
    movie,
    tv,
    person,
    auth
  }
})

export default store