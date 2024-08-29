import { createApp } from "vue";
import { createPinia } from "pinia";
import "./index.css";
import App from "./App.vue";
import { Button } from "./components";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.component("Button", Button);
app.mount("#app");
