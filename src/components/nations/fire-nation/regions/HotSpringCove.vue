<template>
  <g @mousemove="mouseMoveHandler" @mouseleave="mouseLeaveHandler">
    <path class="land"
      d="m 1597.2345,1114.6729 12.8536,-2.5967 5.583,8.0498 6.6216,3.6354 -10.257,27.9146 -0.5194,29.4726 -8.0498,12.4642 -11.815,-1.6879 -14.2819,-15.3205 2.0774,-6.6216 -7.0111,-13.3731 19.735,-28.4339 4.9337,-7.4006 z"
      id="hot-spring-cove"/>
  </g>
</template>

<script lang="ts">
  import {Component} from "vue-property-decorator";
  import Region from "@/components/nations/region";

  @Component
  export default class HotSpringCove extends Region {
    protected name = 'Hot Spring Cove';
  };
</script>

