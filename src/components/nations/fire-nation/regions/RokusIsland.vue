<template>
  <g @mousemove="mouseOver" @mouseleave="mouseLeave">
    <path
      d="m 1494.7944,1251 34.9257,-14.6714 19.9946,15.3206 1.4282,6.6216 7.6603,0.2597 8.4393,17.9173 -9.2183,18.4366 -33.3677,23.8897 -22.072,-18.6963 -18.177,-13.8924 0.5194,-4.9337 6.7514,-4.5443 4.1547,-12.594 z"
      id="rokus-island"
      inkscape:connector-curvature="0"/>
  </g>
</template>

<script lang="ts">
  import {Component} from "vue-property-decorator";
  import Region from "@/components/nations/region";

  @Component
  export default class RokusIsland extends Region {
    protected name = "Roku's Island";
  };
</script>
