<template>
  <div @click="callWaiter">
    <slot></slot>
    <div class="confirm-outer call-waiter-box" style="display: none;">
      <div class="confirm-box">
        <transition name="fade" mode="out-in">
          <div v-if="!ordered" key="callWaiter">
            <p>
              هل انت متاكد انك تريد مناداة ويتر؟
            </p>
            <div class="d-flex btns-container w-100">
              <button class="btn confirm-btns yes-btn" @click="yesCallWaiter">
                نعم
              </button>
              <button class="btn confirm-btns no-btn" @click="dontCallWaiter">
                لا
              </button>
            </div>
          </div>
          <div v-else key="theMessage">
            <p>
              المساعدة في طريقها اليك الآن.
            </p>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'callWaiter',
  data() {
    return {
      ordered: false,
    }
  },
  methods:{
    callWaiter() {
      let container = document.querySelector('.call-waiter-box');
      if (container.style.display == 'none') {
        container.style.display = 'block'; 
        setTimeout(() => container.style.top = 0 , 50);
      } 
    },
    yesCallWaiter() {
      this.ordered = true;
      console.log('برا')
      setTimeout(() => {
        this.ordered = false
        this.removeSection()  
        }, 3500);
    },
    dontCallWaiter(){
      this.removeSection()
    },
    removeSection(){
      let container = document.querySelector('.call-waiter-box');
      console.log('من جوا')
      container.style.top = -100 + '%';
      setTimeout(() => container.style.display = 'none' , 500)  
    }
  }
}
</script>
<style scoped>
@import url('./callWaiterOrderCheck.css');
</style>