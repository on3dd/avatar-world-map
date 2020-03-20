<template>
  <g @mousemove="mouseOver" @mouseleave="mouseLeave">
    <path
      d="m 1094.5285,1459.2286 8.8135,-8.4463 19.2796,7.3446 18.5451,-6.2429 23.3191,5.1412 8.6299,-0.7344 6.4265,-6.0593 14.6892,14.6892 7.3446,7.8954 3.305,13.4039 0.3673,17.627 -0.7345,10.8333 -4.9576,9.9152 -7.8954,9.7316 -19.096,0.1836 -2.9378,2.5706 -1.8362,8.4463 -9.7316,4.774 -15.24,3.4887 -15.4237,0.5508 -21.8501,-19.0959 3.305,-12.3022 3.3051,-14.5056 -0.1836,-16.1581 -2.0198,-10.8333 -5.5084,-8.9971 z"
      id="yon-rhas-village"
      inkscape:connector-curvature="0"/>
  </g>
</template>

<script lang="ts">
  import {Component} from "vue-property-decorator";
  import Region from "@/components/nations/region";

  @Component
  export default class YonRhasVillage extends Region {
    protected name = "Yon Rha's Village";
  };
</script>
