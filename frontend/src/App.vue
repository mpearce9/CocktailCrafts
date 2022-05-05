<template>
    <component :is="component">
    </component>
</template>
<style>
  @import './assets/styles.css';
</style>
<script>
    import baseLayout from './layouts/baseLayout'
    // exports the vue app that utilizes the base layout and return the various components

    export default {
        name: 'App',

        components: {
            baseLayout
        },

        computed: {
            component() {
                return baseLayout
            }
        }
    }
</script>
