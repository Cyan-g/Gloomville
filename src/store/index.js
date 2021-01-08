import { createStore } from 'vuex';

import savesModule from './modules/Saves/index.js'
import characterModule from './modules/Characters/index.js'

const store = createStore({
  modules: {
    saves: savesModule,
    characters: characterModule
  },
  state() {
    return {
      currentState: "save-list",
      
    currentSave: null,
    currentCharacter: null,
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