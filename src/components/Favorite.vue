<template>
  <div class = "favourite" id="favourite">
    <p class="ui horizontal divider orange header">
        <i class="orange star icon"></i>
        Favorites
    </p>
    <div class= " segment" style="margin-top: 7%;">
       <div class="ui grid">

          <div
            class="eight wide tablet four wide computer column"
            id="pic"
            v-for="pet in Pets"
            v-bind:key="pet._id"
          >
          <router-link :to="{ path: 'profilepet/' + pet._id}">
            <div class="ui centered stackable link cards">
              <div class= "ui card">
                <img
                class="ui medium image" 
                v-if="pet.pictures===null"
                v-bind:src="'http://api.adorable.io/avatars/285/'+pet.name+'.png'"
              >
              <img class="ui medium image" v-else v-bind:src="pet.pictures[0].large">
              <div class="ui orange bottom attached label" v-if="pet.status ==='adopted'">{{pet.status}}</div>
              <div class="ui grey bottom attached label" v-else-if="pet.status ==='adoptable'">{{pet.status}}</div>
            
              </div>
            </div>
          </router-link>
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
      Pets:[]
    }
  },
  methods(){

  },
  mounted(){
      var url = "http://localhost:3000/pets";
    axios
      .get(url)
      .then(response => {
        console.log(response.data);
        this.Pets = response.data;
        console.log("///////////////////////////////////////////////////");
        console.log(response.data[0].size);
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
