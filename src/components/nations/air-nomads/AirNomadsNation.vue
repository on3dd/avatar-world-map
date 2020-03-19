<template>
  <g class="nation air-nomads">
    <AirTempleIsland/>
    <NorthernAirTemple/>
    <EasternAirTemple/>
    <WesternAirTemple/>
    <SouthernAirTemple/>
    <WhaletailIsland/>
  </g>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import AirTempleIsland from "./regions/AirTempleIsland.vue";
  import NorthernAirTemple from "./regions/NorthernAirTemple.vue";
  import SouthernAirTemple from "./regions/SouthernAirTemple.vue";
  import WhaletailIsland from "./regions/WhaletailIsland.vue";
  import WesternAirTemple from "./regions/WesternAirTemple.vue";
  import EasternAirTemple from "./regions/EasternAirTemple.vue";

  @Component({
    components: {
      AirTempleIsland,
      NorthernAirTemple,
      EasternAirTemple,
      WesternAirTemple,
      SouthernAirTemple,
      WhaletailIsland,
    }
  })
  export default class AirNomadsNation extends Vue {};
</script>

<style scoped>

</style>
