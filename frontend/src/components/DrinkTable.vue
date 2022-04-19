<template>
    <v-container>
        <v-data-table
            :headers="apiHeaders"
            :items="apiDrinkList"
            class="elevation-1 mx-16"
            :loading="tableLoading"
            :items-per-page="5"
            loading-text="Loading Drinks..."
            @click:row="rowClicked"
            no-data-text="No Drinks Found That Match Selected Criteria"
        >
            <template v-slot:item.img="{item}">
                <v-img max-height="128" max-width="128" class="rounded-circle" contain :src="item.img" lazy-src="https://reactnative-examples.com/wp-content/uploads/2022/02/default-loading-image.png"/>
            </template>
            <template v-slot:item.dIngredients="{item}">
                <v-list>
                    <v-list-item v-for="i in item.dIngredients" :key="i">{{i}}</v-list-item>
                </v-list>
            </template>
        </v-data-table>
    </v-container>
</template>

<script>
export default {
    props:{
        apiDrinkList: Array,
        tableLoading: Boolean
    },
    data() {
        return {
            apiHeaders: [{text: "", align: "start", value: "img", sortable: false},
                        {text: "Drink Name", value: "dName"},
                        {text: "Category", value: "category"},
                        {text: "Ingredients", value: "dIngredients"}],
        }
    },
    methods: {
        rowClicked(value, info){
            this.$emit('row-clicked', value)
        }
    }
}
</script>