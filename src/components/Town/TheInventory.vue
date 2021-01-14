<template>
  <div id="container">
    <base-badge id="inventory">
      <div id="list">
        <div style="margin-top: 5px">
          {{ save.inventory.bag.length }}/{{ save.inventory.size }}
        </div>
        <hr style="width: 100%" />
        <item-badge
          v-for="item in save.inventory.bag"
          :key="item.name"
          :item="item"
          @click="selectItem(item.ID)"
        ></item-badge>
      </div>
      <div id="interface">
        <item-interface
          @destroyed="selectedItem = null"
          v-if="selectedItem"
          :item="selectedItem"
        ></item-interface>
      </div>
      <base-button @click="$emit('close')" id="close">x</base-button>
    </base-badge>
  </div>
</template>

<script>
import ItemInterface from "./../UI/ItemInterface.vue";
import ItemBadge from "./../UI/ItemBadge.vue";
import BaseBadge from "../UI/BaseBadge.vue";
export default {
  components: { BaseBadge, ItemBadge, ItemInterface },
  props: ["save"],
  data() {
    return {
      selectedItem: null,
    };
  },
  methods: {
    selectItem(ID) {
      this.selectedItem = this.save.inventory.bag.find(
        (item) => item.ID === ID
      );
    },
  },
};
</script>

<style scoped>
#container {
  position: fixed;
  top: 11%;
  left: 22%;
  width: 55vw;
  height: 70vh !important;
}
#inventory {
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
}
#list {
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 30%;
  border-right: 3px solid white;
}
#close {
  position: absolute;
  top: 1%;
  right: 1%;
  height: 1rem;
  width: 1rem;
  border-radius: 1rem;
}
#interface {
  display: block;
  width: 100%;
}
</style>