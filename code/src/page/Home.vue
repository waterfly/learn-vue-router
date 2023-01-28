<!--
 * @Author: WaterFly
 * @Date: 2022-11-08 16:35:42
 * @Description: 
 * Just enjoy code.
-->

<template>
  <div class="home">
    <p>Home Page!</p>

    <button class="item" type="button" @click="click(1)">push Page A!</button>
    <button class="item" type="button" @click="click(2)">
      replace Page B!
    </button>
    <button class="item" type="button" @click="click(3)">Go to Page C!</button>
  </div>
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

onBeforeRouteLeave((to, from) => {
  console.log("Home 组件守卫 onBeforeRouteLeave");
  console.log("to", to);
  console.log("from", from);
});

const click = (type) => {
  switch (type) {
    case 1:
      {
        router.global = {
          test: 1,
        };
        router.push({
          name: "PageA",
          // path: "/a/",
          // query: {
          //   id: 1,
          // },
          params: {
            userId: 5,
            aaa: 111,
            testaaa: {
              a: 1,
              b: 2,
              c: 3,
            },
          },
          meta: {
            m1: 1,
            m2: 2,
          },
        });
        // router.push({
        //   name: "PageA",
        //   params: { username: "posva" },
        //   hash: "#bio",
        // });
      }
      break;
    case 2:
      {
        router.push({ name: "PageB", params: { id: 111 } });
      }
      break;
    case 3:
      {
        router.push({ name: "PageC" }).then((res) => {
          console.log("res", res);
        });

        // console.log(router.resolve({ name: "PageC" }));
      }
      break;
  }
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;

  font-size: 24px;
  color: #42b883;
}

.item {
  margin-top: 30px;
}
</style>
