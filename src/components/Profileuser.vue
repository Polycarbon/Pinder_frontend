<template>
  <div class="ui raised very padded text container segment">
    <div>
      <div class="ui  very  container centered aligned">
        <img class="ui medium circular image centered" v-bind:src="user_data.picture.large">
      </div>
      <div class="ui header">{{user_data.username}}</div>
      <div class="description">
        {{user_data}}
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
        <button class="ui button">
          <i class="icon setting"></i>
        </button>
        <div class="or"></div>
        <button class="ui button orange">
          <i class="edit icon"></i>
        </button>
      </div>
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
    }
  }
</script>
<style>
</style>
