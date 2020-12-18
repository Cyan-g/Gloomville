<template>
  <div>
    <the-header></the-header>
    <base-button
      v-if="currentState != 'save-state'"
      @click="changeState('save-state')"
      >Return</base-button
    >
    <component
      @game-created="createGame"
      @start-game="changeState"
      @create-game="changeState('create-game-state')"
      :saves="saves"
      :game="currentSave"
      v-bind:is="currentState"
    ></component>
  </div>
</template>

<script>
import TheHeader from "./components/UI/TheHeader.vue";
import SaveState from "./components/Saves/SaveState.vue";
import CreateGameState from "./components/Saves/CreateGameState.vue";
import TownState from "./components/Gamestate/Town/TownState.vue";

export default {
  data() {
    return {
      currentSave: null,
      currentState: "save-state",
      saves: [],
    };
  },
  methods: {
    changeState(state, save ) {
      this.currentState = state;
      if (save) {
        this.currentSave = save;
      }
    },
    createGame(newSave) {
      this.saves.push(newSave);
      this.currentSave=newSave;
      this.changeState("town-state");
    },
  },
  name: "App",
  components: {
    TheHeader,
    SaveState,
    CreateGameState,
    TownState,
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
.flex{
  display:flex;
}
</style>
