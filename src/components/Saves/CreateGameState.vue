<template>
  <div>
    <p>Difficulty</p>
    <div class="flex">
      <base-button
        :class="{ selected: difficulty === 1 }"
        @click="difficulty = 1"
        >Normal</base-button
      ><base-button
        :class="{ selected: difficulty === 2 }"
        @click="difficulty = 2"
        >Hard</base-button
      ><base-button
        :class="{ selected: difficulty === 3 }"
        @click="difficulty = 3"
        >Hardcore</base-button
      >
    </div>
    <hr style="background-color: white" />
    <div class="flex">
      <input v-model="characterName" type="text" placeholder="Character Name" />
    </div>
    <hr style="background-color: white" />
    <div class="flex">
      <input v-model="townName" type="text" placeholder="Town Name" />
    </div>
    <hr style="background-color: white" />
    <p>Select Trait</p>
    <div class="flex">
      <base-button
        :class="{ selected: selectedTrait === 1 }"
        @click="selectedTrait = 1"
        >Trait1</base-button
      ><base-button
        :class="{ selected: selectedTrait === 2 }"
        @click="selectedTrait = 2"
        >Trait2</base-button
      ><base-button
        :class="{ selected: selectedTrait === 3 }"
        @click="selectedTrait = 3"
        >Trait3</base-button
      >
    </div>
    <hr style="background-color: white" />
    <div class="flex">
      <base-button @click="createGame">Create</base-button>
    </div>
  </div>
</template>

<script>
import Save from "./../Constructors/Saves.vue";

export default {
  data() {
    return {
      difficulty: 1,
      selectedTrait: null,
      characterName: "",
      townName: "",
    };
  },
  methods: {
    createGame() {
      let Game = new Save(this.characterName, this.townName);
      console.log(JSON.stringify(Game));
      this.$emit("game-created", Game);
    },
  },
};
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
}

.selected {
  background-color: darkgray;
}
input {
  width: 8rem;
  cursor: pointer;
  background-color: black;
  color: white;
  margin: 5px;
  display: block;
  border: 3px solid white;
  border-radius: 5px;
}
</style>