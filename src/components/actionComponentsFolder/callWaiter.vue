<template>
  <div @click="callWaiter">
    <slot></slot>
    <div class="confirm-outer call-waiter-box" style="display: none">
      <div class="confirm-box">
        <div class="cancel-box" @click="removeSection"></div>
        <transition name="fade" mode="out-in">
          <div v-if="!ordered" key="callWaiter">
            <p>هل انت متاكد انك تريد مناداة ويتر؟</p>
            <div class="d-flex btns-container w-100">
              <button class="btn confirm-btns yes-btn" @click="yesCallWaiter">
                نعم <span class="loading-1"></span>
              </button>
              <button class="btn confirm-btns no-btn" @click="dontCallWaiter">
                لا
              </button>
            </div>
          </div>
          <div v-else key="theMessage">
            <p>
              {{ resultMessage }}
            </p>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "../../axios-global";

export default {
  name: "callWaiter",
  data() {
    return {
      ordered: false,
      resultMessage: "",
    };
  },
  methods: {
    callWaiter() {
      let container = document.querySelector(".call-waiter-box");
      if (container.style.display == "none") {
        container.style.display = "block";
        setTimeout(() => (container.style.top = 0), 50);
      }
    },
    yesCallWaiter() {
      document.querySelector(".loading-1").style.width = 24 + "px";
      axios
        .put(`api/client/askForWaiter/${this.$route.params.id}`)
        .then((res) => {
          if (res.data.statusCode == 200) {
            setTimeout(() => {
              this.ordered = false;
              this.removeSection();
            }, 3500);
            this.resultMessage = res.data.message;
            this.ordered = true;
          } else {
            this.resultMessage =
              "حدث خطأ ما، برجاء اعادة مسح الكود والمحاولة مرة اخرى.";
            this.ordered = true;
          }
        })
        .catch(() => {
          this.resultMessage =
            "حدث خطأ ما، برجاء اعادة مسح الكود والمحاولة مرة اخرى.";
          this.ordered = true;
        });
    },
    dontCallWaiter() {
      this.removeSection();
    },
    removeSection() {
      let container = document.querySelector(".call-waiter-box");
      container.style.top = -100 + "%";
      setTimeout(() => (container.style.display = "none"), 500);
    },
  },
};
</script>
<style scoped>
@import url("~@/assets/componentsCss/callWaiterOrderCheck.css");
</style>