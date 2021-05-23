<template>
  <div>
    <app-header></app-header>
    <div v-if="loaded">
      <keep-alive>
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </keep-alive>
    </div>
    <div class="container" v-if="!loaded && !error">
      <app-loading></app-loading>
    </div>
    <div class="container" v-if="error">
      <app-error></app-error>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import axios from "@/axios-global";
import { centralData } from "@/main.js";

export default {
  name: "menuLayout",
  data() {
    return {
      myData: centralData.allSections,
    };
  },
  computed: {
    loaded() {
      return centralData.loaded;
    },
    error() {
      return centralData.error;
    },
  },
  created() {
    axios
      .get("api/class/classesForClient")
      .then((res) => {
        if (res.status == 200) {
          centralData.loadedMenu = true;
          centralData.allSections = res.data.result;
          centralData.loaded = true;
        } else {
          centralData.error = true;
          centralData.loaded = false;
        }
      })
      .catch(() => {
        centralData.error = true;
        centralData.loaded = false;
      });
  },
};
</script>

