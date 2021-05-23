<template>
  <div>
    <app-header></app-header>
    <transition name="fade" mode="out-in">
      <div class="container" :key="!sLoaded" v-if="!sLoaded && !errLoading">
        <app-loading></app-loading>
      </div>
      <div style="position: relative" :key="sLoaded" v-if="sLoaded">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <p class="section-name">العروض الخاصة</p>
            </div>
          </div>
          <div class="row" v-if="specialSection != ''">
            <div
              class="outer-item-container col-12"
              v-for="(specialSectionItem, i) in specialSection"
              :key="i + 'special'"
              :style="{ order: specialSectionItem.order }"
            >
              <div class="special-i item-container item-container-i">
                <div class="special-img">
                  <img
                    v-if="specialSectionItem.image"
                    :v-lazy="specialSectionItem.image"
                    :alt="specialSectionItem.name"
                  />
                  <img
                    v-else
                    src="@/assets/media/logo.png"
                    :alt="specialSectionItem.name"
                    style="background-color: #fff"
                  />
                </div>
                <div class="special-i-d">
                  <p class="special-i-n">
                    {{ specialSectionItem.name }}
                  </p>
                  <p class="special-i-des">
                    {{ specialSectionItem.description }}
                  </p>
                  <p
                    class="special-i-p item-price"
                    v-if="specialSectionItem.oldPrice.length == 1"
                  >
                    الآن فقط بـ
                    <span class="now-price">
                      {{ specialSectionItem.newPrice[0] }}
                    </span>
                    جنية بدلا من
                    <span class="old-pice" style="margin: 0 5px">
                      {{ specialSectionItem.oldPrice[0] }}
                    </span>
                  </p>
                  <div v-else>
                    الآن فقط بـ
                    <div class="item-price bg-none">
                      <div
                        class="item-price-table"
                        v-for="(price, i) in specialSectionItem.newPrice"
                        :key="i * 10000"
                      >
                        <div class="item-price-col">
                          <span>{{ sizes[i] }}</span
                          ><br />
                          <span class="now-price">{{ price }}</span>
                          <span class="le">ج</span>
                        </div>
                      </div>
                    </div>
                    <div v-if="specialSectionItem.oldPrice.length != 0">
                      بدلا من
                      <div class="item-price bg-none">
                        <div
                          class="item-price-table"
                          v-for="(price, i) in specialSectionItem.oldPrice"
                          :key="i * 10000"
                        >
                          <div class="item-price-col">
                            <span>{{ sizes[i] }}</span
                            ><br />
                            <span class="old-price">{{ price }}</span>
                            <span class="le">ج</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row" v-else>
            <div class="col-12">
              <p class="error-p">عفوا لا يوجد عروض خاصة اليوم.</p>
            </div>
          </div>
          <app-error v-if="errLoading"></app-error>
        </div>
      </div>
    </transition>

    <app-footer></app-footer>
  </div>
</template>
<script>
import axios from "@/axios-global";

export default {
  data() {
    return {
      sizes: ["ص", "و", "ك", "ع"],
      sLoaded: false,
      errLoading: false,
      specialSection: Array,
    };
  },
  created() {
    axios
      .get("api/offer/showOffer")
      .then((res) => {
        if (res.data.statusCode == 200) {
          this.specialSection = res.data.result;
          this.sLoaded = true;
        } else {
          this.sLoaded = true;
          this.errLoading = true;
        }
      })
      .catch(() => {
        this.sLoaded = true;
        this.errLoading = true;
      });
  },
};
</script>
<style scoped>
@import url("~@/assets/componentsCss/menuCss/specialOffersStyles.css");
</style>