<template>
  <div class="ui raised very padded text container segment">
  <div class="ui middle aligned center aligned grid">
  <div class="column">
    <h2 class="ui teal image header">
      <img src="https://i.ibb.co/2qhS8Yv/social-34-5126-removebg.png" class="image" >
      <br>
      <div class="content">
        SignUp
      </div>
    </h2>
    <form class="ui large form">
      <div class="ui stacked segment">
        <div class="field">
          <div class="ui left icon input">
            <i class="user icon"></i>
            <input type="text" name="username" id="username" placeholder="Username" v-model="Users.username">
          </div>
        </div>
        <div class="field">
          <div class="ui left icon input">
            <i class="lock icon"></i>
            <input type="password" name="password" placeholder="Password" v-model="Users.password">
          </div>
        </div>
        <div class="field">
          <div class="ui left icon input">
            <i class="lock icon"></i>
            <input type="password" name="repassword" placeholder="Re-Enter-Password" v-model="Users.password">
          </div>
        </div>
    
        
        <div class="ui fluid large submit button lov" @click="createNewUser">Sign Up</div>
        
      </div>

      <div class="ui error message"></div>

    </form>

    <div class="ui message">
      Already have an account? <a href="#/signin">Sign In</a>
    </div>
  </div>
</div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios"
  export default {
    name: 'SignUp',
    data(){
      return{
      Users:{
        username: "",
        password: ""
      }
      }
    },
    methods: {
      createNewUser(){
        console.log(this.Users.username)
        console.log(this.Users.password)
        console.log(this.Users.password)
        var url = "http://localhost:3000/user"

        let userdata={
          username:this.Users.username,
          password:this.Users.password
        }
    axios
      .post(url,userdata)
      .then(response=>{
        console.log("Create Success")

      })
      
      .catch(error => {
        console.log(error);
      });
    }

         
          // alert(this.username)

      }
    
  }
</script>

<style scoped>
.content{
  color: orange


}
.lov{
  color: white;
  background-color: orange;
  background:orange
}

.lov{
  color:white;
  background-color:orange

}

.lov:hover{

  background-color:orangered
}
</style>
