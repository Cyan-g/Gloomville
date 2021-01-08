<template>
  <div v-if="saveList.length > 0">
    <save-item :v-for="save in saveList">{{save}}</save-item>
  </div>
  <div id="newGame"><base-badge>New Game</base-badge></div>
</template>

<script>
import BaseBadge from '../UI/BaseBadge.vue';
import SaveItem from "./SaveItem.vue";

export default {
  components: {
    SaveItem,
    BaseBadge,
  },
  computed:{
      saveList(){
          return this.$store.getters['saves/getSaveList'];
      }
  },
};
</script>

<style scoped>
#newGame{
  display: flex;
  align-content: str;
}
</style>