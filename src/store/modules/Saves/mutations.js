export default {
    addSave(state,newSave){
        state.saveList.push(newSave);
    },
    removeSave(state,ID){
        let index = state.saveList.indexOf(state.saveList.find(save => save.ID === ID))
        state.saveList.splice(index);
    },
    loadSaves(state){
        state.saveList = JSON.parse(window.localStorage.getItem('saveList'));
    }
}