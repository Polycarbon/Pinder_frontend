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
              <img class="ui medium image" style="height: 175px;" v-else v-bind:src="pet.pictures[0].large">
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
/* eslint-disable */
import {mapGetters, mapActions} from 'vuex'
  export default {
    name: 'favorite',
  data(){
    return{
      Pets:[]
    }
  },
    computed: {
      ...mapGetters({
        favList: 'User/getFavList'
      })
    },
    methods: {
      ...mapActions({
        getFavPet: 'Pet/getByList',
      })
  },
    async mounted() {
      // show data that u fav
      let data = await this.getFavPet({list: this.favList})
      this.Pets = data

    }

  }
</script>

<style scoped>
  #favourite {
    margin-top: 25px;
    margin-left: 5%;
    margin-right: 5%;
  }

  body {
    background-color: #DADADA;
    margin-top: 100px;
  }

  body > .grid {
    height: 100%;
  }

  .column {
    max-width: 450px;
  }
</style>
