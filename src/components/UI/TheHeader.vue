<template>
  <h1>Gloomville</h1>
  <base-button v-if="isSaveList" @click="returnToMenu()">Menu</base-button>
</template>

<script>
export default {
  computed: {
    isSaveList() {
      return this.$store.getters.currentState !== "save-list";
    }
  },
    methods:{
      returnToMenu(){
        this.$store.dispatch('loadGame', 0); //calling loadGame 0 sets the currently active Game to null
        this.$store.dispatch('saves/persistSaves');
        this.$store.dispatch('changeState','save-list')
      }
    }
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
template{
  min-width: 30rem;
}
</style>