<template>
  <g @mousemove="mouseMoveHandler" @mouseleave="mouseLeaveHandler">
    <path class="land"
      d="m 1819.3554,329.46419 -17.2135,-7.35738 -10.2726,-0.97173 -10.9666,0.97173 -10.9667,4.16455 -7.9127,2.63756 -18.0464,-3.60929 -22.3497,-0.13881 -27.2085,-19.4346 -34.427,-1.66582 -0.1388,-17.62995 -19.1569,-8.05147 -14.0207,-28.87425 11.5219,-10.27257 17.3523,-3.05401 34.427,-19.98986 4.7199,-7.21857 14.9924,13.32658 10.8278,-6.66329 73.0185,10.82785 4.4422,11.93839 12.7713,-6.38565 37.7587,5.55274 11.6607,16.65822 -28.8742,18.32404 8.0514,23.32151 z"
      id="spirit-oasis"/>
  </g>
</template>

<script lang="ts">
  import {Component} from "vue-property-decorator";
  import Region from "@/components/nations/region";

  @Component
  export default class SpiritOasis extends Region {
    protected name = 'Spirit Oasis';
  };
</script>
