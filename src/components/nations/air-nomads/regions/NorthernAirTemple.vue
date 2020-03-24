<template>
  <g ref="group">
    <path class="land"
      d="m 2089.147,519.28984 -3.897,-14.91483 15.5,-9.25 5.625,3.5 1.125,-8 7.25,0.875 2.25,-7.5 5.125,1.5 9.75,-10.875 29,2 5.875,6.875 4.75,0.375 4.625,-13.25 4.5,1.125 5,-7.5 25.75,2.25 10.625,4 1.875,5 7.25,2.125 1.625,9.75 9,3.125 2.625,-7.125 10,0.875 12.375,-11.25 5.875,2.75 16.125,-13.25 13.25,-4.625 6.125,1.625 18.25,-4.375 25.625,-1.375 0.125,4.625 h 9 l 4.625,5.125 15.625,3.75 5.5,-3.375 7.375,-1.875 -3.5,4.75 v 11.625 l 22.25,-9.5 9.625,-18.25 -0.375,-13.5 22.25,-4.5 24,-11.25 26.625,14.75 22.75,0.5 10.125,5.625 5.875,-2.375 3.875,6.75 5.25,-1 3.5,4.125 9.25,-0.875 5,3.375 4.375,-1.375 8.125,9.375 10.25,0.25 -1.5,9.375 5.625,-0.25 1.625,5.875 5.25,0.25 2.5,11.5 4.875,0.375 1.125,5.25 h 8.75 l 3.5,8.125 1.125,13.625 -12.625,15.25 1.875,8 -6.5,6.5 1.625,7.875 10.5,13 -42.25,-0.75 -20.75,15 -11,-15.5 -22,-0.625 -23.125,30.375 -22.875,25.75 -8.75,-12.75 -14,-5.375 -13.75,12.625 -15,3.875 8.25,38.125 -17,2.625 -13.25,16.87499 -16.875,-0.625 -19.875,18.75 -25.7244,-6.22053 -28.1075,6.36396 -21.0364,-14.49569 h -36.2392 l -50.5582,42.95674 -42.2496,-0.88388 3.3587,-24.92552 -23.5113,-48.79036 -1.4142,-22.09709 4.5962,-8.66206 16.4403,-10.25305 -13.9654,-2.65165 -10.0763,-26.69328 -3.182,-21.92031 -25.6326,-8.48528 -17.6776,-18.208 z"
      id="northern-air-temple"/>
  </g>
</template>

<script lang="ts">
  import {Component} from "vue-property-decorator";
  import Region from "@/components/nations/region";

  @Component
  export default class NorthernAirTemple extends Region {
    protected name = 'Northern Air Temple';
    protected image = 'https://vignette.wikia.nocookie.net/avatar/images/3/3c/Northern_Air_Temple_in_171_AG.png/revision/latest?cb=20151115113702';
    protected paragraphs = ['The Northern Air Temple was one of the four original temples that belonged to the Air Nomads. Located in the mountains along the northern coast of the Earth Kingdom continent,[2] this temple was one of the two temples that exclusively housed male airbenders, the other one being the Southern Air Temple. Its original population, however, was wiped out at the beginning of the Hundred Year War, during the Air Nomad Genocide. The temple was later inhabited by a group of Earth Kingdom refugees led by the mechanist, who settled there after their own village was destroyed by a flood. The Northern Air Temple was the site where many important technological advancements in the world took place.[1]'];
    protected link = 'https://avatar.fandom.com/wiki/Northern_Air_Temple';
  };
</script>
