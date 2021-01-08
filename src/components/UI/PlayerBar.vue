<template>
  <div id="wrapper" class="flex">
    <div style="width: 80%" id="Resources">
      <div class="bar" id="Health">{{Game.character.health}}/{{Game.character.health}}</div>
      <div class="bar" id="Stress">{{Game.character.stress}}/{{10}}</div>
      <div class="bar" id="Exp">{{Game.character.experience}}/{{Game.character.level * 10}}</div>
    </div>
    <base-badge>Gold: <br>{{Game.gold}}</base-badge>
  </div>
</template>

<script>
export default {
    props: ['Game'],
    computed:{
    }
};
</script>

<style scoped>
#Health{
    background-color: rgba(200,90,100,1);
}
#Stress{
    background-color: rgba(70,80,120,1);
}
#Exp{
    background-color: rgba(220,170,0,1);
}
.bar{
    border-radius: 3px;
    margin: 3px;
    bottom: solid black 1px;
}
#wrapper{
   position: fixed; 
    bottom:0%;
    width:100%; 
    margin: 0 2rem;
}
</style>