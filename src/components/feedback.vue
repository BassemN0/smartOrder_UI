<template>
  <div class="feedback" style="padding: 0 0 80px 0">
    <app-logo></app-logo>
    <transition name="fade" mode="out-in">
      <div v-if="reviewed" key="thanks">
        <p>شكرا لك على مساهمتك سيتم تحويلك للصفحة الرئيسية في غضون ثوان</p>
        <button class="btn my-btn black-bg my-margin" @click="reReview">
          تسجيل مراجعة جديده
        </button>
        <div class="btn my-btn my-margin" @click="clr">المتابعة الآن</div>
      </div>
      <div v-if="!reviewed" key="review" style="position: relative">
        <h3 style="margin: 20px auto">ساعدنا لكي نكون افضل</h3>
        <form action="">
          <div class="rating-container">
            <p class="d-inline-block">جودة الطعام:</p>
            <b-form-rating
              v-model="value.foodQuality"
              show-value
              color="#fca311"
            ></b-form-rating>
          </div>
          <div class="rating-container">
            <p class="d-inline-block">نظافة المكان:</p>
            <b-form-rating
              v-model="value.placeCleanliness"
              show-value
              color="#fca311"
            ></b-form-rating>
          </div>
          <div class="rating-container">
            <p class="d-inline-block">سرعة الخدمة:</p>
            <b-form-rating
              v-model="value.serviceSpeed"
              show-value
              color="#fca311"
            ></b-form-rating>
          </div>
          <div class="rating-container">
            <p class="d-inline-block">المنيو الالكترونية:</p>
            <b-form-rating
              v-model="value.appExperience"
              show-value
              color="#fca311"
            ></b-form-rating>
          </div>
          <div class="rating-container">
            <p class="d-inline-block">التجربة العامة:</p>
            <b-form-rating
              v-model="value.overallExperience"
              show-value
              color="#fca311"
            ></b-form-rating>
          </div>
          <input
            type="text"
            name="user-name"
            id="userNameInput"
            placeholder="الاسم (اختياري)"
            v-model="value.name"
          />
          <input
            type="number"
            name="user-phone"
            id="userPhoneInput"
            placeholder="رقم الهاتف (اختياري)"
            v-model="uPhone"
          />
          <textarea
            type="text"
            name="user-comment"
            id="userCommentInput"
            cols="30"
            rows="5"
            placeholder="تعليقك (اختياري)"
            resize="flase"
            v-model="value.comment"
          ></textarea>
          <p class="fed-er" :class="{ visible: error }">
            {{ this.error }}
          </p>
          <button class="btn my-btn my-btn2 mt-5 mb-3" @click="sendReview">
            ارسال <span class="loading-2"></span>
          </button>
        </form>
      </div>
    </transition>
    <app-footer></app-footer>
  </div>
</template>

<script>
import axios from "@/axios-global";
import logo from "./logoContainer";

export default {
  name: "feedBack",
  data() {
    return {
      regex: /^[0-9]+$/,
      error: false,
      uName: "",
      uPhone: "",
      uComment: "",
      value: {
        foodQuality: 5,
        placeCleanliness: 5,
        serviceSpeed: 5,
        appExperience: 5,
        overallExperience: 5,
        name: this.uName,
        phone: null,
        comment: this.uComment,
      },
      reviewed: false,
      delayedACtion: "",
    };
  },
  components: {
    "app-logo": logo,
  },
  methods: {
    sendReview() {
      event.preventDefault();
      if (this.uPhone != "") {
        this.value.phone = this.uPhone;
      } else {
        this.value.phone = null;
      }
      if (
        this.value.phone == null ||
        (this.value.phone.match(this.regex) && this.value.phone.length == 11)
      ) {
        document.querySelector(".loading-2").style.width = 24 + "px";

        axios
          .post("api/feedback/addFeedback", this.value)
          .then((res) => {
            if (res.status == 200) {
              this.reviewed = true;
              this.delayedACtion = setTimeout(
                () => this.$router.push({ name: "الرئيسية" }),
                3500
              );
            } else {
              document.querySelector(".loading-2").style.width = 0 + "px";
              this.error = "حدث خطأ ما برجاء المحاولة مرة اخرى.";
            }
          })
          .catch(() => {
            document.querySelector(".loading-2").style.width = 0 + "px";
            this.error = "حدث خطأ ما برجاء المحاولة مرة اخرى.";
          });
      } else {
        this.error = "برجاء ادخال رقم صالح";
      }
    },
    reReview() {
      this.value.foodQuality = 5;
      this.value.placeCleanliness = 5;
      this.value.serviceSpeed = 5;
      this.value.appExperience = 5;
      this.value.overallExperience = 5;
      this.value.comment = "";
      this.value.phone = null;
      this.value.name = "";
      this.reviewed = false;
      clearTimeout(this.delayedACtion);
    },
    clr() {
      clearTimeout(this.delayedACtion);
      this.$router.push({ name: "الرئيسية" });
    },
  },
  watch: {
    reviewed() {},
  },
};
</script>

<style scoped>
@import url("~@/assets/componentsCss/feedBack.css");
</style>
