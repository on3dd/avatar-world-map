interface TooltipState {
  x: number;
  y: number;
  title: string;
}

export default ({
  state: {
    x: 0,
    y: 0,
    title: '',
  },
  mutations: {
    updateTooltip(
      state: TooltipState,
      {x, y, title}: { x: number; y: number; title: string }
    ) {
      state.x = x;
      state.y = y;
      state.title = title;
    }
  },
  actions: {},
  getters: {
    x: (state: TooltipState) => state.x,
    y: (state: TooltipState) => state.y,
    title: (state: TooltipState) => state.title,
  },
})
