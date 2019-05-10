<template>
  <div id="signUp">
    <div class="ui middle aligned center aligned grid">
      <div class="column">
        <h2 class="ui orange image header">
          <img src="https://i.ibb.co/2qhS8Yv/social-34-5126-removebg.png" class="image">
          <br>
          <div class="content">
            SignUp
          </div>
        </h2>
        <form class="ui large form">
          <div class="field">
            <div class="ui left icon input">
              <i class="mail icon"></i>
              <input type="email" name="email" id="email" placeholder="example@mail.com" v-model="email">
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input type="text" name="username" id="username" placeholder="Username" v-model="username">
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input type="password" name="password" placeholder="Password" id="checkpass1" v-model="password">
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input type="password" name="repassword" placeholder="Re-Enter-Password" id="checkpass2"
                     v-model="cf_password">
            </div>
          </div>
          <div class="ui orange fluid large submit button" @click="submit">Sign Up</div>
          <div class="ui error message"></div>
        </form>
        <div class="ui message">
          Already have an account? <a href="#/signin">Sign In</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: 'SignUp',
    data() {
      return {
        email: null,
        username: null,
        password: null,
        cf_password: null
      }
    },
    methods: {
      ...mapActions({
        register: 'User/register'
      }),
      submit() {
        if (this.password === this.cf_password) {
          let data = {
            email: this.email,
            username: this.username,
            password: this.password
          };
          this.register(data).then(res => {
            alert("register complete")
          }).catch(err => {
            alert("username or email already exist.")
          })

        } else {
          alert("password not match")
        }
      }
    }
  }
</script>

<style scoped>
  #signUp {
    margin-top: 50px;
    margin-left: 5%;
    margin-right: 5%;
  }

  body {
    background-color: #DADADA;
  }

  body > .grid {
    height: 100%;
  }

  .column {
    max-width: 450px;
  }
</style>
