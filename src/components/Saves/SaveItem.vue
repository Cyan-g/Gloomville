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
  display: block;
  margin: auto;
  width: 90%;
  height: 2rem;
  margin-top: 5px;
}
.listItem:hover{
  background-color: white;
  color: black;
}
#delete {
  position: relative;
  left: 90%;
  bottom: 60%;
}
</style>