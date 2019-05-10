<template>
  <div class="middle aligned center aligned grid" id="setting">
    <div class="column">
      <div class="ui image header">
        <img src="https://i.ibb.co/2qhS8Yv/social-34-5126-removebg.png" class="image">
        Setting
      </div>
      <div class="ui form meta ">
        <div class="inline fields">
          <label>Gender</label>
          <select class="ui fluid selection dropdown" v-model="selectedGender">
            <option :value="null">Please select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option :value="null">Please select</option>
          </select>
        </div>
      </div>
      <div class="ui form meta">
        <div class="inline fields">
          <label>Type</label>
          <select class="ui fluid selection dropdown" v-model="selectedType">
            <option :value="null">Please select</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
          </select>
        </div>
      </div>
      <div class="ui form meta">
        <div class="inline fields">
          <label>Age</label>
          <select class="ui fluid selection dropdown" v-model="selectedAge">
            <option :value="null">Please select</option>
            <option value="Baby">Baby</option>
            <option value="Adult">Adult</option>
            <option value="Senior">Senior</option>
          </select>
        </div>
      </div>
      <div class="ui form meta">
        <div class="inline fields">
          <label>Size</label>
          <select class="ui fluid selection dropdown" v-model="selectedSize">
            <option :value="null">Please select</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
            <option value="Extra Large">Extra Large</option>
          </select>
        </div>
      </div>
      <br>
      <router-link :to="{ path: 'profile/'}">
        <button class="ui button orange" type="submit" @click="submit">Save</button>
        <button class="ui button" type="submit" onclick="window.location.href ='#/profile'">Discard</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'setting',
  data(){
    return{
      Pets:[],
      selectedGender : null,
      selectedType : null,
      selectedAge : null,
      selectedSize : null,
    }
  },
  methods: {
      ...mapActions({
        setProfile: "User/setting"
      }),
  submit() {
      let data = {
        $set: {
          gender: this.selectedGender,
          type: this.selectedType,
          age: this.selectedAge,
          size: this.selectedSize
        }
      };
      console.log(data)
      console.log(gender)
      console.log(this.selectedGender)
      this.setProfile(data)
      this.$router.push('/profile')
      window.location.reload();
    }
  }
};
</script>

<style>
  #setting {
    margin-top: 30px;
    margin-left: 5%;
    margin-right: 5%;
  }
.vertical-menu {
  width: auto px; /* Set a width if you like */
}

.vertical-menu a {
  background-color: #eee; /* Grey background color */
  color: black; /* Black text color */
  display: block; /* Make the links appear below each other */
  padding: 12px; /* Add some padding */
  width: auto px;
  text-decoration: none; /* Remove underline from links */
}

.vertical-menu a:hover {
  background-color: #ccc; /* Dark grey background on mouse-over */
}

.vertical-menu a.active {
  background-color: orange; /* Add a green color to the "active/current" link */
  color: white;
}

.slidecontainer {
  width: 100%; /* Width of the outside container */
}
</style>

