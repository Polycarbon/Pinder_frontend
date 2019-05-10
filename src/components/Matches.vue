<template>
  <div class="matches" style="margin-top: 10%;">
    {{currentPet}}
    <div class="ui centered link cards">
      <!--      <div class="ui card" style="margin-bottom: 3%" v-for="pet in Pets" v-bind:key="pet._id">-->
      <!--        <div class="medium image">-->
      <!--          <router-link :to="{ path: 'profilepet/' + pet._id}">-->
      <!--            <a class="img">-->
      <!--              <img-->
      <!--                class="ui medium image"-->
      <!--                v-if="pet.pictures===null"-->
      <!--                v-bind:src="'http://api.adorable.io/avatars/285/'+pet.name+'.png'"-->
      <!--              >-->
      <!--              <img class="ui medium image" v-else v-bind:src="pet.pictures[0].large">-->
      <!--            </a>-->
      <!--          </router-link>-->
      <!--        </div>-->
      <!--        <div class="content" >-->
      <!--          <h3 class="ui left aligned header" >-->
      <!--            <router-link :to="{ path: 'profilepet/' + pet._id}">-->
      <!--              <a class="ui left aligned petname">{{pet.name}}</a>-->
      <!--            </router-link>-->
      <!--          </h3>-->
      <!--          <div class="ui left aligned meta">-->
      <!--            <p >15 Kilometers</p>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->
    </div>
    <div class="ui basic red button" type="submit">
      <i class="close icon" style="margin-left: 10%"></i>
    </div>
    <div class="ui basic green button" type="submit" @click="popupMatch">
      <i class="thumbs up outline icon" style="margin-left: 10%"></i>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
import {mapGetters, mapActions} from 'vuex'
export default {
  name: "Match",
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters({
      Pets: 'Pet/getPets',
      currentPet: 'Pet/getCurrent',
    })
  },
  methods: {
    ...mapActions({
      fetchPets: 'Pet/getPets',
      nextPet: 'Pet/nextPet'
    }),
    popupMatch() {
      // $(".ui.modal").modal("show");
      // this.count = this.count + 1
      // console.log(this.count)
      this.nextPet()
    }
  },
  mounted() {
    if (this.Pets === null) {
      this.fetchPets()
    }
  }
};
</script>

<style scoped>
</style>
