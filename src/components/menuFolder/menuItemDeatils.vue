<template>
  <div
    :style="{ order: singleItem.order }"
    class="col-md-6 col-lg-4 col-6 item-outer-container"
    v-if="loaded"
  >
    <div class="item-container">
      <div class="item-img">
        <img
          v-if="singleItem.image"
          :v-lazy="singleItem.image"
          :alt="singleItem.name"
        />
        <img src="@/assets/media/logo.png" :alt="singleItem.name" v-else />
      </div>
      <div class="item-data">
        <p class="item-name">
          <span>{{ singleItem.name }}</span>
        </p>
        <p class="item-des">
          {{ singleItem.description }}
        </p>
        <div :class="{ 'v-hidden': singleItem.description == '' }">
          <p class="toggle-des" @click="showDes">عرض الوصف</p>
          <p class="toggle-des dis-none" @click="hideDes">اخفاء الوصف</p>
        </div>
        <div>
          <div style="display: flex" v-if="singleItem.price.length > 1">
            <div
              class="item-price-table"
              v-for="(price, i) in singleItem.price"
              :key="i * 10000"
            >
              <div class="item-price-col">
                <span>{{ sizes[i] }}</span> <br />
                {{ price }} <span class="le">ج</span>
              </div>
            </div>
          </div>
          <p class="item-price" v-else>{{ singleItem.price[0] }} جنية</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "menuItem",
  data() {
    return {
      sizes: ["ص", "و", "ك", "ع"],
      loaded: false,
    };
  },
  methods: {
    showDes() {
      event.target.parentElement.previousSibling.classList.add("showed-des");
      event.target.style.display = "none";
      event.target.nextSibling.style.display = "block";
    },
    hideDes() {
      event.target.parentElement.previousSibling.classList.remove("showed-des");
      event.target.style.display = "none";
      event.target.previousSibling.style.display = "block";
    },
  },
  props: ["singleItem"],
  created() {
    this.loaded = true;
  },
};
</script>
<style scoped>
@import url("~@/assets/componentsCss/menuCss/menuOneItemStyles.css");
@media (min-width: 768px) {
  .item-img img {
    height: 235px !important;
  }
}
</style>