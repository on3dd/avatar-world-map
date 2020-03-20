<template>
  <g class="nation united-republic-of-nations">
    <AirTempleIsland/>
    <RepublicCity/>
  </g>
</template>

<script lang="ts">
  import {Component} from "vue-property-decorator";
  import Nation from "@/components/nations/nation";
  import RepublicCity from "./regions/RepublicCity.vue";
  import AirTempleIsland from './regions/AirTempleIsland.vue';

  @Component({
    components: {
      AirTempleIsland,
      RepublicCity,
    }
  })
  export default class UnitedRepublicOfNations extends Nation {};
</script>

<style lang="scss">
  @import "../../../scss/nation";
  @include nation
</style>
