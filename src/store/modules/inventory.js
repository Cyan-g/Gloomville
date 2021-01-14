import ItemList from '../../Data/Items.json'


export default {
    namespaced: true,
    actions: {
        addItem(context, payload) {
            let inventory = context.rootGetters['saves/getSaveList'].find(save => save.ID === payload.ID).inventory;
            if (inventory.bag.length < inventory.size) {

                //Item add mechanism
                payload.item = ItemList.items.find(item => item.name === payload.item);

                if (payload.item.type !== 'item' || !inventory.bag.includes(item => item.name === payload.item.name)) {
                    let newItem = {
                        ID: setTimeout(function () { return new Date; }, 1000),
                        name: payload.item.name || 'default Name',
                        type: payload.item.type || 'item',
                        count: payload.item.count || 1,
                        rarity: payload.item.rarity || 'common',
                        description: payload.item.description || 'default description',
                        value: payload.item.value || 10
                    }

                    inventory.bag.push(newItem);
                } else {

                    let index = inventory.bag.indexOf(item => item.name === payload.item.name)
                    inventory.bag[index].count += payload.count || 1;
                }




            } else {
                alert("inventory is full");
            }

            payload = {
                ID: payload.ID,
                inventory: inventory,
            }
            this.dispatch('saves/updateInventory', payload);

        },
        removeItem(context, payload) {
            let inventory = context.rootGetters['saves/getSaveList'].find(save => save.ID === payload.saveID).inventory;
            let index = inventory.bag.indexOf(item => item.ID === payload.itemID);
            inventory.bag.splice(index);

            payload = {
                ID: payload.saveID,
                inventory: inventory,
            }
            this.dispatch('saves/updateInventory', payload);

        },
        increaseStorage(context, payload) {
            let inventory = context.rootGetters['saves/getSaveList'].find(save => save.ID === payload.ID).inventory;
            inventory.size += payload.amount;

            payload = {
                ID: payload.ID,
                inventory: inventory,
            }
            this.dispatch('saves/updateInventory', payload);
        },
        equipItem(context, payload) {
            let save = context.rootGetters['saves/getSaveList'].find(save => save.ID === payload.saveID)
            let character = save.character;

            if(character.gear[payload.item.type]){ //unequips the slot first if needed
                this.dispatch('inventory/unequipItem',{saveID: payload.saveID, slot: payload.item.type})
            }
            if(character.gear[payload.item.type]){ return;}

            character.gear[payload.item.type] = payload.item;

            this.dispatch('inventory/removeItem',{saveID:payload.saveID, itemID: payload.item.ID});
            
            payload = {
                ID: payload.saveID,
                character: character,
            }
            this.dispatch('saves/updateCharacter',payload);

        },
        unequipItem(context, payload) {
            let save = context.rootGetters['saves/getSaveList'].find(save => save.ID === payload.saveID)
            let character = save.character;
            let inventory = save.inventory;

            if(inventory.bag.length < inventory.size){
                this.dispatch('inventory/addItem',{
                    ID: save.ID,
                    item: character.gear[payload.slot].name
                });

                character.gear[payload.slot] = null;

                payload = {
                    ID: save.ID,
                    character: character,
                }

                this.dispatch('saves/updateCharacter',payload);

            }else{
                alert("Your inventory is too full to unequip something.")
                return;
            }


        }
    }
}
