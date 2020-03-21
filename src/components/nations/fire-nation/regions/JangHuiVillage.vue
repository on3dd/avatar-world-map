<template>
  <g @mousemove="mouseOver" @mouseleave="mouseLeave">
    <path class="land"
      d="m 1677.6894,1060.417 20.5649,0.9181 8.0791,7.161 3.4886,8.9971 -6.7937,10.6497 -4.4068,-0.3672 -3.305,-5.3249 -24.0536,0.7345 -6.9774,-9.7316 z"
      id="fire-nation-school"
      inkscape:connector-curvature="0"/>
  </g>
</template>

<script lang="ts">
  import {Component} from "vue-property-decorator";
  import Region from "@/components/nations/region";

  @Component
  export default class JangHuiVillage extends Region {
    protected name = 'Jang Hui Village';
  };
</script>
