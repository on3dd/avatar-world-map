<template>
  <g @mousemove="mouseOver" @mouseleave="mouseLeave">
    <path
      d="m 2058.1499,1739.8301 c 0.9089,-0.6492 14.1521,-5.9724 14.1521,-5.9724 l 14.2819,4.5442 9.0885,-7.0111 13.7625,8.699 1.8177,10.9061 -16.2294,5.3233 -11.4255,5.9724 -6.7515,-10.5166 -12.3343,-2.0774 z"
      id="kyoshi-island"
      inkscape:connector-curvature="0"/>
  </g>
</template>

<script lang="ts">
  import {Component} from "vue-property-decorator";
  import Region from "@/components/nations/region";

  @Component
  export default class KyoshiIsland extends Region {
    protected name = 'Kyoshi Island';
  };
</script>

