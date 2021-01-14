<template>
  <hr />
  <div class="flex" id="container">
    <div id="left" class="flex">
      <base-button @click="changeWindow('the-character')">{{ save.character.name }}</base-button>
      <base-button @click="changeWindow('the-inventory')"
        >Inventory</base-button
      >
      <base-button>Academy</base-button>
    </div>
    <div id="right" class="flex">
      <base-badge style="border: none; padding: 4px"
        >Day: {{ save.dayCount }}</base-badge
      >
      <base-button>Shop</base-button>
      <base-button>Smith</base-button>
    </div>
  </div>
  <base-button style="margin: auto; width: 6rem">Embark</base-button>
  <player-bar :stats="save.character.stats"></player-bar>
  <component
    @close="changeWindow(null)"
    :is="currentWindow"
    :save="save"
  ></component>
</template>

<script>
import TheInventory from "./TheInventory.vue";
import BaseButton from "../UI/BaseButton.vue";
import TheCharacter from './TheCharacter';

export default {
  data() {
    return {
      currentWindow: null,
    };
  },
  components: { BaseButton, TheInventory , TheCharacter},
  computed:{
      save(){
          return this.$store.getters['currentSave'];
      }
  },
  methods: {
    changeWindow(newWindow) {
      this.currentWindow = newWindow;
    },
  },
};
</script>

<style scoped>
#container {
  max-height: 90%;
  margin-top: 3rem;
  height: 50%;
}
#left {
  width: 50%;
  min-width: 8rem;
  flex-direction: column;
  justify-content: space-between;
}
#right {
  direction: rtl;
  min-width: 8rem;
  width: 50%;
  flex-direction: column;
  align-content: space-between;
  justify-content: space-between;
}
#right > * {
  margin-right: 5%;
  width: 30%;
}
#left > * {
  margin-left: 5%;
  width: 30%;
}
</style>