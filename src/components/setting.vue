<template>
    <div class="ui raised very padded text container segment">
        <div class="vertical-menu segment">
        <a href="#" class="active">Home</a>
        <a href="#">Phone Number</a>
        <a href="#">Email</a>
        <a href="#">Location</a>
        <a href="#">
            <div class="slidecontainer">Maximum Distance (KM)
                <form oninput="result.value=parseInt(b.value)">
                    <input type="range" min="1" max="100" value="" class="slider" id="b" >
                    <output name="result"></output>
                </form>
            </div>
                    </a>
        <a href="#">Gender</a>
        <a href="#"><output id="myRange" ></output></a>
        </div>
    </div>
</template>
<script>
export default {};
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

