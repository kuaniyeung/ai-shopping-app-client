import { createApp } from "vue";
import { createPinia } from "pinia";
import "./index.css";
import { useInitAppComponents } from "./helpers";

const { initGlobalComponents } = useInitAppComponents();

import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);

initGlobalComponents(app);
app.use(pinia);

app.mount("#app");
