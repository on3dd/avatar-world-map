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
    <g class="nation northern-water-tribe">
      <NorthernTundra/>
      <Outskirts/>
      <SpiritOasis/>
      <NorthernWaterTribe/>
    </g>

    <g class="nation southern-water-tribe">
      <Settlements/>
      <SouthernTundra/>
      <TheShipwreck/>
      <IceFloes/>
    </g>

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

    <g class="nation air-nomads">
      <AirTempleIsland/>
      <NorthernAirTemple/>
      <EasternAirTemple/>
      <WesternAirTemple/>
      <SouthernAirTemple/>
      <WhaletailIsland/>
    </g>

    <g class="nation united-republic-of-nations">
      <RepublicCity/>
    </g>

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
  </svg>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import NorthernTundra from './regions/NorthernTundra.vue';
  import Outskirts from './regions/Outskirts.vue';
  import SpiritOasis from './regions/SpiritOasis.vue';
  import Settlements from './regions/Settlements.vue';
  import SouthernTundra from './regions/SouthernTundra.vue';
  import TheShipwreck from './regions/TheShipwreck.vue';
  import IceFloes from './regions/IceFloes.vue';
  import NorthernWaterTribe from './regions/NorthernWaterTribe.vue';
  import PatolaMountains from './regions/PatolaMountains.vue';
  import WhaletailIsland from './regions/WhaletailIsland.vue';
  import BlackCliffs from './regions/BlackCliffs.vue';
  import YonRhasVillage from './regions/YonRhasVillage.vue';
  import CrescentIsland from './regions/CrescentIsland.vue';
  import JangHuiVillage from './regions/JangHuiVillage.vue';
  import ShuJingVillage from './regions/ShuJingVillage.vue';
  import HotSpringCove from './regions/HotSpringCove.vue';
  import NamelessFireNationIsland1 from './regions/NamelessFireNationIsland1.vue';
  import RokusIsland from './regions/RokusIsland.vue';
  import FireFountainCity from './regions/FireFountainCity.vue';
  import EmberIsland from './regions/EmberIsland.vue';
  import BoilingRock from './regions/BoilingRock.vue';
  import SunWarriorRuins from './regions/SunWarriorRuins.vue';
  import GreatGatesOfAzulon from './regions/GreatGatesOfAzulon.vue';
  import FireNationCapital from './regions/FireNationCapital.vue';
  import AirTempleIsland from './regions/AirTempleIsland.vue';
  import NorthernAirTemple from './regions/SouthernAirTemple.vue';
  import EasternAirTemple from './regions/EasternAirTemple.vue';
  import WesternAirTemple from './regions/WesternAirTemple.vue';
  import SouthernAirTemple from './regions/SouthernAirTemple.vue';
  import RepublicCity from './regions/RepublicCity.vue';
  import KyoshiIsland from './regions/KyoshiIsland.vue';
  import NamelessEarthNationIsland1 from './regions/NamelessEarthNationIsland1.vue';
  import NamelessEarthNationIsland2 from './regions/NamelessEarthNationIsland2.vue';
  import NamelessEarthNationIsland3 from './regions/NamelessEarthNationIsland3.vue';
  import NamelessEarthNationIsland4 from './regions/NamelessEarthNationIsland4.vue';
  import Abbey from './regions/Abbey.vue';
  import WulongForest from './regions/WulongForest.vue';
  import Provinces from './regions/Provinces.vue';
  import MtMakapu from './regions/MtMakapu.vue';
  import TakuRuins from './regions/TakuRuins.vue';
  import CrystalCatacombs from './regions/CrystalCatacombs.vue';
  import TheGreatDivide from './regions/TheGreatDivide.vue';
  import SerpentsPass from './regions/SerpentsPass.vue';
  import LakeLaogai from './regions/LakeLaogai.vue';
  import HeiBaisForest from './regions/HeiBaisForest.vue';
  import KolauMountains from './regions/KolauMountains.vue';
  import Omashu from './regions/Omashu.vue';
  import TheSwamp from './regions/TheSwamp.vue';
  import SiWongDesert from './regions/SiWongDesert.vue';
  import TheLibrary from './regions/TheLibrary.vue';
  import BaSingSe from './regions/BaSingSe.vue';

  @Component({
    components: {
      NorthernTundra,
      Outskirts,
      SpiritOasis,
      Settlements,
      SouthernTundra,
      TheShipwreck,
      IceFloes,
      NorthernWaterTribe,
      PatolaMountains,
      WhaletailIsland,
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
      AirTempleIsland,
      NorthernAirTemple,
      EasternAirTemple,
      WesternAirTemple,
      SouthernAirTemple,
      RepublicCity,
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
  export default class Map extends Vue {
  };
</script>

<style scoped lang="scss">
  @import '../scss/region.scss';

  svg {
    overflow: visible;
  }
</style>
