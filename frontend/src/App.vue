<script>
import Navigation from "./components/Navigation.vue";
export default {
  components: {
    Navigation,
  },
};
</script>

<template>
  <Navigation />
  <router-view></router-view>
</template>

<style scoped></style>
