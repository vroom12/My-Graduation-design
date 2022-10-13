<script setup lang="ts">
import SwiperClass /* swiper modules... */ from "Swiper";
import { Pagination, Navigation, Autoplay } from "Swiper";

// use swiper modules
SwiperClass.use([
  /* swiper modules... */
  Pagination,
  Navigation,
  Autoplay,
]);
const props = defineProps<{
  imgData?: [];
}>();
const url =
  "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg";
</script>

<template>
  <swiper
    class="swiper"
    :modules="SwiperClass"
    :space-between="30"
    :centered-slides="true"
    :navigation="true"
    :loop="true"
    :pagination="{
      clickable: true,
    }"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
  >
    <swiper-slide class="slide"
      ><el-image style="width: 100%; height: 100%" :src="url" fit="fill"
    /></swiper-slide>
  </swiper>
</template>

<style lang="scss" scoped></style>
