<template>
  <g class="nation northern-water-tribe">
    <NorthernTundra/>
    <Outskirts/>
    <SpiritOasis/>
    <NorthernWaterTribe/>
  </g>
</template>

<script lang="ts">
  import {Component} from 'vue-property-decorator';
  import Nation from "@/components/nations/nation";
  import NorthernTundra from "./regions/NorthernTundra.vue";
  import Outskirts from "./regions/Outskirts.vue";
  import SpiritOasis from "./regions/SpiritOasis.vue";
  import NorthernWaterTribe from "./regions/NorthernWaterTribe.vue";

  @Component({
    components: {
      NorthernTundra,
      Outskirts,
      SpiritOasis,
      NorthernWaterTribe,
    }
  })
  export default class NorthernWaterTribeNation extends Nation {};
</script>

<style lang="scss">
  @import "../../../scss/nation";
  @include nation
</style>
