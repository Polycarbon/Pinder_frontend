import {PetsService} from '../resource'

const petModule = {
  namespaced: true,
  state: {
    message: 'Vue.js Advance Boilerplate',
    pets: null,
    pet_index: 0
  },
  mutations: {
    SET_MESSAGE(state, message) {
      state.message = message
    },
    SET_PETS(state, pets) {
      state.pets = pets
    },
    NEXT_PET(state) {
      state.pet_index += 1
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
    },
    nextPet({commit, state}) {
      commit('NEXT_PET')
    }
  },
  getters: {
    getPets(state) {
      return state.pets
    },
    getCurrent(state) {
      if (state.pets !== null) {
        console.log("p_id:" + state.pet_index);
        console.log("p_size:" + state.pets.length);
        if (state.pet_index < state.pets.length) {
          return state.pets[state.pet_index]
        } else {
          return "out of index"
        }
      }
    }
  }
}

export default petModule
