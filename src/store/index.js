import { createStore } from 'vuex'
import axios from 'axios'
import instance from '../api'

export default createStore({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    userId: null
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading'
    },
    auth_success(state, token) {
      state.status = 'success'
      state.token = token
    },
    auth_error(state) {
      state.status = 'error'
    },
    logout(state) {
      state.status = ''
      state.token = ''
      state.userId = null
    }
  },
  actions: {
    login({commit}, user) {
      return new Promise((resolve, reject) => {
        axios.post('http://127.0.0.1:8002/auth/token/login', user)
        .then(response => {
          const token = response.data.auth_token
          localStorage.setItem('token', token)
          instance.defaults.headers.common['Authorization'] = token
          commit('auth_success', token)
          resolve(response)
        })
        .catch(err => {
          commit('auth_error')
          localStorage.removeItem('token')
          reject(err)
        })
      })
    },
    logout ({commit}) {
      return new Promise((resolve) => {
        commit('logout')
        localStorage.removeItem('token')
        delete instance.defaults.headers.common['Authorization']
        resolve()
      })
    }
  },
  modules: {
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status
  }
})
