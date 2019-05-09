import Vue from 'vue'
import Vuex from 'vuex'
import UserModule from './user_module'
import PetModule from './pet_module'

// Make vue aware of Vuex
Vue.use(Vuex)

const modules = {
  User: UserModule,
  Pet: PetModule
}

// Combine the initial state and the mutations to create a Vuex store.
// This store can be linked to our app.
export default new Vuex.Store({
  modules
})
