<template>
  <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
    <template v-for="(item, index) in menuList" :key="index">
      <template v-if="!item.children">
        <a-menu-item :key="item.id" @click="routerPush(item.path)">
          <component :is="item.icon" />
          <span>{{ item.title }}</span>
        </a-menu-item>
      </template>
      <template v-else>
        <SubMenu :menuInfo="item" />
      </template>
    </template>
  </a-menu>
</template>
<script lang="ts">
export default {
  name: 'Menu',
};
</script>

<script lang="ts" setup>
import SubMenu from './sub-menu.vue'
import { PropType, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter()
const props = defineProps({
  menuList: {
    type: null as any as PropType<any>,
    required: true,
  },
});

const routerPush = (path:string) => {
  router.push({
    path
  })
}

const selectedKeys = ref<string[]>(["1"]);
const collapsed = ref<boolean>(false);
</script>
<style lang="scss" scoped>
</style>
