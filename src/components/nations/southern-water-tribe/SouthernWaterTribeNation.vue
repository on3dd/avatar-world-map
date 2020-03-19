<template>
  <g class="nation southern-water-tribe">
    <Settlements/>
    <SouthernTundra/>
    <TheShipwreck/>
    <IceFloes/>
  </g>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
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
  export default class SouthernWaterTribeNation extends Vue {};
</script>

<style scoped>

</style>
