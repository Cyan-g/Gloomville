<template>
  <div>
    <the-header></the-header>
    <component :is="theState"></component>
  </div>
</template>

<script>
import TheHeader from "./components/UI/TheHeader.vue";
import SaveForm from "./components/Saves/SaveForm.vue"
import SaveList from "./components/Saves/SaveList.vue";
import BaseBadge from './components/UI/BaseBadge.vue';
import TheTown from './components/Town/TheTown.vue';

export default {
  methods: {
  },
  name: "App",
  components: {
    TheHeader,
    SaveList,
    BaseBadge,
    SaveForm,
    TheTown
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

.highlighted {
  background-color: white;
  color: black;
}
hr{
  background-color: white;
}
</style>
