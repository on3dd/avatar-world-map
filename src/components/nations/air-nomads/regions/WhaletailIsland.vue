<template>
  <g @mousemove="mouseOver" @mouseleave="mouseLeave">
    <path class="land"
      d="m 1840.3722,1645.0469 -26.9914,6.7938 -26.2569,37.641 0.1836,13.2203 7.7119,9.3643 8.6299,3.4887 9.1807,-2.9378 9.3644,-14.1384 4.9576,-12.1185 8.8135,-2.0198 19.6468,1.6525 15.24,8.4463 -1.4689,14.6892 3.4887,10.4661 9.548,5.692 35.0704,8.2627 15.0564,-10.8333 1.2853,-19.4632 4.5904,-13.5875 5.8757,-6.7937 13.5875,0.1836 7.5282,-13.2203 10.6497,-4.9576 -6.9774,-12.1186 -34.7032,-7.161 -33.9688,21.2994 0.1836,9.1807 c 0,0 -4.4067,3.1215 -3.8559,2.2034 0.5509,-0.9181 -4.4067,-8.0791 -4.4067,-8.0791 l -15.9745,-2.2033 -11.2005,4.2231 -14.322,-15.0564 0.7345,-4.9576 z"
      id="whaletail-island"
      inkscape:connector-curvature="0"/>
  </g>
</template>

<script lang="ts">
  import {Component} from "vue-property-decorator";
  import Region from "@/components/nations/region";

  @Component
  export default class WhaletailIsland extends Region {
    protected name = 'Whaletail Island';
  };
</script>
