<template>
  <base-badge class="listItem"
    ><div>
      {{ save.character.name }} | {{ save.character.class }} level:
      {{ save.character.level }} | Day: {{ save.dayCount }}
    </div>
    <base-button id="delete" @click.stop="deleteSave()"
      >Delete
    </base-button></base-badge
  >
</template>

<script>
export default {
  props: ["save"],
  methods: {
    deleteSave() {
      this.$store.dispatch("saves/deleteSave", this.save.ID);
    },
  },
};
</script>

<style scoped>
.listItem {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: auto;
  width: 90%;
  height: 5vh;
  margin-top: 5px;
}
.listItem:hover{
  background-color: white;
  color: black;
  align-items: center;
}
</style>