<template>
  <g @mousemove="mouseOver" @mouseleave="mouseLeave">
    <path class="land"
      d="m 1180.463,1221.9169 16.4891,-19.4753 5.4531,-7.0111 h 13.7625 l 8.5691,9.2183 7.0111,2.5967 6.7515,-0.5193 2.8564,7.2707 -7.4007,8.9587 -15.4504,4.8039 -9.7376,2.4669 -7.141,6.2321 -10.3868,-2.0774 -11.815,-9.6078 z"
      id="ember-island"/>
  </g>
</template>

<script lang="ts">
  import {Component} from "vue-property-decorator";
  import Region from "@/components/nations/region";

  @Component
  export default class EmberIsland extends Region {
    protected name = 'Ember Island';
  };
</script>

