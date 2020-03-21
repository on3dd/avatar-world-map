<template>
  <g @mousemove="mouseOver" @mouseleave="mouseLeave">
    <path class="land"
      d="m 1887.3765,160.93852 41.3679,-3.33164 39.1468,29.70716 3.6093,1.11055 11.6607,-0.27764 h 2.7764 l 32.7612,40.53501 4.7198,16.38058 3.8869,3.88692 22.211,19.98986 1.9434,1.66583 -21.6557,25.26496 4.4422,23.59915 -1.3882,2.77637 -40.2573,47.47593 -2.4988,1.66582 -36.648,-14.15948 -32.2059,26.65315 -33.8717,-11.66076 -9.1621,-17.49113 -24.432,-2.22109 -34.427,-23.04388 19.9898,-33.59408 -8.0514,-23.32151 28.8742,-18.32404 -11.6607,-16.65822 16.9358,-4.99747 2.4988,-23.04387 3.054,-13.04894 19.9898,-33.31644 z"
      id="outskirts"
      inkscape:connector-curvature="0"/>
    <path class="land"
      d="M 2078.4295,269.54601 2108.2699,288 l -27.092,26.11042 c 0,0 -18.8466,0.58896 -19.8282,0.58896 -0.9816,0 -9.4233,5.69325 -9.4233,5.69325 l -8.6381,-0.19632 -0.3926,-20.80981 z"
      id="path858"
      inkscape:connector-curvature="0"/>
    <path class="land"
      d="m 2118.0859,303.11656 13.3497,10.60123 3.5337,16.49079 -30.0368,0.78528 -13.1534,2.15951 L 2088.8344,320 Z"
      id="path860"
      inkscape:connector-curvature="0"/>
  </g>
</template>

<script lang="ts">
  import {Component} from "vue-property-decorator";
  import Region from "@/components/nations/region";

  @Component
  export default class Outskirts extends Region {
    protected name = 'Outskirts';
  };
</script>

