<template>
  <div class="tooltip" :style="bindStyles" ref="tooltip">
    <span class="tooltip__title">{{title}}</span>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import {Getter} from "vuex-class";

  @Component
  export default class Tooltip extends Vue {
    @Getter x!: number;
    @Getter y!: number;
    @Getter title!: string;

    $refs!: {
      tooltip: HTMLDivElement;
    };

    get bindStyles(): {
      left: string;
      top: string;
      display: string;
    } {
      // console.log(this.$body.offsetHeight, this.y + this.offsetHeight());
      return {
        left: this.x - this.offsetWidth() + 'px',
        top: this.y + 20 + 'px',
        display: this.title ? 'block' : 'none',
      }
    }

    offsetWidth(): number {
      if (!this.$refs.tooltip) return 0;
      return this.$refs.tooltip.offsetWidth / 2;
    }
  }
</script>

<style scoped lang="scss">
  .tooltip {
    position: absolute;
    left: 0;
    top: 0;
    margin: 0;
    padding: .5rem;
    font-size: .75rem;
    color: #fafafa;
    background: #000000;
    opacity: .75;
    border-radius: 3px;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, .5);
    z-index: 1;

    &:before {
      content: '';
      position: absolute;
      top: -3.75px;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      width: 7.5px;
      height: 7.5px;
      background: inherit;
    }
  }
</style>
