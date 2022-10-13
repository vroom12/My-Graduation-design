<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
</script>

<template>
  <div class="home">
    <h1>home</h1>
    <vue-swiper class="vue_swiper"></vue-swiper>
    <login></login>
  </div>
</template>

<style scoped>
.home {
  height: 100vh;
}
.vue_swiper {
  position: absolute;
  top: 25%;
  left: 25%;
  width: 25%;
  height: 40%;
  border: 1px solid red;
}
</style>
