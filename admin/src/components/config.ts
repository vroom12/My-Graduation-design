import type { App } from "vue";
import login from "./login/index.vue";

export default [
  {
    install(app: App) {
      app.component("login", login);
    },
  },
];
