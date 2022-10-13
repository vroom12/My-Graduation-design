import type { App } from "vue";
import login from "./login/index.vue";
import vueswiper from "./swiper/index.vue";

export default [
  {
    install(app: App): void {
      app.component("login", login);
    },
  },
  {
    install(app: App): void {
      app.component("vue-swiper", vueswiper);
    },
  },
];
