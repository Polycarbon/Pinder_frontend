import {UserService} from '../resource'
import axios from 'axios'
const userModule = {
  namespaced: true,
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: null
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
    set_user(state, user) {
      state.user = user
    }
  },
  actions: {
    async fetchUser({commit, state}, data) {
      let result = await UserService.getById(data)
      // commit('SET_USER', result.data)
    },
    login({commit}, user) {
      commit('auth_request')
      UserService.loginUser(user)
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
    async verifyToken({state, commit}) {
      let data = {
        token: state.token
      };
      let res = await UserService.verifyToken(data);
      localStorage.setItem('token', res.data.token);
      commit('auth_success', res.data)
    },
    logout({commit}) {
      return new Promise((resolve, reject) => {
        commit('logout')
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
        resolve()
      })
    },
    async getUser({state, commit}) {
      let response = await UserService.fetchUser(state.user._id);
      commit('set_user', response.data)
    },
    async like({state, commit}, data) {
      data.user_id = state.user._id
      state.user.like.push(data.pet_id)
      console.log(state.user.like)
      await UserService.like(data);
    },
    async dislike({state, commit}, data) {
      data.user_id = state.user._id
      state.user.dislike.push(data.pet_id)
      await UserService.dislike(data);
    },
    async setProfile({state, commit}, data) {
      let p = {
        criteria: {
          _id: state.user._id
        },
        data: data,
        opts: {
          multi: false
        }
      };
      let msg = await UserService.setProfile(p);

    },
    async setting({state, commit}, data) {
      let s = {
        criteria: {
          _id: state.user._id
        },
        data: data,
        opts: {
          multi: false
        }
      };
      let msg = await UserService.setting(s);

    }

  },
  getters: {
    // isLoggedIn: state => true,
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    getUser: state => state.user,
    getFavList: state => state.user.like

  }
};

export default userModule
