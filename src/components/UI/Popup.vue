<template>
  <base-badge id="container"
    ><slot></slot>
    <hr
  /></base-badge>
</template>
<script>
import BaseBadge from "./BaseBadge.vue";
export default {};
</script>

<style scoped>
#container {
  width: fit-content;
  margin: auto;
}
</style>