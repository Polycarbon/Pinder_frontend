<template>
  <div class="ui middle aligned center aligned grid" id="signIn">
    <div class="column">
      <h2 class="ui orange image header">
        <img src="https://i.ibb.co/2qhS8Yv/social-34-5126-removebg.png" class="image">
        <br>
        Sign In to your account
      </h2>
      <form class="ui large form">
        <div class="field">
          <div class="ui left icon input">
            <i class="user icon"></i>
            <input type="text" name="username" placeholder="Username" v-model="username">
          </div>
        </div>
        <div class="field">
          <div class="ui left icon input">
            <i class="lock icon"></i>
            <input type="password" name="password" placeholder="Password" v-model="password">
          </div>
        </div>
        <div class="ui orange fluid large  submit button " v-on:click="submit">Login</div>
        <div class="ui error message"></div>
      </form>
      <div class="ui message">
        New to us? <a href="#/signup">Sign Up</a>
      </div>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: 'SignIn',
    data() {
      return {
        username: null,
        password: null
      }
    },
    computed: {
      ...mapGetters({
        user_data: 'User/getUser'
      })
    },
    methods: {
      ...mapActions({
        login: 'User/login'
      }),
      submit() {
        let data = {
          username: this.username,
          password: this.password
        };
        this.login(data)
        setTimeout(() => {
          if (this.user_data.firstName === null || this.user_data.lastName === null) {
            this.$router.push('/edit')
          } else this.$router.push('/matches')

        }, 200);
      }
    }
  }
</script>

<style scoped>
  #signIn {
    margin-top: 100px;
    margin-left: 5%;
    margin-right: 5%;
  }

  body {
    background-color: #DADADA;
    margin-top: 100px;
  }

  body > .grid {
    height: 100%;
  }

  .column {
    max-width: 450px;
  }
</style>
