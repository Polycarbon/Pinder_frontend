<template>
  <div id="app">
    <div class="ui center aligned container">
      <div class="ui three columns grid secondary pointing icon menu" v-if="isLogin">
        <a class="column middle aligned item" href="#/profile">
          <i class="big user orange icon"></i>
        </a>
        <a class="column middle aligned  item" href="#/matches">
          <i class="big fire orange icon"></i>
        </a>
        <a class="column middle aligned  item" href="#/favorite">
          <i class="big star orange icon"></i>
        </a>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapGetters({
      isLogin: 'User/isLoggedIn',
      user_data: 'User/getUser'
    })
  },
  methods: {
    ...mapActions({
      verifyToken: "User/verifyToken"
    })
  },
  async mounted() {
    if (this.user_data === null) {
      // await this.verifyToken()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
