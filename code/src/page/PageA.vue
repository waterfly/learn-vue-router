<!--
 * @Author: WaterFly
 * @Date: 2022-11-08 16:33:30
 * @Description: 
 * Just enjoy code.
-->

<template>
  <div>
    <p>Page A</p>

    <button class="item" type="button" @click="click()">push Page SubA!</button>

    <div class="test">
      <router-view v-slot="{ Component, route }">
        <component :is="Component" :key="route.meta.name"></component>
      </router-view>
    </div>
  </div>
</template>

<!-- <script >
export default {
  beforeRouteEnter: (to, from, next) => {
    debugger;
    console.log("组件守卫 beforeRouteEnter", from, to);
    next((vm) => {
      console.log("组件守卫 beforeRouteEnter next 钩子", vm);
    });
    return true;
  },
};
</script> -->

<script>
import { defineComponent, defineProps } from "vue";

export default defineComponent({
  data() {
    return {
      currId: 1,
    };
  },
  methods: {
    click() {
      this.$router.push({ name: "pageSub", params: { userId: this.currId++ } });
    },
  },
  mounted() {
    console.log("params", this.$route.params);
    console.log("params.test", this.$route.params.test);
  },
  beforeRouteLeave(to, from) {
    // 在渲染该组件的对应路由被验证前调用
    // 不能获取组件实例 `this` ！
    // 因为当守卫执行时，组件实例还没被创建！
    console.log("PageA 组件守卫 beforeRouteLeave");
    console.log("to", to);
    console.log("from", from);
  },
  beforeRouteUpdate(to, from) {
    console.log("PageA 组件守卫 beforeRouteUpdate");
    console.log("to", to);
    console.log("from", from);
  },
  beforeRouteEnter(to, from, next) {
    console.log("PageA 组件守卫 beforeRouteEnter", from, to);
    next((vm) => {
      console.log("PageA 组件守卫 beforeRouteEnter next 钩子 111", vm);
    });
    return true;
  },
});
</script>

<style scoped>
.test {
  width: 300px;
  height: 100px;
  background-color: red;
}
</style>
