<template>
  <div  v-if="saveList.length > 0">
    <save-item v-for="save in saveList" :key="save.ID" :save="save"></save-item>
    <hr/>
  </div>
  <div><base-badge  id="newGame" @click="$store.dispatch('changeState','save-form')">New Game</base-badge></div>
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
        let list = this.$store.getters['saves/getSaveList'];
          return list;
      }
  },
};
</script>

<style scoped>
#newGame{
  display: block;
  margin: auto;
  margin-top: 10px;
}
</style>