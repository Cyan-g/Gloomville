export default {
    createCharacter(context,charID,charName){
        let newCharacter = {
            ID: charID,
            name: charName,
            level: 1,
            experience: 0,
            
            str: 10,
            dex: 10,
            int: 10,
            con: 10,

            
        }
        context.commit('addCharacter',newCharacter);
    }
}