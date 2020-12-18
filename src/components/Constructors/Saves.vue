<script>
import Character from "./Characters.vue";
import Town from "./Towns.vue";

export default class Save {
  constructor(charactername, townname) {
    this.dayCount = 0;
    this.character = new Character(charactername);
    this.town = new Town(townname);
    this.expMod = 1;
    this.difficultyMod = 1;
    this.inventory = new Array();
    this.id = Symbol;
  }
}
</script>