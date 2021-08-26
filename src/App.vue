<template>
  <div id="app">
    <div class="back-ground">
      <img src="@/assets/media/background.jpg" />
    </div>
    <div style="position: relative; z-index: 5">
      <appLayout></appLayout>
    </div>
    <div id="to-top" @click="scrollToTop"></div>
  </div>
</template>

<script>
// import centralData from './main'
import axios from "axios";
import appLayout from "./components/appLayout";

export default {
  name: "App",
  data() {
    return {
      tableId: this.$route.params.id,
    };
  },
  created() {
    axios
      .put(`http://localhost:1000/api/table/tableLogin/${this.tableId}`)
      .then((res) => {
        if (res.data.statusCode == 200) {
          this.$cookies.set("idToken", res.data.token);
        }
      })
      .catch(() => this.$cookies.set("logged", false));
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= 400) {
        document.getElementById("to-top").style.opacity = 1;
        document.getElementById("to-top").style.zIndex = 6;
      } else {
        document.getElementById("to-top").style.opacity = 0;
        document.getElementById("to-top").style.zIndex = 4;
      }
    });
  },
  methods: {
    scrollToTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
  },
  components: { appLayout },
};
</script>

<style>
@import url("./assets/cssEdits.css");
</style>
