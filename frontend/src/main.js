import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const app = createApp(App);

const pinia = createPinia();

// middlewares
app.use(pinia);
app.use(router);

app.mount("#app");
