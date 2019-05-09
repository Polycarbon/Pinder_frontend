<template>
  <!-- <div class="ui segment" style="margin-bottom: 5%;"> -->
  <div class="matches" style="margin-top: 10%;">
    <!-- test flip page 
    <div class="ui people shape">
      <div class="sides">
        <div class="side active">
          <div class="ui card">
            <div class="image">
              <img src="/images/avatar/large/steve.jpg">
            </div>
            <div class="content">
              <div class="header">Steve Jobes</div>
              <div class="meta">
                <a>Acquaintances</a>
              </div>
              <div
                class="description"
              >Steve Jobes is a fictional character designed to resemble someone familiar to readers.</div>
            </div>
            <div class="extra content">
              <span class="right floated">Joined in 2014</span>
              <span>
                <i class="user icon"></i>
                151 Friends
              </span>
            </div>
          </div>
        </div>
        <div class="side">
          <div class="ui card">
            <div class="image">
              <img src="/images/avatar/large/stevie.jpg">
            </div>
            <div class="content">
              <a class="header">Stevie Feliciano</a>
              <div class="meta">
                <span class="date">Joined in 2014</span>
              </div>
              <div
                class="description"
              >Stevie Feliciano is a library scientist living in New York City. She likes to spend her time reading, running, and writing.</div>
            </div>
            <div class="extra content">
              <a>
                <i class="user icon"></i>
                22 Friends
              </a>
            </div>
          </div>
        </div>
        <div class="side">
          <div class="ui card">
            <div class="image">
              <img src="/images/avatar/large/stevie.jpg">
            </div>
            <div class="content">
              <a class="header">Stevie Feliciano</a>
              <div class="meta">
                <span class="date">Joined in 2014</span>
              </div>
              <div
                class="description"
              >Stevie Feliciano is a library scientist living in New York City. She likes to spend her time reading, running, and writing.</div>
            </div>
            <div class="extra content">
              <a>
                <i class="user icon"></i>
                22 Friends
              </a>
            </div>
          </div>
        </div>
        <div class="side">
          <div class="ui card">
            <div class="image">
              <img src="/images/avatar/large/stevie.jpg">
            </div>
            <div class="content">
              <a class="header">Stevie Feliciano</a>
              <div class="meta">
                <span class="date">Joined in 2014</span>
              </div>
              <div
                class="description"
              >Stevie Feliciano is a library scientist living in New York City. She likes to spend her time reading, running, and writing.</div>
            </div>
            <div class="extra content">
              <a>
                <i class="user icon"></i>
                22 Friends
              </a>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <div
      class="ui centered link cards"
      style="margin-bottom: 3%"
      v-for="pet in Pets"
      v-bind:key="pet._id"
    >
      <div class="ui card">
        <div class="medium image">
          <router-link :to="{ path: 'profilepet/' + pet._id}">
            <a class="img">
              <img
                class="ui medium image"
                v-if="pet.pictures===null"
                v-bind:src="'http://api.adorable.io/avatars/285/'+pet.name+'.png'"
              >
              <img class="ui medium image" v-else v-bind:src="pet.pictures[0].large">
            </a>
          </router-link>
        </div>
        <div class="content" >
          <h3 class="ui left aligned header" >
            <router-link :to="{ path: 'profilepet/' + pet._id}">
              <a class="ui left aligned petname">{{pet.name}}</a>
            </router-link>
          </h3>
          <div class="ui left aligned meta">
            <p >15 Kilometers</p>
          </div>
        </div>
      </div>
    </div>
    <div class="ui basic red button" @click="popupUnmatch">
      <i class="close icon" style="margin-left: 10%"></i>
    </div>
    <div class="ui basic green button" @click="popupMatch">
      <i class="thumbs up outline icon" style="margin-left: 10%"></i>
    </div>

    <!-- if match it's show modal that performed information who you match -->
    <div class="ui modal">
      <i class="close icon"></i>
      <div class="header">Profile Picture</div>
      <div class="image content">
        <div class="ui medium image">
          <img src="/images/avatar/large/chris.jpg">
        </div>
        <div class="description">
          <div class="ui header">We've auto-chosen a profile image for you.</div>
          <p>
            We've grabbed the following image from the
            <a href="https://www.gravatar.com" target="_blank">gravatar</a> image associated with your registered e-mail address.
          </p>
          <p>Is it okay to use this photo?</p>
        </div>
      </div>
      <div class="actions">
        <div class="ui black deny button">Nope</div>
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
import axios from "axios";
export default {
  name: "Match",
  data() {
    return {
      Pets: []
    };
  },
  methods: {
    popupMatch() {
      $(".ui.modal").modal("show");
    },
    popupUnmatch() {}
  },
  mounted() {
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
};
</script>

<style scoped>
</style>
