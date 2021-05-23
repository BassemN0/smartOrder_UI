<template>
  <div class="container">
    <transition name="fade" mode="out-in">
      <app-sections-carousel
        v-if="menuSections"
        :sections="menuSections"
      ></app-sections-carousel>
    </transition>
    <div class="row">
      <div class="col-12" style="margin-top: 1rem">
        <input
          style="margin: 0"
          class="search-input"
          type="text"
          v-model="outerItemsFilter"
          placeholder="اكتب كلمة للبحث.."
        />
      </div>
    </div>
    <app-error v-if="errLoading"></app-error>
    <transition name="fade" mode="out-in">
      <app-whole-section
        :itemsFilter="outerItemsFilter"
        :loadedSection="myData"
        v-if="loadedMenu"
        :key="myData.englishName"
      ></app-whole-section>
      <app-loading
        v-if="!loadedMenu && !errLoading"
        :key="loadedMenu"
      ></app-loading>
    </transition>
  </div>
</template>

<script>
import axios from "@/axios-global";
import { centralData } from "@/main.js";
import sectionsCarousel from "./sectionsCarousel";
import wholeSection from "./wholeSection";

export default {
  name: "menuDetails",
  data() {
    return {
      myData: Object,
      chosenSectionFilter: this.$route.params.sectionId,
      outerItemsFilter: "",
      loadedMenu: false,
      menuSections: centralData.allSections,
      loadedSections: false,
      errLoading: false,
    };
  },
  watch: {
    $route(to) {
      this.chosenSectionFilter = to.params.sectionId;
    },
    chosenSectionFilter() {
      this.axiosCall();
    },
  },
  components: {
    "app-sections-carousel": sectionsCarousel,
    "app-whole-section": wholeSection,
  },
  created() {
    this.axiosCall();
  },
  methods: {
    axiosCall() {
      this.loadedMenu = false;
      axios
        .get(`api/class/showClass/${this.chosenSectionFilter}`)
        .then((res) => {
          if (res.data.statusCode == 200) {
            this.myData = res.data.result;
            this.loadedMenu = true;
          } else {
            this.loadedMenu = false;
            this.errLoading = true;
          }
        })
        .catch(() => (this.errLoading = true));
    },
  },
};
</script>

