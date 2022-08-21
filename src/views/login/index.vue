<template>
  <div class="bgc">
    <div class="login-box">
      <a-button
        style="position: absolute; top: 10px; right: 20px"
        @click="changeLang"
        >{{ $t("lang") }}</a-button
      >
      <a-form
        :model="formState"
        name="basic"
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 16 }"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item
          :label="$t('label.username')"
          name="username"
          :rules="[{ required: true, message: $t('login.name') }]"
        >
          <a-input v-model:value="formState.username" />
        </a-form-item>

        <a-form-item
          :label="$t('label.password')"
          name="password"
          :rules="[{ required: true, message: $t('login.password') }]"
        >
          <a-input-password v-model:value="formState.password" />
        </a-form-item>

        <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
          <a-checkbox v-model:checked="formState.remember">{{
            $t("button.rememberMe")
          }}</a-checkbox>
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
          <a-button type="primary" html-type="submit">{{
            $t("button.submit")
          }}</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import { reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
const { locale, t } = useI18n();
const router = useRouter();
const route = useRoute();
interface FormState {
  username: string;
  password: string;
  remember: boolean;
}
const formState = reactive<FormState>({
  username: "wjc",
  password: "123",
  remember: true,
});
const onFinish = (values: FormState) => {
  if (values.username === "wjc" && values.password === "123") {
    console.log(route);
    console.log(router);
    router.replace({
      path: "/home/echarts"
    });
  }
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const changeLang = () => {
  if (locale.value === "zhCn") {
    locale.value = "en";
  } else {
    locale.value = "zhCn";
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/global.scss";

.bgc {
  background: url("@/assets/img/login-bg.jpg") no-repeat;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .login-box {
    background: rgba(201, 183, 200, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-right-color: rgba(60, 60, 60, 0.4);
    border-bottom-color: rgba(60, 60, 60, 0.4);
    width: 500px;
    height: 300px;
    padding: 49px 56px 30px 0;
    z-index: 5;
    position: relative;
  }
}
</style>
