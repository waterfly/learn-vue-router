<!--
 * @Author: WaterFly
 * @Date: 2022-11-08 16:33:48
 * @Description: 
 * Just enjoy code.
-->

<template>
  <div>Page C</div>
</template>

<script>
export default {
  beforeRouteEnter: (to, from, next) => {
    next((vm) => {
      console.log("beforeRouteEnter next vm", vm);
      debugger;
    });
    return true;
  },
};
</script>

<script setup>
import { useRouter, useRoute } from "vue-router";
</script>

<style lang="scss" scoped></style>
