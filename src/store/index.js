import { createStore } from 'vuex';

import savesModule from './modules/Saves/index.js'
import inventoryActions from './modules/inventory.js'

const store = createStore({
  modules: {
    saves: savesModule,
    inventory: inventoryActions,
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
    modifiedStats(state){
      let save = state.currentSave;
      let stats = save.character.stats;
      let gear = save.character.gear;

      let modified = JSON.parse(JSON.stringify(stats));

      Object.entries(gear).forEach(slot =>{
        Object.entries(slot).forEach(entry =>{
          const [stat,value] = entry;
          modified[stat] += value || 0;
        })
      })
      return modified;

  }
  }
});

export default store;