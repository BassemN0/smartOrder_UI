<template>
  <header>
    <router-link :to="{name: 'الرئيسية'}" tag="div" class="logo">
      <img src="./media/logo.png" alt="logo" class="logo-img">
    </router-link>
    <!-- <div class="place-container">
      <transition name="fade" mode="out-in"> 
        <p>
          {{ place }}
        </p>
      </transition>
    </div> -->
  </header>
</template>

<script>
// import {centralData} from '../../main.js';


export default {
  name: 'appHeader',
  data() {
    return {
      place: this.$route.name,
    }
  },
  // watch:{
  //   $route(to) {
  //     this.place = to.name;
  //   }
  // },
  // created() {
  //   centralData.$on('changeMenu', (menuName) => {
  //     this.place = menuName
  //   })
  // }
}
</script>

<style>
header{
  padding: 10px 20px;
  margin-bottom: 20px;
  display: flex;
}
.logo{
  margin: 0 auto;
}
.logo-img{
  /* width: 80; */
  height: 70px;
  border-radius: 50%;
  filter: drop-shadow(0px 0px 10px var(--my-dark));
}

.place-container p{
  font-size: 30px;
  padding: 0 20px;
  margin: 0;
}
</style>
