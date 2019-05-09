<template>
  <div class="ui segment">
    <div class="ui segment">
      <div class="ui slide masked reveal centered aligned large image">
        <img class="visible content" v-if="Pets.pictures[0]===null" :src="'http://api.adorable.io/avatars/285/'+pet.firstName+'.png'">
        <img class="visible content" v-else  :src="Pets.pictures[0].large">
        <img class="hidden content" v-if="Pets.pictures[1].large!==null"  :src="Pets.pictures[1].large">
      </div>
    </div>
    <div class="ui segment">
      <p class="ui horizontal divider orange header">
        <i class="orange paw icon"></i>
        Profile
      </p>
        <h2 class="ui left aligned header">{{Pets.name}} , {{Pets.age}}</h2>
        
        <h3 class="ui left aligned header">About {{Pets.name}}</h3>
        <p v-if="Pets.description!==null">{{Pets.description}}</p>
        <p v-else> - </p>
        <!-- <div class="ui two column very relaxed grid">
          <div class="column">
            <br>
            <p>Petname : {{Pets.name}}</p>
            <p>Type : {{Pets.type}}</p>
            <p>Gender : {{Pets.gender}}</p>
            <p>Age : {{Pets.age}}</p>
            <br>
          </div>
          <div class="column">
            <br>
            <p>Owner Name : {{PirsstName}} {{PasstName}}</p>
            <p>Tel : {{PhosneNumber}}</p>
            <p>E-mail : {{Pmasil}}</p>
            <br>
          </div>
        </div>
        <div class="ui vertical divider">
          <i class="ui user icon"></i>
        </div> -->
      
      <p class="ui horizontal divider orange header">
        <i class="address book orange icon"></i>
        Contact
      </p>
      <h4 class="ui left aligned header" v-if="Pets.contact.address.address1!==null">Address1: {{Pets.contact.address.address1}}</h4>
      <h4 class="ui left aligned header" v-else>address1: -</h4>
      <h4 class="ui left aligned header" v-if="Pets.contact.address.address2!==null">Address2: {{Pets.contact.address.address2}}</h4>
      <h4 class="ui left aligned header" v-else>address2: -</h4>
      <h4 class="ui left aligned header" v-if="Pets.contact.address.city!==null">City: {{Pets.contact.address.city}}</h4>
      <h4 class="ui left aligned header" v-else>City: -</h4>
      <h4 class="ui left aligned header" v-if="Pets.contact.address.state!==null">State: {{Pets.contact.address.state}}</h4>
      <h4 class="ui left aligned header" v-else>State: -</h4>
      <h4 class="ui left aligned header" v-if="Pets.contact.address.postcode!==null">Postcode: {{Pets.contact.address.postcode}}</h4>
      <h4 class="ui left aligned header" v-else>Postcode: -</h4>
      <h4 class="ui left aligned header" v-if="Pets.contact.address.country!==null">Country: {{Pets.contact.address.country}}</h4>
      <h4 class="ui left aligned header" v-else>Country: -</h4>
      <h4 class="ui left aligned header" v-if="Pets.contact.email!==null">Email: {{Pets.contact.email}}</h4>
      <h4 class="ui left aligned header" v-else>Email: -</h4>
      <h4 class="ui left aligned header" v-if="Pets.contact.phone!==null">Tel: {{Pets.contact.phone}}</h4>
      <h4 class="ui left aligned header" v-else>Tel: -</h4>
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
  name: "Profileuser",
  data() {
    return {
      Users: [],
      Pets:[{
        name: "",
        size: "",
        description: "",
        pet_id: "",
        type: "",
        species: "",
        age: "",
        gender: "",
        status: "",
        contact: ""
      }]
    };
  },
  methods: {
    popupMatch() {
      $(".ui.modal").modal("show");
    },
    popupUnmatch() {}
  },
  mounted(){
     var url = "http://localhost:3000/user/"
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