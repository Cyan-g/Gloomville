<template>
  <div>
    <div v-for="save in saves" :key="save.id" :save="save">
      <save-element
        @click="start(save)"
        :dayCount="save.dayCount"
        :title="save.character.name"
      ></save-element>
    </div>
    <base-button @click="$emit('create-game')">+ New Game</base-button>
  </div>
</template>

<script>
import SaveElement from "./SaveElement.vue"; 

export default {
  props: ["saves"],
  components: {
    SaveElement,
  },methods:{start(save){this.$emit('start-game','town-state',save)}}
};
</script>

<style scoped>
div {
  background-color: black;
  height: 100%;
}
save-element {
  display: flex;
}
</style>