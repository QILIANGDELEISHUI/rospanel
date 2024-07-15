<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!--使用自定义标签-->
  <Index />
</template>
 
<script>

import Index from './components/Index.vue'
 
export default {
  name: 'App',
  //定义自义的组件文件，并在组件模板中使用
  components: {
    Index
  }
}
</script>
 
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>