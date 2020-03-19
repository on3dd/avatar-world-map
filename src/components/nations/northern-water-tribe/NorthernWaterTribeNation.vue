<template>
  <g class="nation northern-water-tribe">
    <NorthernTundra/>
    <Outskirts/>
    <SpiritOasis/>
    <NorthernWaterTribe/>
  </g>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
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
  export default class NorthernWaterTribeNation extends Vue {};
</script>

<style scoped>

</style>
