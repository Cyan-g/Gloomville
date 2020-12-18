<template>
  <div>
    <base-button @click="$emit('save-menu')">Return</base-button>
    <hr style="background-color: white" />
    <div  class="flex" ><input type="text" placeholder="Character Name" /></div>
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
export default {
  data() {
    return {
      selectedTrait: null,
    };
  },
  methods: {
      createGame(){
      }
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