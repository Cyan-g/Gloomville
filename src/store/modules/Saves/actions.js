export default {
    createSave(context, payload) {
        let ID = new Date;
        let charName = payload.name;
        let charClass = payload.class;
        let newChar = { ID: ID, name: charName, class: charClass }
        this.dispatch('characters/createCharacter', newChar);

        newChar = this.getters['characters/getCharacterList'].find(character => character.ID === ID)

        let newSave = {
            ID: ID,
            dayCount: 0,
            character: newChar,
        }
        context.commit('addSave', newSave);
        this.dispatch('saves/persistSaves');
    },
    deleteSave(context,ID){
        this.dispatch('characters/deleteCharacter',ID);
        context.commit('removeSave',ID);
        this.dispatch('saves/persistSaves');
    },
    persistSaves(context){
        this.dispatch('characters/persistCharacters');
        window.localStorage.setItem('saveList',JSON.stringify(context.state.saveList));
    },
    loadSaves(context){
        this.dispatch('characters/loadCharacters');
        context.commit('loadSaves');
    }
}