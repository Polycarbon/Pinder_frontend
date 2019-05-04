<template>
  <div id="app">
    <div class="ui center aligned container">
      <div class="ui three columns grid secondary pointing icon menu">
        <a class="column middle aligned item" href="#/profile">
          <i class="big user icon"></i>
        </a>
        <a class="column middle aligned  item" href="#/matches">
          <i class="big fire icon"></i>
        </a>
        <a class="column middle aligned  item" href="#/chat">
          <i class="big conversation icon"></i>
        </a>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
