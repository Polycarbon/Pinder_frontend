<template>
  <div class="ui middle aligned center aligned grid" id="userProfile">
    <div class="column">
      <div class="ui  very  container centered aligned">
        <img class="ui small circular image centered" v-bind:src="user_data.picture.large">
      </div>
      <div class="ui header">{{user_data.username}}</div>
      <div class="description">
        <p>{{user_data.firstName}}</p>
      </div>
      <div class="extra content">
      <span class="right floated">
        Joined in 2013
      </span>
        <span>
        <i class="user icon"></i>
        75 Friends
      </span>
      </div>
      <!--<hr style="width: 5px; height: 100px; background: black; border: none;" />-->
      <div class="ui buttons ">
        <button class="ui button" v-on:click="routeToSetting">
          <i class="icon setting"></i>
        </button>
        <div class="or"></div>
        <button class="ui button orange" v-on:click="routeToEdit">
          <i class="edit icon"></i>
        </button>
      </div>
      <div class="ui button" v-on:click="logOut"><i class="sign-out icon"></i></div>
    </div>
  </div>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    name: "ProfileUser",
    computed: {
      ...mapGetters({
        user_data: 'User/getUser'
      })
    },
    methods: {
      ...mapActions({
        verifyToken: "User/verifyToken",
        logout: "User/logout"
      }),
      routeToEdit() {
        this.$router.push('/edit')
      },
      routeToSetting() {
        this.$router.push('/setting')
      },
      logOut() {
        logout()
        this.$router.push('/signin')
      }
    },
    async mounted() {
      if (this.user_data === null) {
        await this.verifyToken()
      }
    }
  }
</script>
<style>
  #userProfile {
    margin-top: 50px;
    margin-left: 5%;
    margin-right: 5%;
  }

  .column {
    max-width: 450px;
  }
</style>
