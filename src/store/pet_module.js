import {PetsService} from '../resource'

const petModule = {
  namespaced: true,
  state: {
    message: 'Vue.js Advance Boilerplate',
    pets: []
  },
  mutations: {
    SET_MESSAGE(state, message) {
      state.message = message
    },
    SET_PETS(state, pets) {
      console.log(pets)
      state.pets = pets
    }
  },
  actions: {
    async getPets({commit, state}, message) {
      let response = await PetsService.getAll()
      commit('SET_PETS', response.data)
    },
    async getById({commit, state}, id) {
      let response = await PetsService.getById(id);
      return response.data
    }
  },
  getters: {
    getPets(state) {
      return state.pets
    }
  }
}

export default petModule
