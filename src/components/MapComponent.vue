<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    id="map"
    viewBox="0 0 3840 2560"
  >
    <g id="map-layer">
      <NorthernWaterTribeNation/>
      <SouthernWaterTribeNation/>
      <FireNation/>
      <AirNomadsNation/>
      <UnitedRepublicOfNations/>
      <EarthKingdomNation/>
    </g>
  </svg>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import NorthernWaterTribeNation
    from './nations/northern-water-tribe/NorthernWaterTribeNation.vue';
  import SouthernWaterTribeNation
    from './nations/southern-water-tribe/SouthernWaterTribeNation.vue';
  import FireNation from "./nations/fire-nation/FireNation.vue";
  import AirNomadsNation from "./nations/air-nomads/AirNomadsNation.vue";
  import UnitedRepublicOfNations
    from "./nations/united-republic-of-nations/UnitedRepublicOfNations.vue";
  import EarthKingdomNation from "./nations/earth-kingdom/EarthKingdomNation.vue";

  @Component({
    components: {
      NorthernWaterTribeNation,
      SouthernWaterTribeNation,
      FireNation,
      AirNomadsNation,
      UnitedRepublicOfNations,
      EarthKingdomNation,
    }
  })
  export default class MapComponent extends Vue {
    private map!: HTMLElement & SVGGraphicsElement;
    private parent!: HTMLElement & SVGGraphicsElement;
    private viewBoxDefault = "0 0 3840 2560";

    mounted() {
      this.map = document.getElementById('map')! as HTMLElement & SVGGraphicsElement;
      this.map.addEventListener('click', this.clickHandler);
    }

    clickHandler(evt: MouseEvent) {
      // Remove 'active' class for all children of the previous parent
      if (this.parent) {
        Array.from(this.parent.getElementsByClassName('active')).forEach(el => el.classList.remove('active'));
      }

      const target = evt.target as Node & HTMLElement;
      if (target.nodeName !== 'path') {
        this.map.setAttribute("viewBox", this.viewBoxDefault);
      } else {
        this.parent = target.parentNode as HTMLElement & SVGGraphicsElement;
        this.parent.childNodes.forEach(el => (el as HTMLElement).classList.add('active'));

        const bbox = this.parent.getBBox();
        const viewBox = this.map.getAttribute('viewBox')!.split(' ').map(el => parseFloat(el));

        // the current center of the viewBox
        const cx = viewBox[0] + viewBox[2] / 2;
        const cy = viewBox[1] + viewBox[3] / 2;

        // FIXME: remove polyfill of deprecated method and rewrite functionality without it
        // getTransformToElement polyfill
        const matrix = this.parent.getScreenCTM()!.inverse().multiply(this.map.getScreenCTM()!);

        // the new center
        const newX = (bbox.x + bbox.width / 2) * matrix.a + matrix.e;
        const newY = (bbox.y + bbox.height / 2) * matrix.d + matrix.f;

        // the corresponding top left corner in the current scale
        const absoluteOffsetX = viewBox[0] + newX - cx;
        const absoluteOffsetY = viewBox[1] + newY - cy;

        // the new scale
        const scale = bbox.width * matrix.a / viewBox[2] * 2;

        const scaledOffsetX = absoluteOffsetX + viewBox[2] * (1 - scale) / 2 - (bbox.width / 2);
        const scaledOffsetY = absoluteOffsetY + viewBox[3] * (1 - scale) / 2;
        const scaledWidth = viewBox[2] * scale;
        const scaledHeight = viewBox[3] * scale;

        this.map.setAttribute("viewBox", `${scaledOffsetX} ${scaledOffsetY} ${scaledWidth} ${scaledHeight}`);
      }
    }
  };
</script>

<style scoped lang="scss">
  #map {
    transition: all 1s ease-out;
  }
</style>
