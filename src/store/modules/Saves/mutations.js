export default {
    addSave(state, newSave) {
        state.saveList.push(newSave);
    },
    removeSave(state, ID) {
        let index = state.saveList.indexOf(state.saveList.find(save => save.ID === ID))
        state.saveList.splice(index);
    },
    loadSaves(state) {
        state.saveList = JSON.parse(window.localStorage.getItem('saveList'));
    },
    updateCharacter(state, payload) {
        let save = state.saveList.find(save => save.ID === payload.ID);
        save.character = payload.character;
        
        this.dispatch('saves/persistSaves');
    },
    updateInventory(state, payload) {
        let save = state.saveList.find(save => save.ID === payload.ID);
        save.inventory = payload.inventory;
        
        this.dispatch('saves/persistSaves');
    },
}