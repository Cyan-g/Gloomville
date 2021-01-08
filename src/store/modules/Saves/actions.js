export default {
    createSave(context,charName){
        let ID =  Symbol;
        let newChar = this.$store.dispatch('characters/createCharacter',ID, charName);
        let newSave = {
            ID: ID,
            dayCount: 0,
            character: newChar,
        }
        context.commit('addSave',newSave);
    }
}