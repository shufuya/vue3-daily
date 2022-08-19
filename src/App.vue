<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { useI18n } from "vue-i18n";
import {onMounted} from "vue";
const { locale, t } = useI18n()
onMounted(() => {
  console.log(locale.value)
  locale.value = 'en'

})
</script>

<template>
  <router-view></router-view>
</template>

<style scoped>
</style>
