<template>
  <base-badge class="listItem"
    ><div>
      {{ save.character.class }} {{ save.character.name }} | Day:{{
        save.dayCount
      }}
    </div>
    <base-button id="delete" @click="deleteSave()"
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
#delete{
    position: relative;
    left: 90%;
    bottom: 60%;
}
</style>