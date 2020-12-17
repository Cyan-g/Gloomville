function Save(character=new Character(),dayCount = 1,town='HomeTown',expMod = 1,difficultyMod=1){
    this.dayCount = dayCount;
    this.character = character;
    this.town = town;
    this.expMod = expMod;
    this.difficultyMod = difficultyMod;
    this.inventory = new Array;
    this.id = new Symbol;
}

function Character(name='',trait='',strength=3,perception=3,health=10,stress=0,spellslots=2,spellpower=3,spellRes=1,armor=1,evasion=1){
    this.name = name;
    this.trait = trait;
    this.strength = strength;
    this.stress = stress;
    this.perception = perception;
    this.health = health;
    this.spellslots = spellslots;
    this.spellpower = spellpower;
    this.spellRes = spellRes;
    this.armor = armor;
    this.evasion = evasion;
    this.spellList = new Array;
}

function Item(title='',description='',value=10,use=function(){}){
    this.title = title;
    this.description = description;
    this.value = value;
    this.use = use;
}

function Spell(title='DefaultSpell',cooldown=3,description=''){
    this.title = title;
    this.cooldown = cooldown;
    this.description = description;
}