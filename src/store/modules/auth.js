// firebase imports
import { auth } from '../../firebase/config'
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';

const state = {
  user: null
};

const mutations = {
  setUser(state, paylaod) {
    state.user = paylaod
    console.log('user state changed:', state.user)
  }
};

const actions = {
  async signup(context, { email, password }) {
    console.log('signup action')

    const res = await createUserWithEmailAndPassword(auth, email, password)
    if (res) {
      context.commit('setUser', res.user)
    } else {
      throw new Error('could not complete signup')
    }
  },
  async login(context, { email, password }) {
    console.log('login action')

    const res = await signInWithEmailAndPassword(auth, email, password)
    if (res) {
      context.commit('setUser', res.user)
    } else {
      throw new Error('could not complete login')
    }
  },
  async logout(context) {
    console.log('logout action')

    await signOut(auth)
    context.commit('setUser', null)
  }
};

const getters = {
  user: (state) => state.user,
};

export default {
  state,
  actions,
  mutations,
  getters
}