interface DetailsState {
  name: string;
  image: string;
  paragraphs: string[];
  link: string;
}

export default ({
  state: {
    name: '',
    image: '',
    paragraphs: [],
    link: '',
  },
  mutations: {
    updateDetails(
      state: DetailsState,
      {name, image, paragraphs, link}: { name: string; image: string; paragraphs: string[]; link: string }
    ) {
      state.name = name;
      state.image = image;
      state.paragraphs = paragraphs;
      state.link = link;
    }
  },
  actions: {},
  getters: {
    name: (state: DetailsState) => state.name,
    image: (state: DetailsState) => state.image,
    paragraphs: (state: DetailsState) => state.paragraphs,
    link: (state: DetailsState) => state.link,
  },
})
