<template>
  <div>
    <the-header></the-header>
    <component :is="theState"></component>
  </div>
</template>

<script>
import TheHeader from "./components/UI/TheHeader.vue";
import SaveList from "./components/Saves/SaveList";

export default {
  methods: {
  },
  name: "App",
  components: {
    TheHeader,
    SaveList,
  },
  computed:{
    theState(){
      return this.$store.getters.currentState;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: lightgray;
}
.flex{
  display:flex;
}
</style>
