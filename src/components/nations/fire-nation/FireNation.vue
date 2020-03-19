<template>
  <g class="nation fire-nation">
    <PatolaMountains/>
    <BlackCliffs/>
    <YonRhasVillage/>
    <CrescentIsland/>
    <JangHuiVillage/>
    <ShuJingVillage/>
    <HotSpringCove/>
    <NamelessFireNationIsland1/>
    <RokusIsland/>
    <FireFountainCity/>
    <EmberIsland/>
    <BoilingRock/>
    <SunWarriorRuins/>
    <GreatGatesOfAzulon/>
    <FireNationCapital/>
  </g>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import PatolaMountains from "./regions/PatolaMountains.vue";
  import FireNationCapital from "./regions/FireNationCapital.vue";
  import HotSpringCove from "./regions/HotSpringCove.vue";
  import RokusIsland from "./regions/RokusIsland.vue";
  import BoilingRock from "./regions/BoilingRock.vue";
  import SunWarriorRuins from "./regions/SunWarriorRuins.vue";
  import ShuJingVillage from "./regions/ShuJingVillage.vue";
  import JangHuiVillage from "./regions/JangHuiVillage.vue";
  import EmberIsland from "./regions/EmberIsland.vue";
  import CrescentIsland from "./regions/CrescentIsland.vue";
  import BlackCliffs from "./regions/BlackCliffs.vue";
  import NamelessFireNationIsland1 from "./regions/NamelessFireNationIsland1.vue";
  import YonRhasVillage from "./regions/YonRhasVillage.vue";
  import GreatGatesOfAzulon from "./regions/GreatGatesOfAzulon.vue";
  import FireFountainCity from "./regions/FireFountainCity.vue";

  @Component({
    components: {
      PatolaMountains,
      BlackCliffs,
      YonRhasVillage,
      CrescentIsland,
      JangHuiVillage,
      ShuJingVillage,
      HotSpringCove,
      NamelessFireNationIsland1,
      RokusIsland,
      FireFountainCity,
      EmberIsland,
      BoilingRock,
      SunWarriorRuins,
      GreatGatesOfAzulon,
      FireNationCapital,
    }
  })
  export default class FireNation extends Vue {};
</script>

<style scoped>

</style>
