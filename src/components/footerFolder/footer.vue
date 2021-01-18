<template>
  <footer>
    <router-link active-class="the-active-route" :to="{name: 'اقسام القائمة'}" tag="div">
      <img src="https://www.flaticon.com/svg/static/icons/svg/1046/1046849.svg" alt="menu">
    </router-link>
    <router-link active-class="the-active-route" :to="{name: 'التقييم'}" tag="div">
      <img src="https://www.flaticon.com/svg/static/icons/svg/3820/3820147.svg" alt="comment">
    </router-link>
    <callWaiter>
      <img src="https://www.flaticon.com/svg/static/icons/svg/3462/3462052.svg" alt="call waiter">
    </callWaiter>
    <orderCheck>
      <img src="https://www.flaticon.com/svg/static/icons/svg/2922/2922982.svg" alt="order check">
    </orderCheck>
  </footer>
</template>

<script>

export default {
  name: 'appFooter',
  mounted() {
    let myFooter = document.getElementsByTagName('footer')[0];
    myFooter.parentElement.style.paddingBottom = myFooter.offsetHeight + 20 + 'px';
  },
  component: {

  }
}
</script>

<style scoped>
@import url('./footerStyles.css');
</style>

