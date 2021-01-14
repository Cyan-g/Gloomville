<template>
  <div style="height: 100%;">
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
  height: 95%;
  overflow: hidden;
  margin: 0;
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
.common{
  cursor: pointer;
  border-radius: 3px;
  margin: 1px;
  border: solid 3px;
  border-color: lightgray;
}
.uncommon{
  cursor: pointer;
  border-radius: 3px;
  margin: 1px;
  border: solid 3px;
  border-color: rgba(100,100,250,1);
}
.rare{
  cursor: pointer;
  border-radius: 3px;
  margin: 1px;
  border: solid 3px;
  border-color: rgba(250,190,100,1);
}
.legendary{
  cursor: pointer;
  border-radius: 3px;
  margin: 1px;
  border: solid 3px;
  border-color: rgba(140,10,140,1);
}
</style>
