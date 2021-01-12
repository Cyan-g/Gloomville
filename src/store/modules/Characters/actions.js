export default {
    createCharacter(context,payload){
        let newCharacter = {

            ID: payload.ID,
            name: payload.name,
            level: 1,
            experience: 0,
            class: payload.class,
            
            str: 10,
            dex: 10,
            int: 10,
            con: 10,

            health: 100,
            mana: 20,
        }
        context.commit('addCharacter',newCharacter);
    },
    deleteCharacter(context,ID){
        context.commit('removeCharacter',ID);
    }
}