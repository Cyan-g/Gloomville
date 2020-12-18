<template>
  <div>
    <the-header></the-header>
    <component
      @save-menu="changeState('save-state')"
      @create-game="changeState('create-game')"
      :saves="saves"
      v-bind:is="currentState"
    ></component>
  </div>
</template>

<script>
import TheHeader from "./components/UI/TheHeader.vue";
import SaveState from "./components/Saves/SaveState.vue";
import CreateGame from "./components/Saves/CreateGame.vue";

export default {
  data() {
    return {
      currentState: "save-state",
      saves: [
        { title: "Save1", dayCount: 4, id: 0 },
        { title: "Save2", dayCount: 3, id: 1 },
      ],
    };
  },
  methods: {
    changeState(state) {
      this.currentState = state;
    },
  },
  name: "App",
  components: {
    TheHeader,
    SaveState,
    CreateGame,
  },
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
</style>
