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
    changeState(state, payload) {
      state.currentState = payload;
    },
    loadGame(state, ID) {
      let saveList = this.getters['saves/getSaveList']
      if (ID === 0) { state.currentSave = null; state.currentCharacter = null; return; }
      state.currentSave = saveList.find(save => save.ID === ID);
      state.currentCharacter = state.currentSave.character;
    }
  },
  actions: {
    changeState(context, payload) {
      context.commit('changeState', payload);
    },
    loadGame(context, ID) {
      context.commit('loadGame', ID);
    }
  },
  getters: {
    currentState(state) {
      return state.currentState;
    }
  }
});

export default store;