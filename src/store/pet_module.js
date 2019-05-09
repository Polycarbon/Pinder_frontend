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
      let response = await PetsService.getPets()
      commit('SET_PETS', response.data)
    },
    setMessage({commit, state}, message) {
      commit('SET_MESSAGE', message)
    },
    sendMessage({commit, state}, message) {
      PetsService.sendMessage(message)
    }
  },
  getters: {
    getPets(state) {
      return state.pets
    }
  }
}

export default petModule
