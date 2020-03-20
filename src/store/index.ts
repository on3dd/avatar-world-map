import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    x: 0,
    y: 0,
    title: '',
  },
  mutations: {
    update(state, {x, y, title}) {
      state.x = x;
      state.y = y;
      state.title = title;
      // console.log(x, y, title);
    }
  },
  actions: {
  },
  getters: {
    x: state => state.x,
    y: state => state.y,
    title: state => state.title,
  },
  modules: {
  },
});
