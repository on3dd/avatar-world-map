<template>
  <div id="app">
    <Map/>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Map from './components/Map.vue';

  @Component({
    components: {
      Map,
    },
  })
  export default class App extends Vue {}
</script>

<style lang="scss">
  * {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    width: 100vw;
    height: 100vh;
  }

  #app {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
