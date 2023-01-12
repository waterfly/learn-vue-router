<!--
 * @Author: WaterFly
 * @Date: 2023-01-10 20:13:22
 * @Description: 
 * Just enjoy code.
-->

<template>
  <div>
    <p>Page A sub</p>
    <p>{{ userId }}}</p>
  </div>
</template>

<script>
export default {
  props: {
    userId: {
      type: String,
      default: "1",
    },
  },
  beforeRouteLeave(to, from) {
    // 在渲染该组件的对应路由被验证前调用
    // 不能获取组件实例 `this` ！
    // 因为当守卫执行时，组件实例还没被创建！

    console.log("page PageASub 组件守卫 beforeRouteLeave", to, from);
  },
  beforeRouteUpdate(to, from) {
    console.log("page PageASub 组件守卫 beforeRouteUpdate", to, from);
  },
  beforeRouteEnter(to, from, next) {
    console.log("page PageASub 组件守卫 beforeRouteEnter", from, to);
    next((vm) => {
      console.log("page PageASub 组件守卫 beforeRouteEnter next 钩子", vm);
    });
    return true;
  },
};
</script>

<style scoped></style>
