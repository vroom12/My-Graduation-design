<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
// import login from "../components/login/index.vue";

const route = useRoute();
const router = useRouter();

const dologin = () => {
  router.push({
    name: "about",
  });
};
</script>

<template>
  <h1 @click="dologin">home</h1>
  <login></login>
</template>
