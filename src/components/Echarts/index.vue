<template>
  <div ref="echart" :style="{ width, height }" />
</template>
<script lang="ts">
export default {
  name: 'Echarts'
}
</script>
<script setup lang="ts">
import { inject, onMounted, ref } from "vue"
const $echarts = inject('$echarts') as any
const echart = ref(null)
const props = withDefaults(defineProps<{
  width?: string,
  height?: string,
  echartsOption: any
}>(), {
  width: '100%',
  height: '400px',
  echartsOption: {
    title: {
      text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
      data: ['销量']
    },
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  }
})
const show = () => {
  console.log(1111);
}
defineExpose({ show })
onMounted(() => {
  const myChart = $echarts.init(echart.value);
  myChart.setOption(props.echartsOption);
})
const time = await setTimeout(() => {
  console.log("test");
},2000)
</script>

<style lang="scss" scoped>
</style>
