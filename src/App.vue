<template>
  <div id="app">
    <headerBox></headerBox>
    <router-view/>
    <footBox></footBox>
  </div>
</template>

<script>
import headerBox from '@/components/header.vue'
import footBox from '@/components/foot.vue'

export default {
  name: 'App',
  data () {
    return {

    }
  },
  components: {
    headerBox,
    footBox
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #F7F7F7;
}

  body {
    margin: 0 auto;
    min-width: 1400px;
  }

  a {
    text-decoration: none;
    display: block;
  }
  
</style>
