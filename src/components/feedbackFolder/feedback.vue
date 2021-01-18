<template>
  <div class="feedback" style="padding: 0 0 80px 0">
    <app-logo></app-logo>
      <transition name="fade" mode="out-in">

        <div v-if="reviewed" key="thanks">
          <p>
            شكرا لك على مساهمتك سيتم تحويلك للصفحة الرئيسية في غضون ثوان
          </p>
          <button class="btn my-btn black-bg" @click="reReview">
            تسجيل مراجعة جديده
          </button>
          <router-link class="btn my-btn" :to="{name : 'الرئيسية'}">
            المتابعة الآن
          </router-link>
        </div>
        <div v-if="!reviewed" key="review">
          <h3 style="margin: 20px auto">
            ساعدنا لكي نكون افضل
          </h3>
          <form action="">
            <div class="rating-container">
              <p class="d-inline-block" >
                جودة الطعام :
              </p>
              <b-form-rating v-model="value.ratings.food" show-value color="#fca311"></b-form-rating>
            </div>
            <div class="rating-container">
              <p class="d-inline-block" >
                نظافة المكان :
              </p>
              <b-form-rating v-model="value.ratings.clean" show-value color="#fca311"></b-form-rating>
            </div>
            <div class="rating-container">
              <p class="d-inline-block" >
                جودة الخدمة :
              </p>
              <b-form-rating v-model="value.ratings.service" show-value color="#fca311"></b-form-rating>
            </div>
            <input 
              type="text" 
              name="user-name" 
              id="userNameInput" 
              placeholder="الاسم (اختياري)"
              v-model="value.name">
            <input 
              type="number" 
              name="user-phone" 
              id="userPhoneInput" 
              placeholder="رقم الهاتف (اختياري)"
              v-model="value.phNumber">
            <textarea 
              name="user-comment" 
              id="userCommentInput" 
              cols="30" rows="5" 
              placeholder="تعليقك" 
              required 
              resize="flase"
              v-model="value.comment"></textarea>
            <button class="btn my-btn" @click="sendReview">
              ارسال
            </button>
          </form>
        </div>
      </transition>
    <app-footer></app-footer>

  </div>
</template>

<script>
import footer from '../footerFolder/footer'
import logo from '../logoContainerFolder/logoContainer'

export default {
  name: 'feedBack',
  data(){
    return{
      value: {
        name: '',
        phNumber: '',
        ratings: {
          food: 5,
          service: 5,
          clean: 5,
        },
        comment: '',
      },
      reviewed: false,
      delayedACtion: '',
    }
  },
  components: {
    'app-footer' : footer,
    'app-logo' : logo
  },
  methods: {
    sendReview() {
      event.preventDefault();
      this.reviewed = true;
      this.delayedACtion = setTimeout(() => this.$router.push({name: 'الرئيسية'}) , 3500)
    },
    reReview() {
      this.reviewed = false;
      clearTimeout(this.delayedACtion);
    }
  }
}
</script>

<style scoped>
@import url('./feedBack.css');
</style>
