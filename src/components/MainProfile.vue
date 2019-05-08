<template>
<div class="ui raised very padded text container segment">
    <div>
        <div class="ui  very  container centered aligned">
    <img class="ui medium circular image centered" src=" https://semantic-ui.com/images/avatar/large/daniel.jpg">
        </div>
     <div class="meta">
        <a>Friends</a>
      </div>
      <div class="description">
        Matthew is an interior designer living in New York.
      
    </div>
    <div class="extra content">
      <span class="right floated">
        Joined in 2013
      </span>
      <span>
        <i class="user icon"></i>
        75 Friends
      </span>
    </div>
    <!--<hr style="width: 5px; height: 100px; background: black; border: none;" />-->
   <div class="ui buttons ">
  <button class="ui button" onclick="location.href='#/setting'"><i class="icon setting" style ="margin-left:15%"></i></button>
  <div class="or"></div>
  <button class="ui positivel button orange " onclick="location.href='#/edit'"><i class="icon edit" style ="margin-left:15%"></i></button>
</div>
    </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.divformain {
  border-radius: 50%;
}
.lovm{
  background-color: orangered

}
.setting{
  color:orange;
 

}
.edit{
  color:orange;
 

}

.button{
  background-color:orange;
  text-shadow:orange;
  color:orange
}
</style>
