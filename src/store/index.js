import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters"

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    opened: false
  },
  mutations: {
    SET_OPENED(state) {
      state.opened = !state.opened;
    },
  },
  actions: {},
  modules: {},
  getters
});