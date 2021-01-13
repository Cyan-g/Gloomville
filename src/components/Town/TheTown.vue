<template>
    <component :is="townState"></component>
</template>

<script>
import TownMain from './TownMain.vue'

export default {
    computed: {
        townState(){
           return this.$store.getters['town/getState'];
        }
    },
    components: {
        TownMain,
    }
}
</script>