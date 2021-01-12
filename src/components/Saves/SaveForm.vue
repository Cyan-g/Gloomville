<template>
  <div>
    <input
      class="align"
      type="text"
      placeholder="Character Name"
      v-model="name"
    />
    <br />
    <hr />
    <div style="display: flex">
      <base-button class="fit align" :class="{highlighted: (selectedClass==='Knight')}" @click="selectClass('Knight')">Knight</base-button>
      <base-button class="fit align" :class="{highlighted: (selectedClass==='Mage')}" @click="selectClass('Mage')">Mage</base-button>
      <base-button class="fit align" :class="{highlighted: (selectedClass==='Rogue')}" @click="selectClass('Rogue')">Rogue</base-button>
    </div>
    <hr />
    <base-button class="align" @click="createSave()">Create Character</base-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      selectedClass: null,
    };
  },
  methods: {
      selectClass(chosenClass){
          this.selectedClass = chosenClass;
      },
      createSave(){

        if(this.name.trim === "" || !this.selectedClass){
          alert("Please Enter a name and choose a class")
          return;}

        let payload = {
          name: this.name,
          class: this.selectedClass
        }

        this.$store.dispatch('saves/createSave',payload);
        this.$store.dispatch('changeState','save-list');
      }
  },
};
</script>

<style scoped>
.fit {
  width: auto;
}
.highlighted {
  background-color: white;
  color: black;
}
hr {
  background-color: white;
}
input {
  width: 30%;
  background-color: black;
  color: white;
  border-radius: 5px;
  border: 3px solid white;
}
.align {
  display: block;
  margin: auto;
}
</style>