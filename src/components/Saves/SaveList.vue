<template>
  <div v-if="saveList.length > 0">
    <save-item
      v-for="save in saveList"
      :key="save.ID"
      :save="save"
      @click="$store.dispatch('loadGame', save.ID)"
    ></save-item>
    <hr />
  </div>
  <div>
    <base-button
      id="newGame"
      @click="$store.dispatch('changeState', 'save-form')"
      >New Game</base-button
    >
  </div>
</template>

<script>
import SaveItem from "./SaveItem.vue";

export default {
  components: {
    SaveItem,
  },
  computed: {
    saveList() {
      let list = this.$store.getters["saves/getSaveList"];
      return list;
    },
  },
  created() {
    this.$store.dispatch("saves/loadSaves");
  },
};
</script>

<style scoped>
#newGame {
  display: block;
  margin: auto;
  margin-top: 10px;
}
</style>