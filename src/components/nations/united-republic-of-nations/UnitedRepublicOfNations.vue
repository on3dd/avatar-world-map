<template>
  <g class="nation united-republic-of-nations">
    <RepublicCity/>
  </g>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import RepublicCity from "./regions/RepublicCity.vue";

  @Component({
    components: {
      RepublicCity,
    }
  })
  export default class UnitedRepublicOfNations extends Vue {};
</script>

<style scoped>

</style>
