const axios = require('axios').default

const token = localStorage.getItem('token')

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8002/api/',
    timeout: 1000
})

if (token) {
    instance.defaults.headers.common['Authorization'] = token
}

export default instance