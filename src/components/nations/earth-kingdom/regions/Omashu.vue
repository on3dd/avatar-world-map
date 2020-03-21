<template>
  <g @mousemove="mouseOver" @mouseleave="mouseLeave">
  <path class="land"
      d="m 2058.5,1263.75 -24,15.5 -24.25,4.5 -19.25,27.5 18.125,48.625 6.375,1.625 18.875,-16.625 17.625,1 6.25,-6.625 -13,21 -6.625,14 -2.5,8 -0.5,8.5 4.5,14.375 9.5,15.375 11.5,11.25 18.375,10 18.25,6.625 14.125,4 19.75,20.75 7.75,-5.875 37,11.375 33.5,-12.625 31.125,8 7,-7.25 8.375,5 4.875,11.375 12.625,-2.75 12.75,-17.125 -0.875,-21.75 22.375,-9.125 4.25,-15 -9.75,-7.5 -10.875,-22.25 4.625,-18.75 -6.125,-18.125 7.375,-4.75 -6.25,-22.25 -24.625,-12.5 -11.875,-15.375 -40.75,-12.125 -3.125,-18.375 -26.75,-22.125 -15.375,6 -47.5,-12.625 -5.875,12 -17.25,2.375 -12.375,-4 z"
      id="omashu"
      inkscape:connector-curvature="0"/>
  </g>
</template>

<script lang="ts">
  import {Component} from "vue-property-decorator";
  import Region from "@/components/nations/region";

  @Component
  export default class Omashu extends Region {
    protected name = 'Omashu';
  };
</script>

