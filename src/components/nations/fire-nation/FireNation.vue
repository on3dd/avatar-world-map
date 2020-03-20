<template>
  <g class="nation fire-nation">
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
  import {Component} from 'vue-property-decorator';
  import Nation from "@/components/nations/nation";
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
  export default class FireNation extends Nation {};
</script>

<style lang="scss">
  @import "../../../scss/nation";
  @include nation
</style>
