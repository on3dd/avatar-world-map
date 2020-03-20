<template>
  <g @mousemove="mouseOver" @mouseleave="mouseLeave">
    <path
      d="m 1380.9677,1263.4951 20.0141,0.3673 16.171,-9.7463 6.4918,1.9475 12.7239,12.0747 11.815,5.5829 11.2956,1.4282 20.6439,17.3979 v 11.1659 l -3.2459,10.257 3.116,5.9724 -8.3094,11.6852 -9.9974,1.558 -12.8537,8.699 -15.1907,-0.1299 -42.3263,37.7821 -24.5389,-10.5166 -14.5416,-7.4007 -12.594,-20.9035 4.1548,-17.6576 0.779,-7.6602 -13.7626,-21.4229 7.5305,-15.5802 22.072,-2.3371 8.5691,11.1659 z"
      id="fire-fountain-city"
      inkscape:connector-curvature="0"/>
  </g>
</template>

<script lang="ts">
  import {Component} from "vue-property-decorator";
  import Region from "@/components/nations/region";

  @Component
  export default class Settlements extends Region {
    protected name = 'Settlements';
  };
</script>

