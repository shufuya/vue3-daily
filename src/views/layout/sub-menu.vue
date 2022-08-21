<template>
  <a-sub-menu :key="menuInfo.id">
    <template #icon>
      <component :is="menuInfo.icon"/>
    </template>
    <template #title>{{ menuInfo.title }}</template>
    <template v-for="item in menuInfo.children" :key="item.id">
      <template v-if="!item.children">
        <a-menu-item :key="item.id" @click="routerPush(item.path)">
          <template #icon>
            <component :is="item.icon"/>
          </template>
          {{item.title}}
        </a-menu-item>
      </template>
      <template v-else>
        <SubMenu :menu-info="item" />
      </template>
    </template>
  </a-sub-menu>
</template>

<script lang="ts">
export default {
  name: "subMenu"
}
</script>
<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter()
const props =defineProps({
  menuInfo: {
    type: Object,
    default: () => ({}),
  },
})
const routerPush = (path:string) => {
  router.push({
    path
  })
}
</script>

<style scoped>

</style>
