export default {
    createSave(context, payload) {
        let ID = new Date;
        let newSave = {
            ID: ID,
            dayCount: 0,
            character: {

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
        }
        context.commit('addSave', newSave);
        this.dispatch('saves/persistSaves');
    },
    deleteSave(context,ID){
        context.commit('removeSave',ID);
        this.dispatch('saves/persistSaves');
    },
    persistSaves(context){
        window.localStorage.setItem('saveList',JSON.stringify(context.state.saveList));
    },
    loadSaves(context){
        context.commit('loadSaves');
    }
}