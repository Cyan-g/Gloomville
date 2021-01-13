<template>
<div id="container">
  <div id="health">
    <div id="healthNum">{{modified.health}}</div>
    <div id="HP" :style="healthStyle"></div>
  </div>
  <div id="spells">
    <div v-for="spells in spellslots" :key="spells.index" class="slot"></div>
  </div>
  <div id="experience">
    <span id="expNum">{{stats.experience}} / {{stats.nextlevel}}</span>
    <div id="exp" :style="expStyle"></div>
  </div>

</div>
  
</template>

<script>
export default {
  props: ['stats','modifiedstats'],
  computed: {
    modified(){
      return this.modifiedstats || this.stats;
    },
    healthStyle(){
      return {
        height: (this.modified.health/ this.stats.health)*100 +'%'
        }
    },
    expStyle(){
      return {
        width: ((this.stats.experience)/ this.stats.nextlevel)*100 +'%'
        }
    },
    spellslots(){
      let array = []
      for(let i = 0; i < this.modified.spellslots; i++){
        array.push({index: i});
      }
      return array;
    }
  }

}
</script>

<style scoped>
#container{
  display: flex;
  position: fixed;
  bottom: 2%;
  left: 1%;
  width: 100%;
  height: 5rem;
}
#healthNum{
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  display: inline-block;
  position: absolute;
  vertical-align: middle;
  bottom: 2.2rem;
  left: 1.6rem;
  z-index: 1;
  
}
#health{
  display: block;
  position: relative;
  overflow: hidden;
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  background-color: black;
  border: 3px solid white;
  z-index: 1;
}
#HP{
  width: 100%;
  display: block;
  position: absolute;
  background: radial-gradient(closest-side, rgba(200,120,120,1),rgba(200,70,70,1));
  bottom: 0;
}
#experience{
  position: absolute;
  border: solid 3px white;
  width: 60%;
  height: 1rem;
  border-radius: 0rem 1rem 10rem 0rem;
  left: 4rem;
  bottom: 0;
  z-index: 0;
}
#expNum{
  z-index: 1;
  position: absolute;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}
#exp{
  background-color: rgba(250,190,100,1);
  height: 100%;
  position: absolute;
  display: block;
  top: 0;
}
#spells{
   position: absolute;
   display: flex;
  width: 60%;
  height: 4rem;
  left: 6rem;
  bottom: 1rem;
  z-index: 0;
}
.slot{
  height: 3rem;
  width: 3rem;
  border-radius: 2rem;
  background: radial-gradient(closest-side, rgba(250,250,250,1),rgba(150,170,190,1),rgba(100,200,240,1),rgba(250,250,250,0.1));
}
</style>