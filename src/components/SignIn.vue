<template>
 <div class="ui raised very padded text container segment">
    <div class="ui middle aligned center aligned grid">
  <div class="column">
    <h2 class="ui  image header">
      <img src="http://pluspng.com/img-png/tinder-png-png-ico-512.png" class="image">
      <br>
      <div class="content ">
        Log-in to your account
      </div>
    </h2>
    <form class="ui large form">
      <div class="ui stacked segment">
        <div class="field">
          <div class="ui left icon input">
            <i class="user icon"></i>
            <input type="text" name="email" placeholder="E-mail address">
          </div>
        </div>
        <div class="field">
          <div class="ui left icon input">
            <i class="lock icon"></i>
            <input type="password" name="password" placeholder="Password">
          </div>
        </div>
        <div class="ui fluid large  submit button lov">Login</div>
      </div>

      <div class="ui error message"></div>

    </form>

    <div class="ui message">
      New to us? <a href="#/signup">Sign Up</a>
    </div>
  </div>
</div>
  </div>
</template>

<script>
/* eslint-disable */
  export default {
    name: 'SignIn'
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
