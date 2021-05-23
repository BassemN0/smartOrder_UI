<template>
  <div @click="orderCheck">
    <slot></slot>
    <div class="confirm-outer order-check-box" style="display: none">
      <div class="confirm-box">
        <div class="cancel-box" @click="removeSection"></div>
        <transition name="fade" mode="out-in">
          <div v-if="!errOrder" key="1">
            <transition name="fade" mode="out-in">
              <div v-if="!ordered" key="orderBox">
                <p>هل انت متاكد انك تريد طلب شيك؟</p>
                <div class="d-flex btns-container w-100">
                  <button
                    class="btn confirm-btns yes-btn"
                    @click="yesOederCheck"
                  >
                    نعم <span class="loading-4"></span>
                  </button>
                  <button
                    class="btn confirm-btns no-btn"
                    @click="dontOrderCheck"
                  >
                    لا
                  </button>
                </div>
              </div>
              <div v-else key="redirectMessage">
                <p>
                  {{ resultMessage }}
                  <span v-if="!isFeed">
                    سيتم تحويلك لصفحة يمكنك من خلالها التعبير عن مدى رضاك عن
                    خدمتنا لك
                  </span>
                  <span v-else>
                    انت الان في صفحة تمكنك من تقييم خدمتنا المقدمه اليك، نرجو ان
                    نكون عند حسن ظنك.
                  </span>
                </p>
              </div>
            </transition>
          </div>
          <div v-else key="2">
            <p>حدث خطأ ما، برجاء اعادة مسح الكود والمحاولة مرة اخرى.</p>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "../../axios-global";

export default {
  name: "orderCheck",
  data() {
    return {
      errOrder: false,
      ordered: false,
      isFeed: false,
      resultMessage: "",
      delayedAction: "",
    };
  },
  methods: {
    orderCheck() {
      let cContainer = document.querySelector(".order-check-box");
      if (cContainer.style.display == "none") {
        cContainer.style.display = "block";
        setTimeout(() => (cContainer.style.top = 0), 50);
      }
    },
    yesOederCheck() {
      document.querySelector(".loading-4").style.width = 24 + "px";
      axios
        .put(`api/client/askForCheck/${this.$route.params.id}`)
        .then((res) => {
          if (res.data.statusCode == 200) {
            this.resultMessage = res.data.message;
            this.ordered = true;
            if (this.$route.name != "التقييم") {
              this.delayedAction = setTimeout(() => {
                this.$router.push({ name: "التقييم" });
                this.removeSection();
              }, 4000);
            } else {
              this.isFeed = true;
              setTimeout(() => {
                this.ordered = false;
                this.removeSection();
              }, 4500);
            }
          } else {
            this.errOrder = true;
          }
        })
        .catch(() => (this.errOrder = true));
    },
    dontOrderCheck() {
      this.removeSection();
    },
    removeSection() {
      let cContainer = document.querySelector(".order-check-box");
      cContainer.style.top = -100 + "%";
      setTimeout(() => (cContainer.style.display = "none"), 500);
      clearTimeout(this.delayedAction);
    },
  },
};
</script>
<style scoped>
@import url("~@/assets/componentsCss/callWaiterOrderCheck.css");
</style>