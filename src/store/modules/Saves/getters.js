export default {
    getSaveList(state){
        return state.saveList
    },
    getSave(state,id){
        return state.saveList.find(save => save.ID === id)
    }
}