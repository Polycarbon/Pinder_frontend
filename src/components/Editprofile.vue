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
        <br><br><br>

        <form class="ui large form" id="profileForm">
          <!-- firstName -->
          <div class="field"  v-if="checkFirstname == true">
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input type="text" name="firstname" placeholder="Firstname" v-model="firstName">
            </div>
          </div>
          <div class="field error"  v-if="checkFirstname == false">
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input type="text" name="firstname" placeholder="Firstname" v-model="firstName">
            </div>
          </div>
          <!-- lastName -->
          <div class="field" v-if="checkLastname == true">
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input type="text" name="lastname" placeholder="Lastname" v-model="lastName">
            </div>
          </div>
          <div class="field error" v-if="checkLastname == false">
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input type="text" name="lastname" placeholder="Lastname" v-model="lastName">
            </div>
          </div>
          <!-- postcode -->
          <div class="field" v-if="checkPostcode == true">
            <div class="ui left icon input">
              <i class="envelope icon"></i>
              <input type="text" name="postcode" placeholder="Postcode" v-model="postCode">
            </div>
          </div>
          <div class="field error" v-if="checkPostcode == false">
            <div class="ui left icon input">
              <i class="envelope icon"></i>
              <input type="text" name="postcode" placeholder="Postcode" v-model="postCode">
            </div>
          </div>
          <!-- phoneNumber -->
          <div class="field" v-if="checkPhone == true">
            <div class="ui left icon input">
              <i class="phone icon"></i>
              <input type="text" name="phone" placeholder="Phone No." v-model="phoneNumber">
            </div>
          </div>
          <div class="field error" v-if="checkPhone == false">
            <div class="ui left icon input">
              <i class="phone icon"></i>
              <input type="text" name="phone" placeholder="Phone No." v-model="phoneNumber">
            </div>
          </div>  
        </form>
        <br><br>
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
        postCode: null,
        checkFirstname: true,
        checkLastname: true,
        checkPostcode: true,
        checkPhone: true
      }
    },
    methods: {
      ...mapActions({
        setProfile: "User/setProfile"
      }),
      // submit data and go to matches path
      submit() {
        let data = {
          $set: {
            firstName: this.firstName,
            lastName: this.lastName,
            phoneNumber: this.phoneNumber,
            postCode: this.postCode
          }
        };
        if (
        this.firstName != null &&
        this.lastName != null &&
        this.phoneNumber != null &&
        this.postCode != null
      ) {
        this.setProfile(data)

        this.checkFirstname = true
        this.checkLastname = true
        this.checkPostcode = true
        this.checkPhone = true

        this.$router.push('/profile')
        window.location.reload();
        } else {
        if (this.firstName == null) this.checkFirstname = false;
        if (this.lastName == null) this.checkLastname = false;
        if (this.phoneNumber == null) this.checkPhone = false;
        if (this.postCode == null) this.checkPostcode = false;
      }
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
