<template>
  <div class="row">
    <div class="col-12" style="position: relative; display: block">
      <my-carousel
        :slidesToShow="6"
        :slidesToScroll="1"
        :rtl="true"
        :arrows="false"
        ref="sectionsCarousel"
        :autoplay="true"
        :autoplaySpeed="5000"
        :responsive="[
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 3,
            },
          },
        ]"
      >
        <div v-for="(section, i) in sections" :key="i">
          <router-link
            :to="section.englishName"
            tag="div"
            class="carousel-link"
          >
            <img
              :v-lazy="section.image"
              v-if="section.image"
              :alt="section.englishName"
            />
            <p>
              <span>
                {{ section.arabicName }}
              </span>
            </p>
          </router-link>
        </div>
      </my-carousel>
      <div class="prev-btn" @click="showPrevSlide"></div>
      <div class="next-btn" @click="showNextSlide"></div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "sectionsCarousel",
  data() {
    return {
      loadedSectionFilter: "",
    };
  },
  methods: {
    showNextSlide() {
      this.$refs.sectionsCarousel.prev();
    },
    showPrevSlide() {
      this.$refs.sectionsCarousel.next();
    },
  },
  computed: {
    loadedSection() {
      return this.myData.filter((el) => el.id.match(this.loadedSectionFilter));
    },
  },
  components: {
    "my-carousel": VueSlickCarousel,
  },
  props: ["sections"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("~@/assets/componentsCss/menuCss/menuSectionCarouselStyles.css");
</style>
