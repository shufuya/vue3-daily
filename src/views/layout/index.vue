<template>
  <a-layout class="layout">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <Menu :menuList="menuJson"></Menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
      </a-layout-header>
      <a-layout-content :style="{
        margin: '1.5rem 1rem',
        padding: '1.5rem',
        background: '#fff',
        minHeight: '17.5rem',
        overflow:'hidden',
      }">
        <!-- <Transition enter-active-class="animate__animated animate__bounceInRight"
          leave-active-class="animate__animated animate__backOutRight">
          <router-view></router-view>
        </Transition> -->
        <router-view v-slot="{ Component }">
          <transition enter-active-class="animate__animated animate__bounceInRight"
            leave-active-class="animate__animated animate__backOutRight">
            <keep-alive max="10">
              <component :is="Component" />
            </keep-alive>
          </transition>
        </router-view>
        <!-- <transition enter-active-class="animate__animated animate__bounceInRight"
          leave-active-class="animate__animated animate__backOutRight">
          <keep-alive max="10">
            <router-view />
          </keep-alive>
        </transition> -->
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';
import Menu from './menu.vue'
import menuJson from './menuJson.js';
import { ref, reactive, defineComponent } from "vue";

export default defineComponent({
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    Menu
  },
  setup() {
    const selectedKeys = ref<string[]>(["1"]);
    const collapsed = ref<boolean>(false);
    return {
      MenuUnfoldOutlined,
      MenuFoldOutlined,
      Menu,
      menuJson,
      ref,
      reactive,
      selectedKeys,
      collapsed,
    };
  },
});
</script>
<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100vh;
}

.trigger {
  font-size: 1.125rem;
  line-height: 4rem;
  padding: 0 1.5rem;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}

.logo {
  height: 2rem;
  background: rgba(255, 255, 255, 0.3);
  margin: 1rem;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
