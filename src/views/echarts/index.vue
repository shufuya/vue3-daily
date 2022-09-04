<template>
  <div>
    <div style="display: flex;justify-content: space-between;">
      <Suspense>
        <template #default>
          <a-card style="width: 500px" hoverable>
            <AsyncPopup :echartsOption="firstEchart" ref="ea" height="400px"></AsyncPopup>
          </a-card>
        </template>
        <template #fallback>
          <a-skeleton active />
        </template>
      </Suspense>
    </div>
    <!-- {{ ea }} -->
    <a-button @click="showChildren">点击</a-button>
    <a-button @click="stopWatch">取消</a-button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watchEffect,defineAsyncComponent } from 'vue';
const ea = ref(null) as any
const firstEchart = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
};
const secondEchart = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '40',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ]
    }
  ]
};
const Loading = () => import('@/components/Loading/index.vue')
const AsyncPopup = defineAsyncComponent({
  loader: () => import('@/components/Echarts/index.vue'),
  // 加载异步组件时使用的组件
  loadingComponent: Loading,
  // 加载失败时使用的组件
  errorComponent: Loading,
  // 在显示加载组件之前延迟。默认值：200ms。
  delay: 1000,
  // 超过给定时间，则会显示错误组件。默认值：Infinity。
  timeout: 3000
})
let time = ref(0)
let unwatch: any = null
onMounted(() => {
  setTimeout(() => {
    unwatch = watchEffect(() => {
      if (time.value) {

        console.log(time.value);
      }
    })
  }, 100)
})
const showChildren = () => {
  time.value++
  ea.value.show()
}
const stopWatch = () => {
  console.log(unwatch);
  unwatch()
}

</script>

<style lang="scss" scoped>
</style>
