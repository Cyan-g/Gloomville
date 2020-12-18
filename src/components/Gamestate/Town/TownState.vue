<template>
  <div>
    <hr style="background-color: white" />
    <p>{{ game.town.name }}</p>
    <div id="town">
      <div class="flex">
        <div class="left">
          <base-button class="UI"
            >{{ game.character.name }} <br />
            Lvl:{{ game.character.level }}</base-button
          >
          <base-button class="UI">Townhall</base-button>
          <base-button class="UI">Shop</base-button>
          <base-button class="UI">Tavern</base-button>
        </div>
        <div style="width: 60%"></div>
        <div class="right">
          <p>Day: {{ game.dayCount }}</p>
          <base-button class="UI">Smith</base-button>
          <base-button class="UI">Guild</base-button>
          <base-button class="UI">Academy</base-button>
          <base-button class="UI">Explore</base-button>
        </div>
      </div>
      
    <player-bar :Game="game"></player-bar>
    </div>
  </div>
</template>

<script>
export default {
  props: ["game"],
};
</script>

<style scoped>
.left {
  position: fixed;
  left: 0%;
  margin: 1rem;
}
.right {
  position: fixed;
  right: 0%;
  margin: 1rem;
}
#town {
  background-image: url("./../../../assets/town.jpg");
  height: 33rem;
  padding-top: 1rem;
}
.UI {
  padding: 1rem;
  margin-top: 2rem;
}
</style>