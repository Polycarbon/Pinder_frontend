<template>
  <div class="matches" style="margin-top: 10%;">
    <div v-if="currentPet!== null">
      <div v-if="i < Pets.length">
        <div class="ui centered card" style="margin-bottom: 3%">
          <div class="medium image">
            <!-- path to profile pet page -->
            <router-link :to="{ path: 'profilepet/' + currentPet._id}">
              <a class="img">
                <img
                  class="ui medium image"
                  v-if="currentPet.pictures===null"
                  style="height: 250px;"
                  v-bind:src="'http://api.adorable.io/avatars/285/'+currentPet.name+'.png'"
                >
                <img
                  class="ui medium image"
                  style="height: 250px;"
                  v-else
                  v-bind:src="currentPet.pictures[0].large"
                >
              </a>
            </router-link>
          </div>
          <div class="content">
            <h3 class="ui left aligned header">
              <router-link :to="{ path: 'profilepet/' + currentPet._id}">
                <a class="ui left aligned petname">{{currentPet.name}}</a>
              </router-link>
            </h3>
            <div class="ui left aligned meta">
              <p>{{currentPet.gender}}</p>
            </div>
          </div>
        </div>
        <!-- dislike button -->
        <div class="ui grey button" @click="dislike">
          <i class="close icon" style="margin-left: 10%"></i>
        </div>
        <!-- like button -->
        <div class="ui orange button" @click="like">
          <i class="thumbs up outline icon" style="margin-left: 10%"></i>
        </div>
      </div>
      <div v-else>
        No Results
        </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Match",
  data() {
    return {
      i: 0,
      current: null
    };
  },
  computed: {
    ...mapGetters({
      Pets: "Pet/getPets",
      currentPet: "Pet/getCurrent"
    })
  },
  methods: {
    ...mapActions({
      fetchPets: 'Pet/getPets',
      nextPet: 'Pet/nextPet',
      likePet: 'User/like',
      dislikePet: 'User/dislike'
    }),
    like() {
      // change to next card
      this.likePet({pet_id: this.currentPet._id})
      this.nextPet()
      
    },
    dislike() {
      // change to next card
      this.dislikePet({pet_id: this.currentPet._id})
      this.nextPet()
    }
  },
  async mounted() {
    if (this.Pets === null) {
      await this.fetchPets()
    }
    await this.currentPet
  }
};
</script>

<style scoped>
</style>
