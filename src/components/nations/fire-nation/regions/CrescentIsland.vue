<template>
  <g @mousemove="mouseOver" @mouseleave="mouseLeave">
    <path class="land"
      d="m 1706.8842,1093.4677 6.2429,8.0791 1.6525,7.161 6.6102,6.6101 11.5677,-8.2627 -0.1836,-4.774 -6.2429,-19.2795 -9.7316,2.7542 -6.9774,4.0395 z"
      id="crescent-island"/>
  </g>
</template>

<script lang="ts">
  import {Component} from "vue-property-decorator";
  import Region from "@/components/nations/region";

  @Component
  export default class CrescentIsland extends Region {
    protected name = 'Crescent Island';
  };
</script>
