<template>
  <div>
    <app-logo></app-logo>
    <div class="home-container">
      <p style="color: #fff; font-size: 20px" v-if="clientName != null">
        مرحبا بك يا {{ clientName }}
      </p>
      <h2>اخبرنا ماذا تريد ان تفعل؟</h2>
      <div class="home-btns">
        <ul>
          <li>
            <router-link to="menu" tag="div"> عرض قائمة الطعام </router-link>
          </li>
          <li>
            <callWaiter>
              <p class="confirm-p">مناداة ويتر</p>
            </callWaiter>
          </li>
          <li>
            <orderCheck>
              <p class="confirm-p">طلب شيك</p>
            </orderCheck>
          </li>
          <li>
            <div @click="toReg">التسجيل لدينا</div>
          </li>
          <li>
            <router-link to="feedback" tag="a"> التقييم والمراجعة </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="container">
      <app-rights></app-rights>
    </div>
  </div>
</template>

<script>
import logo from "./logoContainer";

export default {
  name: "homePage",
  data() {
    return {
      clientName: localStorage.getItem("clientName"),
    };
  },
  methods: {
    toReg() {
      this.$router.push("register");
      localStorage.removeItem("clientName");
    },
  },
  components: {
    "app-logo": logo,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("~@/assets/componentsCss/homeStyle.css");
</style>
