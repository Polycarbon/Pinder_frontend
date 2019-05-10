import {UserService} from '../resource'

const userModule = {
  namespaced: true,
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {}
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading'
    },
    auth_success(state, data) {
      state.status = 'success'
      state.token = data.token
      state.user = data.user
    },
    auth_error(state) {
      state.status = 'error'
    },
    logout(state) {
      state.status = ''
      state.token = ''
    },
  },
  actions: {
    async fetchUser({commit, state}, data) {
      let result = await UserService.getById(data)
      // commit('SET_USER', result.data)
    },
    login({commit}, user) {
      commit('auth_request')
      UserService.verifyUser(user)
        .then(res => {
          localStorage.setItem('token', res.data.token);
          // Add the following line:
          UserService.setHeader({
            key: 'Authorization',
            value: res.data.token
          });
          commit('auth_success', res.data)
          return ("auth_success")
        })
        .catch(err => {
          commit('auth_error')
          localStorage.removeItem('token')
        })
    },
    async register({commit}, user) {
      return await UserService.createUser(user);
    },
    logout({commit}) {
      return new Promise((resolve, reject) => {
        commit('logout')
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
        resolve()
      })
    }
  },
  getters: {
    isLoggedIn: state => true,
    // isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    getUser: state => state.user

  }
};

export default userModule
