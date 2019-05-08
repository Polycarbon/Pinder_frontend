<template>
  <div class="ui segment">
      <div class="ui segment">
      <div class="ui slide masked reveal centered aligned large image">
        <img class=" visible content " src = "../assets/logo.png">
        <img class="hidden content " src = "../assets/logo.png">
      </div>
      </div>
      <div class="ui basic red button" @click="popupUnmatch">
        <i class="close icon" style="margin-left: 10%"></i>
      </div>          
      <div class="ui basic green button" @click="popupMatch">
        <i class="thumbs up outline  icon" style="margin-left: 10%"></i>
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
    popupMatch () {
      $('.ui.modal')
        .modal("show")
    },
    popupUnmatch(){
      
    }
  }
}
</script>

<style scoped>

</style>