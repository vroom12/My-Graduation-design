import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import VueAwesomeSwiper from "vue-awesome-swiper";

import App from "./App.vue";
import router from "./router";
import globalComponents from "./components/index";

// import swiper module styles
import "swiper/css";
import "./assets/index.css";

const app = createApp(App);

app.use(createPinia());
app.use(router).use(ElementPlus).use(globalComponents).use(VueAwesomeSwiper);

app.mount("#app");
