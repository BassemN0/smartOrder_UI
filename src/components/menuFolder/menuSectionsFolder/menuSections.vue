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
            class="search-input">
        </div>
      </div>
      <div class="row">
        <div class="col-12 padding-0">
          <app-specail-offers></app-specail-offers>
        </div>
      </div>
      <div class="row">
        <div class="col-12" @click="changeShow">
          <!-- <b-form-group label="من فضلك اختر طريقة العرض" @click="changeShow">
            <b-form-radio v-model="selected" name="some-radios" value="col-lg-3 col-md-4 col-4" >شبكة</b-form-radio>
            <b-form-radio v-model="selected" name="some-radios" value="col-lg-3 col-md-4 col-12" @click="changeShow">صفوف</b-form-radio>
          </b-form-group> -->
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-4 col-4 padding-0 menu-sections-container" v-for="(menuSection , i) in filteredSections" :key="i">
          <router-link :to="menuSection.id" append class="menu-section-link" tag="div">
            <img :src="menuSection.img" :alt="menuSection.name">
            <p style="margin: auto 0; font-size: 1.15rem">
              {{menuSection.name}}
            </p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {centralData} from '../../../main.js';
import specailOffers from './specialOffersFolder/specialOffers'


export default {
  name: 'menuSections',
  data(){
    return {
      loaded: false,
      sectionFilterWord: '',
      menuSections: centralData.menu,
      selected: '',
    }
  },
  computed:{
    filteredSections() {
      return this.menuSections.filter(el => el.name.match(this.sectionFilterWord)) 
    }
  },
  components: {
    'app-specail-offers': specailOffers
  },
  methods: {
    changeShow() {
      document.getElementsByClassName('menu-sections-container').forEach(el => {
        console.log(el.classList+ 'test')
      });
    }
  }
}
</script>

<style scoped>
@import url('./menuSections.css');
</style>
