<template>
  <div id="nameplate">{{ item.name }}</div>
  <hr />
  <div id="actions">
    <base-button v-if="item.type === 'item'">Use</base-button>
    <base-button v-if="item.type === 'weapon'">Equip</base-button>
    <base-button @click="removeItem()">Destroy</base-button>
  </div>
  <hr />
  <div id="description">{{ item.description }}</div>
</template>

<script>
import BaseButton from "./BaseButton.vue";
export default {
  components: { BaseButton },
  props: ["item"],
  emits:['destroyed'],
  methods: {
    removeItem() {
      this.$emit("destroyed");
      this.$store.dispatch("inventory/removeItem", {
        saveID: this.$store.getters["currentSave"].ID,
        itemID: this.item.ID,
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