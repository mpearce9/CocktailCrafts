<template>
<!-- component used when user wants to search by name -->
    <v-container grid-list-lg fill-width fluid>
        <v-row justify="center" class="pt-3 mx-16" align="start">
            <v-col cols="10">
                <v-text-field label="Drink Name" v-model="search" dark outlined dense clearable/>
            </v-col>
            <v-col cols="2">
                <v-btn color="secondary" dark block @click="onSearch">Search</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            search: ""
        }
    },
    methods:{
        //exports the name search function
        onSearch(){
            this.$emit('nameSearch', this.search)
            this.search = ""
        }
    }
}
</script>