import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import PrimeVue from 'primevue/config'
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/lara-light-indigo/theme.css";
import 'primeicons/primeicons.css';


const app = createApp(App);

const pinia = createPinia();

// middlewares
app.use(pinia);
app.use(router);
app.use(PrimeVue)

app.mount("#app");
