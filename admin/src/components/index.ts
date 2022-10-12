import type { App } from "vue";
import component from "./config";

const components = [...component];

export default {
  install(app: App) {
    components.map((item: any) => {
      app.use(item);
    });
  },
};
