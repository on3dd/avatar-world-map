<template>
  <g class="nation air-nomads">
    <NorthernAirTemple/>
    <EasternAirTemple/>
    <WesternAirTemple/>
    <SouthernAirTemple/>
    <WhaletailIsland/>
    <PatolaMountains/>
  </g>
</template>

<script lang="ts">
  import {Component} from 'vue-property-decorator';
  import Nation from "@/components/nations/nation";
  import NorthernAirTemple from "./regions/NorthernAirTemple.vue";
  import SouthernAirTemple from "./regions/SouthernAirTemple.vue";
  import WhaletailIsland from "./regions/WhaletailIsland.vue";
  import WesternAirTemple from "./regions/WesternAirTemple.vue";
  import EasternAirTemple from "./regions/EasternAirTemple.vue";
  import PatolaMountains from "./regions/PatolaMountains.vue";

  @Component({
    components: {
      NorthernAirTemple,
      EasternAirTemple,
      WesternAirTemple,
      SouthernAirTemple,
      WhaletailIsland,
      PatolaMountains
    }
  })
  export default class AirNomadsNation extends Nation {};
</script>

<style lang="scss">
  @import "../../../scss/nation";
  @include nation
</style>
