<template>
  <footer>
    <router-link
      active-class="the-active-route"
      :to="{ name: 'اقسام القائمة' }"
      tag="div"
    >
      <img src="@/assets/media/footerMedia/1046849.svg" alt="menu" />
      <p>المنيو</p>
    </router-link>
    <router-link
      active-class="the-active-route"
      :to="{ name: 'التقييم' }"
      tag="div"
    >
      <img src="@/assets/media/footerMedia/1087916.svg" alt="comment" />
      <p>التقييم</p>
    </router-link>
    <callWaiter>
      <img src="@/assets/media/footerMedia/3462052.svg" alt="call waiter" />
      <p>ويتر</p>
    </callWaiter>
    <orderCheck>
      <img src="@/assets/media/footerMedia/2922982.svg" alt="order check" />
      <p>شيك</p>
    </orderCheck>
  </footer>
</template>

<script>
export default {
  name: "appFooter",
  mounted() {
    let myFooter = document.getElementsByTagName("footer")[0];
    myFooter.parentElement.style.paddingBottom =
      myFooter.offsetHeight + 20 + "px";
  },
  component: {},
};
</script>

<style scoped>
@import url("~@/assets/componentsCss/footerStyles.css");
</style>

