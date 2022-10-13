import { defineStore } from "pinia";
import type { loginData } from "@/composables/login/types";
import { services as loginServices } from "@/composables/login/login";

export const useloginStore = defineStore("login", {
  state: (): loginData => ({
    username: "",
    password: "",
  }),

  actions: {
    async login(loginData: loginData) {
      const data = await loginServices.login(loginData);
      return data;
    },
  },

  getters: {},
});
