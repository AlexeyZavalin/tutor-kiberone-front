<template>
  <nav id="nav" class="nav">
    <router-link to="/">Мои группы</router-link>
    <span v-if="isLoggedIn"> | <a @click="logout">Выход</a></span>
  </nav>
  <div class="loading" v-if="!isLoaded">
    <img src="./assets/loader.gif" alt="">
  </div>
  <router-view/>
</template>

<script>
import instance from './api'

export default {
  data() {
    return {
      isLoaded: false
    }
  },
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn
    }
  },
  methods: {
    logout: function() {
      this.$store.dispatch('logout')
      .then(() => {
        this.$router.push('/login')
      })
    },
    hideLoading: function() {
      this.isLoaded = true
    }
  },
  created() {
    instance.interceptors.response.use(undefined, function(err) {
      return new Promise(function() {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch('logout')
        }
        throw err
      })
    })
  },
  mounted() {
    setTimeout(this.hideLoading, 1000)
  }
}
</script>

<style>
  .loading {
    background-color: #3681A0;
    height: 100vh;
    width: 100%;
    position: fixed;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
