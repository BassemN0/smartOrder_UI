<template>
  <header>
    <div class="container">
      <div class="row">
        <router-link :to="{ name: 'الرئيسية' }" tag="div" class="logo col-6">
          <div class="header-div">
            <img src="@/assets/media/logo.png" alt="logo" class="logo-img" />
            <p>الصفحة الرئيسية</p>
          </div>
        </router-link>
        <router-link
          :to="{ name: 'العروض الخاصه' }"
          tag="div"
          class="logo col-6"
          v-if="this.$route.name != 'الرئيسية'"
        >
          <div class="header-div">
            <img
              src="@/assets/media/offer.svg"
              alt="specials"
              class="logo-img"
            />
            <p>العروض الخاصة</p>
          </div>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "appHeader",
  data() {
    return {
      place: this.$route.name,
    };
  },
};
</script>

<style scoped>
.header-div {
  color: var(--my-white);
  border: 1px solid var(--my-white);
  border-radius: var(--b-raduis);
  text-align: center;
  padding: 5px 0;
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.header-div p {
  margin: 0 5px;
}
.logo-img {
  height: 70px;
  border-radius: 50%;
  filter: drop-shadow(0px 0px 10px var(--my-dark));
}
.router-link-active .header-div {
  border-color: var(--my-light);
}
</style>
