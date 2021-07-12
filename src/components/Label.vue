<template>
    <span class="label" :style="`background-color: ${color}`">
        <slot>Sus</slot>
    </span>
</template>

<script lang="ts">
    import Vue from 'vue'
    export default Vue.extend({
        name: 'Label',
        props: {
            /* It is just for lazy the 
            * same as css color
            */
            color: String
        }
    })
</script>

<style>
    .label {
        color: white;
        padding: 1px;
        background-color: red;
        border: 1px solid var(--background);
        border-radius: 6px;
        font-size: initial;
        transition-duration: 0.2s;
        margin: 2px;
    }

    .label:hover {
        border-color: var(--foreground);
    }
</style>