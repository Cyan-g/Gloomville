<template>
  <h1>Gloomville</h1>
  <base-button v-if="isSaveList" @click="$store.dispatch('changeState','save-list')">Menu</base-button>
</template>

<script>
export default {
  computed: {
    isSaveList() {
      return this.$store.getters.currentState !== "save-list";
    },
  },
};
</script>

<style scoped>
h1 {
  display: block;
  margin: 0;
  padding: 1rem 0;
  background-color: white;
  color: black;
}
</style>