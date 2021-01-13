
export default {
    namespaced: true,
    actions: {
        addItem(context, payload) {
            let inventory = context.rootGetters['saves/getSaveList'].find(save => save.ID === payload.ID).inventory;
            if (inventory.bag.length < inventory.size) {
                if (payload.item.type === 'item') {
                    if(inventory.bag.includes(item => item.name === payload.item.name)){
                        let index = inventory.bag.indexOf(item => item.name === payload.item.name)
                    inventory.bag[index].count += payload.item.count || 1;
                    }
                    else{let newItem = {
                        ID: setTimeout(function(){return new Date;}, 1000),
                        name: payload.item.name || 'default Name',
                        type: payload.item.type || 'item',
                        count: payload.item.count || 1,
                        rarity: payload.item.rarity || 'common',
                        description: payload.item.description || 'default description',

                    }
                    inventory.bag.push(newItem);}
                }else{
                    let newItem = {
                        ID: setTimeout(function(){return new Date;}, 1000),
                        name: payload.item.name || 'default Name',
                        type: payload.item.type || 'item',
                        count: payload.item.count || 1,
                        rarity: payload.item.rarity || 'common',
                        description: payload.item.description || 'default description',

                    }
                    inventory.bag.push(newItem);
                }
            } else {
                alert("inventory is full");
            }

            payload ={
                ID: payload.ID,
                inventory: inventory,
            }
            this.dispatch('saves/updateInventory',payload);

        },
        removeItem(context, payload) {
            let inventory = context.rootGetters['saves/getSaveList'].find(save => save.ID === payload.saveID).inventory;
            let index = inventory.bag.indexOf(item => item.ID === payload.itemID);
            inventory.bag.splice(index);

            payload ={
                ID: payload.saveID,
                inventory: inventory,
            }
            this.dispatch('saves/updateInventory',payload);

        },
        increaseStorage(context, payload) {
            let inventory = context.rootGetters['saves/getSaveList'].find(save => save.ID === payload.ID).inventory;
            inventory.size += payload.amount;

            payload ={
                ID: payload.ID,
                inventory: inventory,
            }
            this.dispatch('saves/updateInventory',payload);
        }
    }
}
