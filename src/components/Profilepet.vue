<template>
  <div class="ui segment">
    <div class="ui segment">
      <div class="ui slide masked reveal centered aligned large image">
        <img class="ui medium centered image" v-if="Pets.pictures!==null" v-bind:src="Pets.pictures[0].large">
        <img
          class="ui medium centered image"
          v-else
          v-bind:src="'http://api.adorable.io/avatars/285/'+Pets.name+'.png'"
        >
        
        <!-- <img class="hidden content" v-if="Pets.pictures[1].large!==null"  :src="Pets.pictures[1].large"> -->
      </div>
    </div>
    <div class="ui segment">
      <p class="ui horizontal divider orange header">
        <i class="orange paw icon"></i>
        Profile
      </p>
      <!-- <h1>{{Pets.pictures && Pets.pictures.lenght > 0 ? Pets.pictures[0].large: " "}}</h1> -->
      <div class="profile" style="margin: 5%">
        <div class=" clearing segment">
          <h3 class="ui left floated header">{{Pets.name}} , {{Pets.age}}</h3>
          <h3 class="ui right floated header" >{{Pets.gender}}</h3>
        </div>
        <br><br>
        <h4 class="ui left aligned header">About {{Pets.name}}</h4>
        <p v-if="Pets.description!==null">{{Pets.description}}</p>
        <p v-else>-</p>
        <br>
      </div>
      <p class="ui horizontal divider orange header">
        <i class="address book orange icon"></i>
        Contact
      </p>
      <div class="description" style="margin: 5%">
        <h4
          class="ui left aligned header"
          v-if="Pets.contact.address.address1!==null"
        >Address1: {{Pets.contact.address.address1}}</h4>
        <h4 class="ui left aligned header" v-else>address1: -</h4>
        <h4
          class="ui left aligned header"
          v-if="Pets.contact.address.address2!==null"
        >Address2: {{Pets.contact.address.address2}}</h4>
        <h4 class="ui left aligned header" v-else>address2: -</h4>
        <h4
          class="ui left aligned header"
          v-if="Pets.contact.address.city!==null"
        >City: {{Pets.contact.address.city}}</h4>
        <h4 class="ui left aligned header" v-else>City: -</h4>
        <h4
          class="ui left aligned header"
          v-if="Pets.contact.address.state!==null"
        >State: {{Pets.contact.address.state}}</h4>
        <h4 class="ui left aligned header" v-else>State: -</h4>
        <h4
          class="ui left aligned header"
          v-if="Pets.contact.address.country!==null"
        >Country: {{Pets.contact.address.country}}</h4>
        <h4 class="ui left aligned header" v-else>Country: -</h4>
        <h4
          class="ui left aligned header"
          v-if="Pets.contact.address.postcode!==null"
        >Postcode: {{Pets.contact.address.postcode}}</h4>
        <h4 class="ui left aligned header" v-else>Postcode: -</h4>
        <h4
          class="ui left aligned header"
          v-if="Pets.contact.email!==null"
        >Email: {{Pets.contact.email}}</h4>
        <h4 class="ui left aligned header" v-else>Email: -</h4>
        <h4
          class="ui left aligned header"
          v-if="Pets.contact.phone!==null"
        >Tel: {{Pets.contact.phone}}</h4>
        <h4 class="ui left aligned header" v-else>Tel: -</h4>
      </div>
    </div>

    <div class="ui basic red button">
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
            <a
              href="https://www.gravatar.com"
              target="_blank"
            >gravatar</a> image associated with your registered e-mail address.
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
  name: "Profilepet",
  data() {
    return {
      Users: [],
      Pets: [
        {
          // name: "",
          // size: "",
          // description: "",
          // pet_id: "",
          // type: "",
          // species: "",
          // age: "",
          // gender: "",
          // status: "",
          // contact: ""
        }
      ]
    };
  },
  methods: {
    popupMatch() {
      $(".ui.modal").modal("show");
    },
    popupUnmatch() {}
  },
  mounted() {
    var url = "http://localhost:3000/pets/";
    axios
      .get(url + this.$route.params.userId)
      .then(response => {
        console.log(response.data);
        this.Pets = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style scoped>
</style>
