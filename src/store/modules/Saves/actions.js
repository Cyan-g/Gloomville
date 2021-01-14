

export default {
    createSave(context, payload) {
        let ID = new Date;
        let newSave = {
            ID: ID,
            dayCount: 0,
            character: {

                name: payload.name,
                level: 1,
                class: payload.class,

                stats: {
                    experience: 0,
                    nextlevel: 100,

                    armor: 1,
                    resistance: 1,
                    evasion: 1,
                    health: 100,
                    spellslots: 3,

                    intelligence: 10,
                    strength: 10,

                    crit: 1,

                },
                gear: {
                    head:null,
                    chest:null,
                    weapon:null,
                    feet:null,
                    accessoiry:null
                }

            },
            inventory: {
                bag: [],
                size: 5
            },
            gold: 100,


        }

        context.commit('addSave', newSave);

        this.dispatch('inventory/addItem', {
            ID: ID,
            item: "Healing Potion",
            count: 2
        })

        this.dispatch('inventory/addItem', {
            ID: ID,
            item: "Sword",
        })

        this.dispatch('saves/persistSaves');
    },
    deleteSave(context, ID) {
        context.commit('removeSave', ID);
        this.dispatch('saves/persistSaves');
    },
    persistSaves(context) {
        window.localStorage.setItem('saveList', JSON.stringify(context.state.saveList));
    },
    loadSaves(context) {
        context.commit('loadSaves');
    },
    updateCharacter(context, payload) {
        context.commit('updateCharacter', payload);
    },
    updateInventory(context,payload){
        context.commit('updateInventory', payload);
    }
}