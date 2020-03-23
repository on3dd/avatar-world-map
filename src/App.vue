<template>
  <div id="app">
    <MapComponent/>
    <TooltipComponent/>
    <DetailsComponent/>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import MapComponent from './components/MapComponent.vue';
  import TooltipComponent from './components/TooltipComponent.vue';
  import DetailsComponent from './components/DetailsComponent.vue';

  @Component({
    components: {
      MapComponent,
      TooltipComponent,
      DetailsComponent,
    },
  })
  export default class App extends Vue {}
</script>

<style lang="scss">
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    font-family: "Noto Sans", sans-serif;
  }

  body {
    padding: 0;
    margin: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: darken(#2980b9, 25%);
  }

  #app {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
