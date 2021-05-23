<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <input
            type="text"
            name="sectionSearch"
            id="sectionSearchInput"
            v-model="sectionFilterWord"
            placeholder="ما القسم الذي تبحث عنه؟"
            class="search-input"
          />
        </div>
      </div>
    </div>
    <div v-if="loaded" class="container">
      <transition name="fade" mode="out-in">
        <div class="row my-row" :key="loadedSections" v-if="true">
          <div class="col-12 menu-sections-container" style="order: 1">
            <router-link
              :to="{ name: 'العروض الخاصه' }"
              append
              class="menu-section-link s"
              tag="div"
            >
              <img src="@/assets/media/offer.svg" alt="العروض الخاصة" />
              <p style="margin: auto 0; font-size: 1.15rem">العروض الخاصة</p>
            </router-link>
          </div>
          <div
            class="col-lg-3 col-md-4 col-4 menu-sections-container"
            v-for="(menuSection, i) in filteredSections"
            :key="i"
            :style="{ order: menuSection.order }"
          >
            <router-link
              :to="`meals/${menuSection.englishName}`"
              append
              class="menu-section-link"
              tag="div"
            >
              <img
                v-if="menuSection.image"
                :src="menuSection.image"
                :alt="menuSection.arabicName"
              />
              <p style="margin: auto 0; font-size: 1.15rem">
                {{ menuSection.arabicName }}
              </p>
            </router-link>
          </div>
        </div>
        <app-loading :key="loadedSections" v-if="!loadedSections"></app-loading>
      </transition>
    </div>
  </div>
</template>

<script>
import { centralData } from "@/main.js";

export default {
  name: "menuSections",
  data() {
    return {
      loadedSections: centralData.loadedMenu,
      loaded: !centralData.error,
      sectionFilterWord: "",
      menuSections: centralData.allSections,
      selected: "",
    };
  },
  computed: {
    filteredSections() {
      return this.menuSections.filter((el) =>
        el.arabicName.match(this.sectionFilterWord)
      );
    },
  },
};
</script>

<style scoped>
@import url("~@/assets/componentsCss/menuCss/menuSectionsStyles.css");
</style>
