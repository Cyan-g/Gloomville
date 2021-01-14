<template>
  <div id="nameplate">{{ item.name }}</div>
  <hr />
  <div id="actions">
    <base-button v-if="item.type === 'item'">Use</base-button>
    <base-button
      @click="equip(item)"
      v-if="
        (item.type === 'weapon' ||
          item.type === 'chest' ||
          item.type === 'head' ||
          item.type === 'feet' ||
          item.type === 'accessoiry') &&
        !isEquipped
      "
      >Equip</base-button
    >
    <base-button @click="unequip(item.type)" v-if="isEquipped"
      >Unequip</base-button
    >
    <base-button  v-if="!isEquipped" @click="removeItem()">Destroy</base-button>
  </div>
  <hr />
  <div id="description">{{ item.description }}</div>
</template>

<script>
import BaseButton from "./BaseButton.vue";
export default {
  components: { BaseButton },
  props: ["item", "isEquipped"],
  emits: ["destroyed","deselected"],
  methods: {
    removeItem() {
      this.$emit("destroyed");
      this.$store.dispatch("inventory/removeItem", {
        saveID: this.$store.getters["currentSave"].ID,
        itemID: this.item.ID,
      });
    },
    equip(item) {
      this.$emit('deselected');
      this.$store.dispatch("inventory/equipItem", {
        saveID: this.$store.getters["currentSave"].ID,
        item: item || null,
        
      });
    },
    unequip(slot) {
      this.$emit('deselected');
      this.$store.dispatch("inventory/unequipItem", {
        saveID: this.$store.getters["currentSave"].ID,
        slot: slot || null,
      });
    },
  },
};
</script>

<style scoped>
#nameplate {
  padding: 1rem;
  font-size: 2rem;
}
#actions {
  display: flex;
  justify-content: center;
}
</style>