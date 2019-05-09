<template>
    <div class="ui raised very padded text container segment">
       <h2 class="ui  image header">
      <img src="https://i.ibb.co/2qhS8Yv/social-34-5126-removebg.png" class="image">
      <br>
      <div class="content ">
        Setting
      </div>
    </h2>
      
        <!-- <div class="vertical-menu segment">
          <div class="ui form">
  <div class="two fields">
    <div class="field ui left header aligned">
      <label>Display Name</label>
      <input placeholder="Display Name" type="text">
    </div>
    <div class="field ui left header aligned">
      <label>Location</label>
      <input placeholder="Location" type="text">
    </div>
  </div>
 <div class="field ui left header aligned">
    <select>
      <option value="">Gender</option>
      <option value="1">Male</option>
      <option value="0">Female</option>
    </select>
  </div>
  <div class="ui form">
  <div class="three fields">
    <div class="field ui left header aligned">
      <label>Phone Number</label>
      <input type="text" placeholder="Phone Number">
    </div>
    <div class="field ui left header aligned">
      <label>Email</label>
      <input type="text" placeholder="Email">
    </div>
    <div class="field ui left header aligned">
      <label>Address</label>
      <input type="text" placeholder="Address">
    </div>
  </div>
</div>
  
</div>
        
        <!-- <a href="#"> -->
            <!-- <div class="ui left aligned header">Maximum Distance (KM)</div>
            <div class="slidercontainer">
                <form oninput="result.value=parseInt(b.value)">
                    <input type="range" min="1" max="100" value="" class="slider" id="b" >
                    <output name="result" > </output>
                    km
                </form>
            </div>
            </div>
                    <!-- </a> -->
        
        <!-- <a href="#"><output id="myRange" ></output></a> --> 
        
<div class="ui form header ">
  <div class="inline fields">
    <label>Gender</label>
    <div class="field " style ="margin-left:11.2%">
      <div class="ui radio checkbox">
        <input type="radio"  name="fr" checked="checked">
        <label>Male</label>
      </div>
    </div>
    <div class="field" style ="margin-left:19%">
      <div class="ui radio checkbox">
        <input type="radio" name="fr">
        <label>Female</label>
      </div>
    </div>
  
    
    
  </div>
</div>
<div class="ui form header">
  <div class="inline fields">
    <label>Type</label>
    <div class="field" style ="margin-left:15%">
      <div class="ui radio checkbox">
        <input type="radio" name="frequency" checked="checked">
        <label>Dog</label>
      </div>
    </div>
    <div class="field" style ="margin-left:20%">
      <div class="ui radio checkbox">
        <input type="radio" name="frequency">
        <label>Cat</label>
      </div>
    </div>
    <div class="field " style ="margin-left:20%" >
      <div class="ui radio checkbox">
        <input type="radio" name="frequency" >
        <label>Exotic</label>
      </div>
    </div>
    

  </div>
</div>
<div class="ui form header">
  <div class="inline fields">
    <label>Age</label>
    <div class="field" style ="margin-left:16.2%">
      <div class="ui radio checkbox">
        <input type="radio" name="frequen" checked="checked">
        <label>Baby</label>
      </div>
    </div>
    <div class="field" style ="margin-left:19%">
      <div class="ui radio checkbox">
        <input type="radio" name="frequen">
        <label>Adult</label>
      </div>
    </div>
    <div class="field" style ="margin-left:18%">
      <div class="ui radio checkbox">
        <input type="radio" name="frequen">
        <label>Senior</label>
      </div>
    </div>
    
    
  </div>
</div>
<div class="ui form header " >
  <div class="inline fields">
    <label>Size</label>
    <div class="field " style ="margin-left:16%">
      <div class="ui radio checkbox">
        <input type="radio"  name="fre" checked="checked">
        <label>Small</label>
      </div>
    </div>
    <div class="field" style ="margin-left:4%">
      <div class="ui radio checkbox">
        <input type="radio" name="fre">
        <label>Medium</label>
      </div>
    </div>
    <div class="field" style ="margin-left:4%">
      <div class="ui radio checkbox">
        <input type="radio" name="fre">
        <label>Large</label>
      </div>
    </div>
    <div class="field" style ="margin-left:4%">
      <div class="ui radio checkbox ">
        <input type="radio" name="fre">
        <label>Extra Large</label>
      </div>
    </div>
    
    
  </div>
</div>
        <button class="ui  button orange">
  Save
</button>
<button class="ui button" onclick="location.href='#/profile'">
  Discard
</button>

        
        
    </div>
</template>
<script>
export default {
  methods: {},
};
</script>

<style>
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

.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 15px;
  border-radius: 5px;
  background: orange;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: orangered;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #4caf50;
  cursor: pointer;
}

</style>

