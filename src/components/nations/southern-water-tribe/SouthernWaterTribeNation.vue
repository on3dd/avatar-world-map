<template>
  <g class="nation southern-water-tribe">
    <Settlements/>
    <SouthernTundra/>
    <TheShipwreck/>
    <IceFloes/>
  </g>
</template>

<script lang="ts">
  import {Component} from 'vue-property-decorator';
  import Nation from "@/components/nations/nation";
  import TheShipwreck from "./regions/TheShipwreck.vue";
  import SouthernTundra from "./regions/SouthernTundra.vue";
  import IceFloes from "./regions/IceFloes.vue";
  import Settlements from "./regions/Settlements.vue";

  @Component({
    components: {
      Settlements,
      SouthernTundra,
      TheShipwreck,
      IceFloes
    }
  })
  export default class SouthernWaterTribeNation extends Nation {};
</script>

<style lang="scss">
  @import "../../../scss/nation";
  @include nation
</style>
