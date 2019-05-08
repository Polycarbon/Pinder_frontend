<template>
  <div class="ui segment">
    <div class="ui segment">
      <div class="ui slide masked reveal centered aligned large image">
        <img class="visible content"  :src="Users.pet.pictures[0].large">
        <img class="hidden content"   :src="Users.pet.pictures[1].large">
      </div>
    </div>
    <div class="ui segment">
      <p class="ui horizontal divider orange header">
        <i class="orange paw icon"></i>
        Profile
      </p>
        <h2 class="ui left aligned header">{{Users.pet.name}} , {{Users.pet.age}}</h2>
        
        <h3 class="ui left aligned header">About {{Users.pet.name}}</h3>
        <p>{{Users.pet.description}}</p>
        <!-- <div class="ui two column very relaxed grid">
          <div class="column">
            <br>
            <p>Petname : {{Users.pet.name}}</p>
            <p>Type : {{Users.pet.type}}</p>
            <p>Gender : {{Users.pet.gender}}</p>
            <p>Age : {{Users.pet.age}}</p>
            <br>
          </div>
          <div class="column">
            <br>
            <p>Owner Name : {{Users.firstName}} {{Users.lastName}}</p>
            <p>Tel : {{Users.phoneNumber}}</p>
            <p>E-mail : {{Users.email}}</p>
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
};
</script>

<style scoped>
</style>