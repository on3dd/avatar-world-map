<template>
  <svg
    xmlns:dc="http://purl.org/dc/elements/1.1/"
    xmlns:cc="http://creativecommons.org/ns#"
    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
    xmlns:svg="http://www.w3.org/2000/svg"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
    xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
    version="1.1"
    id="svg3791"
    viewBox="0 0 3840 2560"
    sodipodi:docname="world-map.svg"
    inkscape:version="0.92.4 5da689c313, 2019-01-14"
  >
    <NorthernWaterTribeNation/>
    <SouthernWaterTribeNation/>
    <FireNation/>
    <AirNomadsNation/>
    <UnitedRepublicOfNations/>
    <EarthKingdomNation/>
  </svg>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import NorthernWaterTribeNation from './nations/northern-water-tribe/NorthernWaterTribeNation.vue';
  import SouthernWaterTribeNation from './nations/southern-water-tribe/SouthernWaterTribeNation.vue';
  import FireNation from "./nations/fire-nation/FireNation.vue";
  import AirNomadsNation from "./nations/air-nomads/AirNomadsNation.vue";
  import UnitedRepublicOfNations from "./nations/united-republic-of-nations/UnitedRepublicOfNations.vue";
  import EarthKingdomNation from "./nations/earth-kingdom/EarthKingdomNation.vue";

  @Component({
    components: {
      NorthernWaterTribeNation,
      SouthernWaterTribeNation,
      FireNation,
      AirNomadsNation,
      UnitedRepublicOfNations,
      EarthKingdomNation,
    }
  })
  export default class Map extends Vue {};
</script>

<style scoped lang="scss">

</style>
