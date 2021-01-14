<template>
  <base-badge id="container">
    <div id="gear">
      <div id="character">
        {{ save.character.name }}
        <div
          v-for="(item, slot) in save.character.gear"
          :key="slot"
          class="list-item"
        >
          {{ slot.charAt(0).toUpperCase() + slot.slice(1) }}:<base-badge
            :class="item ? `${item.rarity} gearSlot` : 'gearSlot'"
            ><item-badge
              :isEquipped="true"
              :item="save.character.gear[slot]"
              @click="selectItem(save.character.gear[slot])"
            ></item-badge
          ></base-badge>
        </div>
      </div>
      <div id="interface">
        <item-interface
          @deselected="selectItem(null)"
          @destroyed="selectedItem = null"
          v-if="selectedItem"
          :item="selectedItem"
          :isEquipped="true"
        ></item-interface>
      </div>
      <base-button @click="$emit('close')" id="close">x</base-button>
    </div>
    <div id="stats">
      <hr style="width: 100%" />
    </div>
  </base-badge>
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
    selectItem(item) {
      this.selectedItem = item;
    },
  },
};
</script>

<style scoped>
#container {
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 11%;
  left: 22%;
  width: 55vw;
  height: 70vh !important;
}
.list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.gearSlot {
  width: 40%;
  height: 1rem;
  cursor: pointer;
}
#gear {
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
}
#character {
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 60%;
  border-right: 3px solid white;
  justify-content: space-evenly;
}
#close {
  position: absolute;
  top: 1%;
  right: 1%;
  height: 1rem;
  width: 1rem;
  border-radius: 1rem;
}
#stats {
  width: 100%;
  height: 30%;
}
#interface {
  display: block;
  width: 100%;
}
</style>