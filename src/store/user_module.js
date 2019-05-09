import {UserService} from '../resource'

const userModule = {
  namespaced: true,
  state: {
    name: 'Wisarut Phuvanantanond',
    user: null
  },
  mutations: {
    SET_NAME(state, name) {
      state.name = name
    },
    SET_USER(state, user) {
      state.user = user
    }
  },
  actions: {
    setName({commit, state}, name) {
      commit('SET_NAME', name)
    },
    async createUser({commit, state}, data) {
      let result = await UserService.createUser(data)
      commit('SET_NAME', result.name)
    },
    async fetchUser({commit, state}, data) {
      let result = await UserService.getById(data)
      commit('SET_USER', result.data)
    },
    async login({commit, state}, data) {
      let result = await UserService.getById(data)
      commit('SET_USER', result.data)
    }
  },
  getters: {
    getName(state) {
      return state.name
    }
  }
}

export default userModule
