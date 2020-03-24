import Vue from 'vue';
import Vuex from 'vuex';

import tooltip from "@/store/modules/tooltip";
import details from "@/store/modules/details";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    tooltip,
    details,
  },
});
