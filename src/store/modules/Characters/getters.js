export default {
    getCharacterList(state){
        return state.characterList
    },
    getCharacter(state,id){
        return state.characterList.find(character => character.ID === id)
    }
}