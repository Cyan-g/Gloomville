<template>
  <div>
    <slot></slot>
  </div>
</template>

<style scoped>
div {
  width: 8rem;
  cursor: pointer;
  background-color: black;
  color: white;
  margin: 5px;
  display: block;
  border: 3px solid white;
  border-radius: 5px;
}
div:hover{
    background-color: rgba(66,66,66,0.5);
}
</style>