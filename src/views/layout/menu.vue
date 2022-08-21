<template>
  <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline" :open-keys="openKey"
    @openChange="onOpenChange">
    <template v-for="(item, index) in menuList" :key="index">
      <template v-if="!item.children">
        <a-menu-item :key="item.id" @click="$utils.useRouterPush(item.path)">
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
import { onMounted, PropType, reactive, ref } from "vue";
import { inject } from "vue"
const $utils = inject('$utils') as any
const props = defineProps({
  menuList: {
    type: null as any as PropType<any>,
    required: true,
  },
});
let rootSubmenuKeys: any[] = []
onMounted(() => {
  props.menuList.forEach((i: any) => {
    rootSubmenuKeys.push(i.id)
  });
})

const openKey = ref<string[]>(["1"])
const selectedKeys = ref<string[]>(["2"]);
const onOpenChange = (openKeys: string[]) => {
  const latestOpenKey = openKeys.find(key => openKey.value.indexOf(key) === -1);

  if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
    openKey.value = openKeys;
  } else {
    openKey.value = latestOpenKey ? [latestOpenKey] : [];
  }
};


</script>
<style lang="scss" scoped>
</style>
