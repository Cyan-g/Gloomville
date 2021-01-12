<template>
  <div>
    <slot></slot>
  </div>
</template>

<style scoped>
div {
  width: fit-content;
  cursor: pointer;
  padding: 1px;
  background-color: black;
  color: white;
  margin: 5px;
  display: block;
  border: 3px solid white;
  border-radius: 5px;
}
div:hover{
  background-color: rgba(90,90,90,0.8);
}
</style>