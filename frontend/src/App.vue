<template>
    <component :is="component">
    </component>
</template>
<style>
  @import './assets/styles.css';
</style>
<script>
    import baseLayout from './layouts/baseLayout'

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