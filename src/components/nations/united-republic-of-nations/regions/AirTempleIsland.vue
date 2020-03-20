<template>
  <g @mousemove="mouseOver" @mouseleave="mouseLeave">
    <path
      d="m 1637.875,894.5 0.125,9.25 -7.75,13 6.875,10.5 26,-1.375 5.625,-3.5 4.125,6.5 c 0,0 10,2.375 11.125,2.375 1.125,0 11.625,-7.25 11.625,-7.25 l -4.375,-9.5 0.625,-11.875 -9.875,-5.875 -8.625,4.375 -18.125,-11.25 z"
      id="air-temple-island"
      inkscape:connector-curvature="0"/>
  </g>
</template>

<script lang="ts">
  import {Component} from "vue-property-decorator";
  import Region from "@/components/nations/region";

  @Component
  export default class AirTempleIsland extends Region {
    protected name = 'Air Temple Island';
  };
</script>
