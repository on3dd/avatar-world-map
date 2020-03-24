import {Component, Vue} from "vue-property-decorator";
import {Mutation} from "vuex-class";

@Component
export default class Region extends Vue {
  $refs!: {
    group: HTMLElement & SVGGraphicsElement;
  };

  mounted() {
    // FIXME: remove if expression after updating all components
    if (this.$refs.group) {
      this.$refs.group.addEventListener('click', this.mouseClickHandler);
      this.$refs.group.addEventListener('mousemove', this.mouseMoveHandler);
      this.$refs.group.addEventListener('mouseleave', this.mouseLeaveHandler);
    }
  }

  @Mutation updateTooltip!: (
    {x, y, title}: { x: number; y: number; title: string }
  ) => void;

  @Mutation updateDetails!: (
    {name, image, paragraphs, link}: { name: string; image: string; paragraphs: string[]; link: string }
  ) => void;

  protected name = 'Default name';
  protected image = 'https://images2.alphacoders.com/556/thumb-1920-556413.jpg';
  protected paragraphs = ['First', 'Second', 'Third'];
  protected link = 'https://avatar.fandom.com/wiki/Avatar_Wiki';

  mouseMoveHandler(evt: MouseEvent) {
    this.updateTooltip({x: evt.clientX, y: evt.clientY, title: this.name});
  }

  mouseLeaveHandler(evt: MouseEvent) {
    this.updateTooltip({x: 0, y: 0, title: ''});
  }

  mouseClickHandler(evt: MouseEvent) {
    this.updateDetails({
      name: this.name,
      image: this.image,
      paragraphs: this.paragraphs,
      link: this.link
    })
  }
}
