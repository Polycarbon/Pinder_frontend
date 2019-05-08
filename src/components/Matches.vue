<template>
  <div class="ui segment">
      <div class="ui segment">
      <div class="ui centered link cards" style="margin-bottom: 3%" v-for="(auser,i) in Users" v-bind:key="auser._id">
          <div class="medium image" >
            <router-link  :to="{ path: 'profileuser/' + auser._id}">
            <a class="img">
              <img class="ui medium image"  v-if="auser.pet.pictures===null" v-bind:src = "'http://api.adorable.io/avatars/285/'+auser.firstName+'.png'">
            </a>
            </router-link>
          </div>
          <p>{{Pets[i].description}}</p>
          <div class="content">
          <div class=" left aligned header">
          <router-link  :to="{ path: 'profileuser/' + auser._id}">
          <a class= "petname header" >  {{auser.firstName}} {{auser.lastName}}</a>
          </router-link>
          <a class= "age right aligned header"></a>
          </div>
          <div class=" left aligned meta">
             <a>15 Kilometers</a>
          </div>
          </div>
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
      Users:[],
      Pets:[]
    }
  },
  methods: {
    popupMatch () {
      $('.ui.modal')
        .modal("show")
    },
    popupUnmatch(){

    }
  },
  mounted(){
      var url = "http://localhost:3000/user"
    axios
      .get(url)
      .then(response => {
        console.log(response.data);
        this.Users = response.data;
        console.log(this.Users)
        this.Pets = this.Users.map((user)=>{
          return user.pet
        });
        console.log(response.data[0].pet)
        console.log(response.data[0].pet.pictures[0].large)
      })
      .catch(error => {
        console.log(error);
      });
    }

    }


</script>

<style scoped>

</style>
