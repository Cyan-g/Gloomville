<script>
export default class Character {
  constructor(name) {
    this.name = name;
    this.experience = 0;
    this.trait = "trait";
    this.level = 1;
    this.strength = 3;
    this.stress = 0;
    this.perception = 3;
    this.health = 10;
    this.spellslots = 2;
    this.spellpower = 0;
    this.spellRes = 0;
    this.armor = 0;
    this.evasion = 3;
    this.spellList = new Array();
  }
}
</script>