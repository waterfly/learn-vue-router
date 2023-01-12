<template>
  <router-view v-slot="{ Component, route }">
    <component :is="Component" :key="route.meta.name"></component>
  </router-view>
</template>

<script setup>
import {
  useRouter,
  useRoute,
  onBeforeRouteUpdate,
  onBeforeRouteLeave,
} from "vue-router";

const router = useRouter();
const route = useRoute();

// 全局前置守卫
router.beforeEach((to, from) => {
  console.log("全局前置守卫 router.beforeEach");
  console.log("to", to);
  console.log("from", from);
  return true;
});

// 全局解析守卫
router.beforeResolve((to, from) => {
  console.log("全局解析守卫 router.beforeResolve");
  console.log("to", to);
  console.log("from", from);
});

// 全局后置钩子
router.afterEach((to, from) => {
  console.log("全局后置钩子 router.afterEach");
  console.log("to", to);
  console.log("from", from);
});
</script>

<style>
body {
  background-color: white;
  color: #42b883;
}

#app {
  width: 100vw;
  height: 100vh;
}
</style>
