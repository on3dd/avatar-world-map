import {Component, Vue} from "vue-property-decorator";
import {Mutation} from "vuex-class";

@Component
export default class Region extends Vue {
  @Mutation update!: (
    {x, y, title}: { x: number; y: number; title: string }
  ) => void;

  protected name = 'Default name';

  mouseOver(evt: MouseEvent) {
    this.update({x: evt.clientX, y: evt.clientY, title: this.name});
  }

  mouseLeave(evt: MouseEvent) {
    this.update({x: 0, y: 0, title: ''});
  }
}
