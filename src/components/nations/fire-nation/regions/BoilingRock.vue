<template>
  <g @mousemove="mouseMoveHandler" @mouseleave="mouseLeaveHandler">
    <path class="land"
      d="m 1078.9212,1081.8082 12.1186,-4.4068 10.466,10.4661 -0.5508,14.0465 -14.5056,5.233 -10.6496,-9.548 z"
      id="boiling-rock"/>
  </g>
</template>

<script lang="ts">
  import {Component} from "vue-property-decorator";
  import Region from "@/components/nations/region";

  @Component
  export default class BoilingRock extends Region {
    protected name = 'BoilingRock';
  };
</script>

