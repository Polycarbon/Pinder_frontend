import {PetsService} from '../resource'

const petModule = {
  namespaced: true,
  state: {
    pets: null,
    pet_index: 0
  },
  mutations: {
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
    },
    async getByList({commit, state}, data) {
      let response = await PetsService.getByList(data);
      return response.data
    }
  },
  getters: {
    getPets(state) {
      return state.pets
    },
    getCurrent(state) {
      if (state.pets !== null) {
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
