<template>
  <g @mousemove="mouseMoveHandler" @mouseleave="mouseLeaveHandler">
    <path class="land"
      d="m 1625.7982,1056.5067 24.2792,0.9088 10.7764,19.735 -4.0249,10.6465 -18.4366,13.8924 2.2072,7.5304 -12.8537,5.0636 -9.3482,-12.4642 -10.9062,-8.699 -0.2596,-5.3232 18.4366,-19.4753 z"
      id="shu-jing-village"/>
  </g>
</template>

<script lang="ts">
  import {Component} from "vue-property-decorator";
  import Region from "@/components/nations/region";

  @Component
  export default class ShuJingVillage extends Region {
    protected name = 'Shu Jing Village';
  };
</script>
