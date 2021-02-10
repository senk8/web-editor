<template>
    <div>
    <li v-for="data in datas" :key="data">{{ data }} </li>
    </div>
</template>


<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: ()=>({datas:[12,12,12,13]}),
}
</script>