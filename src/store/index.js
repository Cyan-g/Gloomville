import { createStore } from 'vuex';

import savesModule from './modules/Saves/index.js'
import townModule from './modules/Town/index.js'

const store = createStore({
  modules: {
    saves: savesModule,
    town: townModule,
  },
  state() {
    return {
      currentState: "save-list",
      currentSave: null,
    };
  },
  mutations: {
    changeState(state, payload) {
      state.currentState = payload;
    },
    loadGame(state, ID) {
      let saveList = this.getters['saves/getSaveList']
      if (ID === 0) { state.currentSave = null; return; }
      state.currentSave = saveList.find(save => save.ID === ID);
      this.dispatch('changeState','the-town');
    }
  },
  actions: {
    changeState(context, newState) {
      console.log('Template:',newState);
      context.commit('changeState', newState);
    },
    loadGame(context, ID) {
      context.commit('loadGame', ID);
    }
  },
  getters: {
    currentState(state) {
      return state.currentState;
    },
    currentSave(state){
      return state.currentSave;
    },
  }
});

export default store;