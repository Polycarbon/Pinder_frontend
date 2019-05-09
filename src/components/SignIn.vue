<template>
  <div class="ui raised very padded text container segment">
    <div class="ui middle aligned center aligned grid">
      <div class="column">
        <h2 class="ui  image header">
          <img src="https://i.ibb.co/2qhS8Yv/social-34-5126-removebg.png" class="image">
          <br>
          <div class="content ">
            Log-in to your account
          </div>
        </h2>
        <form class="ui large form">
          <div class="ui stacked segment">
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
            <div class="ui fluid large  submit button lov" v-on:click="submit">Login</div>
          </div>
          <div class="ui error message"></div>
        </form>
        <div class="ui message">
          New to us? <a href="#/signup">Sign Up</a>
        </div>
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
      }
    }
  }
</script>


<style scoped>
  .content {
    color: orange
  }

  .lov {
    color: white;
    background-color: orange;
    background: orange
  }

  .lov {
    color: white;
    background-color: orange

  }

  .lov:hover {

    background-color: orangered
  }

</style>
