<script>
import Character from "./Characters.vue";
class Save {
  constructor(save = {}) {
    this.dayCount = 0;
    this.character = new Character();
    this.town = "HomeTown";
    this.expMod = 1;
    this.difficultyMod = 1;
    this.inventory = new Array();
    this.id = Symbol;
  }
}
</script>