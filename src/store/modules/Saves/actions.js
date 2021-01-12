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
    },
    deleteSave(context,ID){
        this.dispatch('characters/deleteCharacter',ID);
        context.commit('removeSave',ID);
    }
}