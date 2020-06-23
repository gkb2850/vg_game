<template>
  <div id="app">
    <headerBox></headerBox>
    <router-view/>
  </div>
</template>

<script>
import headerBox from '@/components/header.vue'
export default {
  name: 'App',
  components: {
    headerBox
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

  body {
    margin: 0;
    min-width: 1200px;
  }
</style>
