<!--
 * @Author: WaterFly
 * @Date: 2022-11-08 16:33:43
 * @Description: 
 * Just enjoy code.
-->

<template>
  <div>
    <p>Page B</p>
    <p>Home -> Page A -> PageB</p>
    <button class="item" type="button" @click="click()">go(-2)回到Home</button>
  </div>
</template>

<script>
export default {
  beforeRouteEnter: function (to, from, next) {
    console.log("PageB 组件守卫 beforeRouteEnter", to);
    next((vm) => {
      console.log("PageB 组件守卫 beforeRouteEnter next钩子", vm);
      vm.target = 100;
    });
  },
};
</script>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const target = ref(0);

const click = () => {
  router.go(-2);
};

defineExpose({
  target,
});
</script>

<style lang="scss" scoped></style>
