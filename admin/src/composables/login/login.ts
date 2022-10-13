import type { loginData } from "./types";

export const services = {
  login(loginData: loginData) {
    // store.login(loginData).then(val)
    console.log(loginData);
    return "data";
  },
};
