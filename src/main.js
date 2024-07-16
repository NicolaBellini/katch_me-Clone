import "bootstrap/dist/css/bootstrap.css";
import { createApp } from "vue";
import App from "./App.vue";
import "flickity/css/flickity.css";
import { router } from "./router.js";

createApp(App).use(router).mount("#app");
