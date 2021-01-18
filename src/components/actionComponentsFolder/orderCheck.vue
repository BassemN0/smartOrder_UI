<template>
  <div @click="orderCheck">
    <slot></slot>
    <div class="confirm-outer order-check-box" style="display: none;">
			<div class="confirm-box">
        <transition name="fade" mode="out-in">
          <div v-if="!ordered" key="orderBox">
            <p>
              هل انت متاكد انك تريد طلب شيك؟
            </p>
            <div class="d-flex btns-container w-100">
              <button class="btn confirm-btns yes-btn" @click="yesOederCheck">
                نعم
              </button>
              <button class="btn confirm-btns no-btn" @click="dontOrderCheck">
                لا
              </button>
            </div>
          </div>
          <div v-else key="redirectMessage">
            <p>
              الفاتورة في طريقها اليك
              <span v-if="!isFeed">
               سيتم تحويلك لصفحة يمكنك من خلالها التعبير عن مدى رضاك عن خدمتنا لك
              </span>
              <span v-else>
                انت الان في صفحة تمكنك من تقييم خدمتنا المقدمه اليك، نرجو ان نكون عند حسن ظنك.
              </span>
            </p>
          </div>
        </transition>
			</div>
		</div>
  </div>
</template>
<script>
export default {
  name: 'orderCheck',
  data() {
    return {
      ordered: false,
      isFeed: false
    }
  },
  methods:{
		orderCheck() {
			let cContainer = document.querySelector('.order-check-box');
			if (cContainer.style.display == 'none') {
				cContainer.style.display = 'block'; 
				setTimeout(() => cContainer.style.top = 0 , 50)  
			}
		},
		yesOederCheck() {
      this.ordered = true;
      if(this.$route.name != 'التقييم'){
        setTimeout(()=> {
          this.$router.push({name: 'التقييم'})
          this.removeSection()
        }, 4000);
      } else {
        this.isFeed = true;
        setTimeout(() => {
          this.ordered = false
          this.removeSection()
        }, 4500)
      }
    },
    dontOrderCheck(){
      this.removeSection()
    },
    removeSection() {
      let cContainer = document.querySelector('.order-check-box');
      cContainer.style.top = -100 + '%' ;
      setTimeout(() => cContainer.style.display = 'none' , 500)  
    }
	}

}
</script>
<style scoped>
@import url('./callWaiterOrderCheck.css');
</style>