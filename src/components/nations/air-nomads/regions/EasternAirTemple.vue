<template>
  <g ref="group">
    <path class="land"
      d="m 3014.2574,1452.5045 20.7737,-7.2708 22.851,13.2432 8.0498,-1.0387 9.3481,3.8951 17.6577,-1.0387 16.3592,14.8012 -8.5691,12.9836 -0.2597,6.2321 14.5416,-9.3482 21.293,24.4091 6.7514,-5.4531 14.0222,19.4753 7.7901,24.409 2.3371,12.9836 -2.5967,27.2654 -10.1272,11.9448 -3.895,12.9836 -15.3206,-5.7128 -21.8124,14.8012 -12.7238,14.2819 -1.0387,10.6465 -19.4753,2.3371 -32.4588,19.7349 4.9337,16.619 12.7239,10.1271 1.0386,8.5692 -6.3619,0.1298 -4.8039,12.2045 3.6354,3.7652 -0.9089,5.583 4.9338,3.6354 -1.0387,5.0635 -4.9337,1.5581 5.0635,10.7763 -0.6491,15.0609 9.6078,7.9199 1.6878,8.9587 8.0498,-2.2072 -6.2321,19.6051 -4.0249,3.2459 2.8564,8.5691 -18.0471,23.6301 -1.6879,-12.0747 -7.6602,-0.1299 -4.5443,5.8426 -2.337,7.4007 -0.3895,8.8288 -14.0222,2.8563 -6.362,-3.116 -6.8812,2.7265 -2.7266,-10.9061 -5.3232,9.3481 -15.3206,-4.1547 18.6963,20.1245 -2.2072,3.3757 -5.1934,-1.1685 -26.7846,14.2797 -10.0988,-10.6497 -15.4237,-8.9971 0.7345,-12.3022 3.1214,-4.2232 -10.6496,1.6526 -6.9774,-10.0988 9.9152,-2.2034 -4.2232,-8.8135 16.709,-16.8926 6.9774,0.9181 0.1836,-9.7316 8.079,-0.3672 5.3249,-13.0367 0.7344,-8.2627 10.2825,-4.9576 7.3446,6.2429 2.5706,10.0988 0.7344,5.3249 -4.774,12.853 0.7345,2.2034 11.2005,-6.4265 v -6.7938 l 5.8757,0.5509 1.2853,-6.2429 4.774,-1.8362 8.8135,12.4858 -6.2429,-20.1976 0.7345,-7.8955 -13.5876,1.469 -4.9576,-5.8757 6.4266,-4.9576 -2.2034,-6.6101 -13.5875,5.1412 -12.8531,-18.1779 2.5707,-6.7938 -12.1186,-1.4689 -17.4434,-14.6892 2.0197,-8.6299 11.5678,-7.161 9.7315,-39.1099 4.774,-4.2232 -10.466,-6.7937 -13.5875,-17.4434 -9.9152,-4.4068 -12.6695,-24.6044 0.5509,-8.0791 3.6723,-8.4462 4.4067,-6.9774 2.7543,-3.6723 4.4067,-2.5706 5.3249,1.6525 9.5479,6.6102 9.3644,7.7118 2.7542,1.1017 -0.3672,-25.1553 -3.1215,-18.9123 -13.7711,-13.7711 0.7345,-9.3644 5.692,-11.3841 7.8955,-7.5282 8.6299,-8.2627 1.6525,-6.7937 -3.8559,-7.161 3.6723,-3.1215 8.9971,-2.5706 6.4266,-6.2429 7.5282,-8.4463 z"
      id="eastern-air-temple"/>
  </g>
</template>

<script lang="ts">
  import {Component} from "vue-property-decorator";
  import Region from "@/components/nations/region";

  @Component
  export default class EasternAirTemple extends Region {
    protected name = 'Eastern Air Temple';
    protected image = 'https://vignette.wikia.nocookie.net/avatar/images/1/13/Restored_Eastern_Air_Temple.png/revision/latest?cb=20131102115726';
    protected paragraphs = ['The Eastern Air Temple is one of the four original temples of the Air Nomads and, sometime after the end of the Hundred Year War, became inhabited by a group of Air Acolytes. Before the war, it was one of the two air temples, the other being the Western Air Temple, which exclusively housed female airbenders, and it was regarded as the most spiritual of all the air temples.[1] However, its population was wiped out during the Air Nomad Genocide in 0 AG, and the temple itself suffering severe damage. The deserted premises became inhabited by Guru Pathik for an extended period of time and served as the location where he eventually taught Avatar Aang how to control the Avatar State in 100 AG.[2] Seventy-one years later, the Air Acolytes had restored the temple to its former glory, and Korra came there to learn how to enter the Spirit World.[1]'];
    protected link = 'https://avatar.fandom.com/wiki/Eastern_Air_Temple';
  };
</script>
