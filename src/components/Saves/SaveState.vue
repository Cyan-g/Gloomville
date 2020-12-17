<template>
  <div>
    <div v-for="save in saves" :key="save.id" :save="save">
      <save-element
        :dayCount="save.dayCount"
        :title="save.title"
      ></save-element>
    </div>
    <base-button @click="$emit('create-game')">+ New Game</base-button>
  </div>
</template>

<script>
import SaveElement from "./SaveElement.vue";

export default {
    props: ['saves'],
    components: {
    SaveElement,
  },
};
</script>

<style scoped>
div {
  background-color: black;
  height: 100%;
}
</style>