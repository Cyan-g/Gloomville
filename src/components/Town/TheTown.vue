<template>
    <component :is="townState" :save="$store.getters['currentSave']"></component>
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