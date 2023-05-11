<template>
    <div class="fc-view-container">
        <Navigation />
        <h4 class="p-chip-text">OS Commands</h4>
        <div class="p-card">
            <DataTable :value="products" tableStyle="min-width: 50rem">
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    </div>
</template>
<script>

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Row from 'primevue/row';
import {ref} from "vue";
import Card from "primevue/card";
import Navigation from "../components/Navigation.vue";

export default {
    components: {
        Navigation,
        DataTable,
        Column,
        ColumnGroup,
        Row,
        Card
    },
    data() {
        return {
            title: "Home",
            products: ref()
        };
    },
    created() {
        this.products = [
            {
                code: 1,
                name: 'Atchar',
                category: 'Category',
                quantity: 'Quantity'
            },
            {
                code: 1,
                name: 'Atchar',
                category: 'Category',
                quantity: 'Quantity'
            },
            {
                code: 1,
                name: 'Atchar',
                category: 'Category',
                quantity: 'Quantity'
            }
        ]
    }
};
</script>

<style scoped>
.fc-view-container{
    padding: 10px;
}
</style>
