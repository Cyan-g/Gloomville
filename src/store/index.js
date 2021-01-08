import { createStore } from 'vuex';

import savesModule from './modules/Saves/index.js'

const store = createStore({
  modules: {
    saves: savesModule,
  },
  state() {
    return {
      currentState: "save-list"
    };
  },
  mutations: {
    changeState(state,payload) {
      state.currentState = payload;
    }
  },
  actions: {
    changeState(context,payload) {
      context.commit('changeState',payload);
    },
  },
  getters: {
    currentState(state) {
      return state.currentState;
    }
  }
});

export default store;