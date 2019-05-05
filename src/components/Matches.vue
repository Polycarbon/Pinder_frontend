<template>
  <div class="ui segment">
      <div class="ui centered link cards">
                <div class="card">
                <div class="image">
                    <img src = "../assets/logo.png" >
                </div>
                <div class="content">
                <div class=" left aligned header">AAAA AAAA</div>
                <div class="description">
                   <!-- <a> Mobile: {{auser.mobileNO}} </a><br>
                   <a> Email: {{auser.email}}</a> <br>
                   <a> Facebook: {{auser.facebook}}</a> <br> -->
                </div>
                </div>
                </div>
                </div>
      <div class="ui red button" @click="popup">
        noop
      </div>          
      <div class="ui blue button" @click="popup">
        matches
      </div>
    
    <!-- if match it's show modal that performed information who you match -->
    <div class="ui modal">
      <i class="close icon"></i>
      <div class="header">
        Profile Picture
      </div>
      <div class="image content">
        <div class="ui medium image">
          <img src="/images/avatar/large/chris.jpg">
        </div>
        <div class="description">
          <div class="ui header">We've auto-chosen a profile image for you.</div>
          <p>We've grabbed the following image from the <a href="https://www.gravatar.com" target="_blank">gravatar</a> image associated with your registered e-mail address.</p>
          <p>Is it okay to use this photo?</p>
        </div>
      </div>
      <div class="actions">
        <div class="ui black deny button">
          Nope
        </div>
        <div class="ui positive right labeled icon button">
          Yep, that's me
          <i class="checkmark icon"></i>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
/* eslint-disable */
  import axios from "axios"
  export default {
  name: 'Match',
  data(){
    return{
      Users:[]
    }
  },
  methods: {
    popup () {
      $('.ui.modal')
        .modal("show")
    }
  }
}
</script>

<style scoped>

</style>
