<template>
  <g @mousemove="mouseMoveHandler" @mouseleave="mouseLeaveHandler">
    <path class="land"
      d="m 1773.8229,2361.7672 -0.2769,24.4905 -17.865,12.7607 -21.9877,-0.9816 -9.0307,14.135 20.8098,36.319 0.589,22.184 69.4969,27.2884 22.184,-10.6012 18.8467,-8.8344 17.6687,-5.6932 14.7239,-2.9448 11.1902,-0.7853 14.7239,2.5521 13.3497,3.9264 19.0429,6.6749 19.043,-15.9019 19.4356,-15.1165 16.6871,-9.816 13.546,-4.908 17.865,-2.9447 18.2577,-2.3559 24.9325,-1.7668 20.6135,-2.7485 12.3681,-6.2822 5.3006,-5.497 1.1779,-6.0858 -47.5092,-9.0307 -18.6503,14.9202 -29.4478,-1.1779 -21.3988,-8.8343 -27.092,-6.4786 -26.6994,-9.0306 -7.8528,-9.4234 h -31.0184 l -24.9325,19.2393 -14.7239,-5.8896 -5.4969,5.1043 0.5889,10.9939 -11.5828,4.1227 v -10.0123 l -15.1166,1.7669 -16.6871,-15.7055 -6.8712,-12.9571 -22.9693,-4.319 z"
      id="the-shipwreck"/>
  </g>
</template>

<script lang="ts">
  import {Component} from "vue-property-decorator";
  import Region from "@/components/nations/region";

  @Component
  export default class TheShipwreck extends Region {
    protected name = 'The Shipwreck';
  };
</script>
