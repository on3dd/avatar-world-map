<template>
  <g class="nation earth-kingdom">
    <KyoshiIsland/>
    <NamelessEarthNationIsland1/>
    <NamelessEarthNationIsland2/>
    <NamelessEarthNationIsland3/>
    <NamelessEarthNationIsland4/>
    <Abbey/>
    <WulongForest/>
    <Provinces/>
    <MtMakapu/>
    <TakuRuins/>
    <CrystalCatacombs/>
    <TheGreatDivide/>
    <SerpentsPass/>
    <LakeLaogai/>
    <HeiBaisForest/>
    <KolauMountains/>
    <Omashu/>
    <TheSwamp/>
    <SiWongDesert/>
    <TheLibrary/>
    <BaSingSe/>
  </g>
</template>

<script lang="ts">
  import {Component} from "vue-property-decorator";
  import Nation from "@/components/nations/nation";
  import KolauMountains from "./regions/KolauMountains.vue";
  import CrystalCatacombs from "./regions/CrystalCatacombs.vue";
  import SerpentsPass from "./regions/SerpentsPass.vue";
  import Omashu from "./regions/Omashu.vue";
  import TheSwamp from "./regions/TheSwamp.vue";
  import WulongForest from "./regions/WulongForest.vue";
  import SiWongDesert from "./regions/SiWongDesert.vue";
  import NamelessEarthNationIsland1 from "./regions/NamelessEarthNationIsland1.vue";
  import NamelessEarthNationIsland4 from "./regions/NamelessEarthNationIsland4.vue";
  import NamelessEarthNationIsland3 from "./regions/NamelessEarthNationIsland3.vue";
  import NamelessEarthNationIsland2 from "./regions/NamelessEarthNationIsland2.vue";
  import BaSingSe from "./regions/BaSingSe.vue";
  import MtMakapu from "./regions/MtMakapu.vue";
  import LakeLaogai from "./regions/LakeLaogai.vue";
  import Provinces from "./regions/Provinces.vue";
  import KyoshiIsland from "./regions/KyoshiIsland.vue";
  import TheGreatDivide from "./regions/TheGreatDivide.vue";
  import HeiBaisForest from "./regions/HeiBaisForest.vue";
  import TakuRuins from "./regions/TakuRuins.vue";
  import Abbey from "./regions/Abbey.vue";
  import TheLibrary from "./regions/TheLibrary.vue";

  @Component({
    components: {
      KyoshiIsland,
      NamelessEarthNationIsland1,
      NamelessEarthNationIsland2,
      NamelessEarthNationIsland3,
      NamelessEarthNationIsland4,
      Abbey,
      WulongForest,
      Provinces,
      MtMakapu,
      TakuRuins,
      CrystalCatacombs,
      TheGreatDivide,
      SerpentsPass,
      LakeLaogai,
      HeiBaisForest,
      KolauMountains,
      Omashu,
      TheSwamp,
      SiWongDesert,
      TheLibrary,
      BaSingSe,
    }
  })
  export default class EarthKingdomNation extends Nation {};
</script>

<style lang="scss">
  @import "../../../scss/nation";
  @include nation
</style>
