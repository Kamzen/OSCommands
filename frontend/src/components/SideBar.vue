<template>
    <div class="card flex justify-content-center">
        <Sidebar v-model:visible="visible">
            <h2>Sidebar</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.</p>
        </Sidebar>
        <Button icon="pi pi-align-justify" class="fc-button" @click="visible=true"/>
    </div>
</template>

<script>
import Sidebar from "primevue/sidebar";
import Button from "primevue/button";

export default {
    components: {
        Sidebar,
        Button
    },
    data() {
        return {
            visible: false
        }
    }
}
</script>

<style scoped>
.fc-button{
    border: 1px solid red;
    height: fit-content;
}
</style>