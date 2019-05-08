<template>
  <div class = "favourite" id="favourite">
    <p class="ui horizontal divider orange header">
        <i class="orange star icon"></i>
        Favorites
    </p>
    <div class= "ui segment">
       <div class="ui grid">
          <div
            class="eight wide column"
            id="pic"
            v-for="auser in Users"
            v-bind:key="auser.id"
          >
            <div class="ui centered link cards">
                <div class="image">
                  <img style="height: 60%;" v-bind:src="'http://api.adorable.io/avatars/285/'+auser.firstName+'.png'">
              </div>
              <div class="ui button">cccc</div>
            </div>
          </div>
        </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
/* eslint-disable */
  export default {
    name: 'favorite',
  data(){
    return{
      Users:[],
      Pets:[]
    }
  },
  methods(){

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
          console.log(user.pet)
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
  #chatlist {
    text-align: left;
    margin-left: 10%;
    margin-right: 10%;
  }
</style>
