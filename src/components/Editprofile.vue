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
              <input type="text" name="firstname" placeholder="Firstname">
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="home icon"></i>
              <input type="text" name="lastname" placeholder="Lastname">
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="envelope icon"></i>
              <input type="text" name="postcode" placeholder="Postcode">
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="phone icon"></i>
              <input type="text" name="phone" placeholder="Phone No.">
            </div>
          </div>
          <button class="ui orange submit button" v-on:click="submit">
            Submit
          </button>
          <div class="ui error message">
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      submit() {
        console.log("asd")
      }
    }
  };
  $('#profileForm')
    .form({
      fields: {
        firstname: {
          identifier: 'firstname',
          rules: [
            {
              type: 'empty',
              prompt: 'Please enter your firstname'
            }
          ]
        },
        lastname: {
          identifier: 'lastname',
          rules: [
            {
              type: 'empty',
              prompt: 'Please enter your lastname'
            }
          ]
        },
        postcode: {
          identifier: 'postcode',
          rules: [
            {
              type: 'empty',
              prompt: 'Please enter your postcode'
            }
          ]
        },
        phone: {
          identifier: 'phone',
          rules: [
            {
              type: 'empty',
              prompt: 'Please enter your phone'
            }
          ]
        }
      }
    })
  ;
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
