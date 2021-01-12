export default {
    addCharacter(state,newCharacter){
        state.characterList.push(newCharacter);
    },
    removeCharacter(state,ID){
        let index = state.characterList.indexOf(state.characterList.find(character => character.ID === ID))
        state.characterList.splice(index);
    }
}