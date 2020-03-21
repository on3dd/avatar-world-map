<template>
  <g @mousemove="mouseOver" @mouseleave="mouseLeave">
    <path class="land"
      d="m 779.44529,990.09252 15.60727,-7.52821 6.42104,8.24568 12.98354,5.97242 11.16584,-4.54424 9.86748,5.84259 0.25967,13.37304 -0.51934,4.4144 7.14095,11.1658 -14.02222,9.478 -9.99732,-4.9337 -14.02222,3.895 -0.64918,-21.0333 -9.99732,-4.5442 -18.95596,8.6989 -5.06358,-1.8176 -1.16852,-6.2321 z"
      id="sun-warrior-ruins"/>
  </g>
</template>

<script lang="ts">
  import {Component} from "vue-property-decorator";
  import Region from "@/components/nations/region";

  @Component
  export default class SunWarriorRuins extends Region {
    protected name = 'Sun Warrior Ruins';
  };
</script>
