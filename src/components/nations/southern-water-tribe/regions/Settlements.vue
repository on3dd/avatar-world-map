<template>
  <g @mousemove="mouseOver" @mouseleave="mouseLeave">
    <path class="land"
      d="m 1548.3817,2214.0643 -63.8566,47.1983 1.3882,30.8177 -4.4422,10.8278 -23.5991,22.211 -1.1106,2.2211 39.7021,58.5814 36.9258,4.1645 13.6042,29.4296 10.5502,17.2135 8.6067,4.9974 8.6068,-1.9434 50.5299,-46.0878 34.7046,15.8253 9.7173,-1.9434 21.9334,-14.9924 7.4962,0.2776 5.8303,3.3317 7.7739,6.9409 17.7687,-16.103 27.7637,-4.7198 15.5477,-20.5451 -21.6557,-21.3781 0.8329,-24.432 -17.2135,-19.7123 -26.9307,-7.2185 -17.7688,-15.5477 -36.6481,-7.2186 -6.3857,-10.2725 -11.3831,-2.4988 -13.6042,-15.8253 -16.6582,15.2701 0.5553,22.7662 15.5476,18.6017 -7.2185,0.5552 -12.4937,-7.4962 -8.6067,-13.3265 3.054,-25.265 z"
      id="settlements"
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
