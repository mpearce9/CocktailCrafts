<template>
    <v-app>
        <v-container grid-list-lg fill-width>
            <v-row justify="center" align-content="baseline">
                <v-col v-for="test in searches" :key="test" cols="auto" align-self="center">
                    <p>{{test}}</p>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            searches: ["Test1", "Test2", "Test3"]
        }
    }
}
</script>