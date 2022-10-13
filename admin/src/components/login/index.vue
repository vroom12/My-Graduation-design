<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import type { loginData } from "@/composables/login/types";
import { useloginStore } from "@/stores/login";
import { storeToRefs } from "pinia";
import StringUtil from "@/util/StringUtil";
import { ElLoading, ElMessage, ElMessageBox } from "element-plus";
import { ref } from "vue";

const formData = {};
const route = useRoute();
const router = useRouter();
const loginStore = useloginStore();
const { username, password } = storeToRefs(loginStore);

const dologin = (loginData: loginData) => {
  if (
    StringUtil.isEmpty(username.value) ||
    StringUtil.isEmpty(password.value)
  ) {
    ElMessage.error("用户名或密码为空！");
    return;
  }

  loginStore.login(loginData).then((data) => {
    router.push({
      name: "about",
    });
  });
};
</script>

<template>
  <div class="login-component">
    <!-- form -->
    <el-form class="login-component-form" :model="formData" label-width="100px">
      <el-form-item label="用户名" la>
        <el-input v-model="username" size="large"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          v-model="password"
          type="password"
          autocomplete="off"
          size="large"
        ></el-input>
      </el-form-item>
      <el-button
        @click.native="dologin({ username, password })"
        type="primary"
        size="large"
        round
        style="width: 100%"
        >登录</el-button
      >
    </el-form>
  </div>
</template>

<style scoped>
.login-component {
  position: absolute;
  top: 25%;
  left: 50%;
  width: 25%;
  height: 40%;
  border: 1px solid red;
}
.login-component-form {
  width: 85%;
  margin: 15% auto;
}
</style>
