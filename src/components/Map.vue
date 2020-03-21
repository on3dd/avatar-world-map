<template>
  <svg
    xmlns:dc="http://purl.org/dc/elements/1.1/"
    xmlns:cc="http://creativecommons.org/ns#"
    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
    xmlns:svg="http://www.w3.org/2000/svg"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
    xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
    version="1.1"
    id="map"
    viewBox="0 0 3840 2560"
    sodipodi:docname="world-map.svg"
    inkscape:version="0.92.4 5da689c313, 2019-01-14"
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
  export default class Map extends Vue {
    protected map!: HTMLElement & SVGGraphicsElement;
    protected isZoomed = false;

    mounted() {
      this.map = document.getElementById('map')! as HTMLElement & SVGGraphicsElement;

      this.map.addEventListener('click', (evt: MouseEvent) => {
        const target = evt.target as Node;

        if (target.nodeName !== 'path') return;

        const parent = target.parentNode as HTMLElement & SVGGraphicsElement;

        const bbox = parent.getBBox();
        const viewBox = this.map.getAttribute('viewBox')!.split(' ').map(el => parseFloat(el));

        // the current center of the viewBox
        const cx = viewBox[0] + viewBox[2] / 2;
        const cy = viewBox[1] + viewBox[3] / 2;

        const matrix = parent.getScreenCTM()!.inverse().multiply(this.map.getScreenCTM()!);

        // the new center
        const newX = (bbox.x + bbox.width / 2) * matrix.a + matrix.e;
        const newY = (bbox.y + bbox.height / 2) * matrix.d + matrix.f;

        // the corresponding top left corner in the current scale
        const absoluteOffsetX = viewBox[0] + newX - cx;
        const absoluteOffsetY = viewBox[1] + newY - cy;

        // the new scale
        const scale = bbox.width * matrix.a / viewBox[2] * 1.2;

        const scaledOffsetX = absoluteOffsetX + viewBox[2] * (1 - scale) / 2;
        const scaledOffsetY = absoluteOffsetY + viewBox[3] * (1 - scale) / 2;
        const scaledWidth = viewBox[2] * scale;
        const scaledHeight = viewBox[3] * scale;

        this.map.setAttribute("viewBox", `${scaledOffsetX} ${scaledOffsetY} ${scaledWidth} ${scaledHeight}`);
      })
    }
  };
</script>

<style scoped lang="scss">

</style>
