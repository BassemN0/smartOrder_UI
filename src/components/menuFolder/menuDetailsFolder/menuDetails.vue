<template>
  <div class="container">
    <app-sections-carousel :sections="myData"></app-sections-carousel>

    <div class="col-12" style="margin-top: 1rem;">
      <input 
        style="margin: 0;"
        class="search-input" 
        type="text" 
        v-model="OuterItemsFilter" 
        placeholder="اكتب كلمة للبحث..">
    </div>
    
    <app-whole-section 
      :itemsFilter="OuterItemsFilter" 
      :loadedSection="chosenSection" 
      :key="chosenSection.id"></app-whole-section>
  </div>
</template>

<script>
import {centralData} from '../../../main.js';
import sectionsCarousel from './sectionsCarouselFolder/sectionsCarousel'
import wholeSection from './wholeSectionFolder/wholeSection'


export default {

  name: 'menuDetails',
  data(){
    return {
      myData: centralData.menu,
      chosenSectionFilter: this.$route.params.sectionId,
      OuterItemsFilter:''
    }
  },
  watch: {
    $route(to) {
      this.chosenSectionFilter = to.params.sectionId;
      centralData.$emit('changeMenu', this.chosenSection[0].name);
    }
  },
  computed: {
    chosenSection(){
      return this.myData.filter(el => el.id == this.chosenSectionFilter)
    }
  },
  components: {
    'app-sections-carousel':sectionsCarousel,
    'app-whole-section': wholeSection
  },
  created() {
    centralData.$emit('changeMenu', this.chosenSection[0].name);
  }
}
</script>

<style scoped>

</style>
