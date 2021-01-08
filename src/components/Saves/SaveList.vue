<template>
  <div v-if="saveList.length > 0">
    <save-item :v-for="save in saveList">{{save}}</save-item>
  </div>
</template>

<script>
import SaveItem from "./SaveItem.vue";

export default {
  components: {
    SaveItem,
  },
  computed:{
      saveList(){
          return this.$store.getters['saves/getSaveList'];
      }
  },
};
</script>

<style scoped>
</style>