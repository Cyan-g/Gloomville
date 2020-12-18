<template>
    <div>
        <h3>{{title}}</h3>
        <h3 id="days">Days:{{dayCount}}</h3>
    </div>
</template>

<script>
export default {
    props: ['title','dayCount',]
}
</script>

<style scoped>
    div{
        margin: 5px;
        display: block;
        border: 3px solid white;
        border-radius: 5px;
    }
    h3{
        display: flex;
    }
</style>