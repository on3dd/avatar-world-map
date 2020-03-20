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
  import NorthernTundra from "@/components/nations/northern-water-tribe/regions/NorthernTundra.vue";
  import Outskirts from "@/components/nations/northern-water-tribe/regions/Outskirts.vue";
  import SpiritOasis from "@/components/nations/northern-water-tribe/regions/SpiritOasis.vue";
  import NorthernWaterTribe from "@/components/nations/northern-water-tribe/regions/NorthernWaterTribe.vue";

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
