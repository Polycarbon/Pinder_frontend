<template>
  <div class="ui raised very padded text container segment">
  <div class="ui middle aligned center aligned grid">
  <div class="column">
    <h2 class="ui teal image header">
      <img src="https://i.ibb.co/2qhS8Yv/social-34-5126-removebg.png" class="image">
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
            <input type="text" name="username" placeholder="Username">
          </div>
        </div>
        <div class="field">
          <div class="ui left icon input">
            <i class="lock icon"></i>
            <input type="password" name="password" placeholder="Password">
          </div>
        </div>
        <div class="field">
          <div class="ui left icon input">
            <i class="lock icon"></i>
            <input type="password" name="repassword" placeholder="Re-Enter-Password">
          </div>
        </div>
    
        
        <div class="ui fluid large submit button lov">Sign Up</div>
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
  export default {
    name: 'SignUp'
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
