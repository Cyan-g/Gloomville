<template >
  <div :class="item.rarity">
    <span v-if="item.type === 'item'">{{ item.count }}</span> {{ item.name }}<span v-if="item.count > 1">'s</span>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style scoped>
</style>