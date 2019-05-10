<template>
  <div id="editProfile">
    <div class="ui middle aligned center aligned grid">
      <div class="column">
        <h2 class="ui orange image header">
          <img src="https://i.ibb.co/2qhS8Yv/social-34-5126-removebg.png" class="image">
          <br>
          <div class="content orange">
            Your profile
          </div>
        </h2>
        <form class="ui large form" id="profileForm">
          <div class="field">
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input type="text" name="firstname" placeholder="Firstname" v-model="firstName">
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="home icon"></i>
              <input type="text" name="lastname" placeholder="Lastname" v-model="lastName">
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="envelope icon"></i>
              <input type="text" name="postcode" placeholder="Postcode" v-model="postCode">
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="phone icon"></i>
              <input type="text" name="phone" placeholder="Phone No." v-model="phoneNumber">
            </div>
          </div>
          <div class="ui error message">
          </div>
        </form>
        <button class="ui orange submit button" v-on:click="submit">
          Submit
        </button>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    data() {
      return {
        firstName: null,
        lastName: null,
        phoneNumber: null,
        postCode: null
      }
    },
    methods: {
      ...mapActions({
        setProfile: "User/setProfile"
      }),
      submit() {
        let data = {
          $set: {
            firstName: this.firstName,
            lastName: this.lastName,
            phoneNumber: this.phoneNumber,
            postCode: this.postCode
          }
        };
        this.setProfile(data)
        this.$router.push('/matches')
      }
    }
  };
</script>
<style>
  #editProfile {
    margin-top: 30px;
    margin-left: 5%;
    margin-right: 5%;
  }

  .column {
    max-width: 450px;
  }
</style>
