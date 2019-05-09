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
    auth_success(state, token, user) {
      state.status = 'success'
      state.token = token
      state.user = user
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
          const token = res.data.token;
          const user = res.data.user;
          localStorage.setItem('token', token);
          console.log(res.data)
          // Add the following line:
          UserService.setHeader({
            key: 'Authorization',
            value: token
          });
          commit('auth_success', token, user)
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
    isLoggedIn: state => {
      return !!state.token
    },
    authStatus: state => state.status,
  }
};

export default userModule
