<template>
  <transition name="fade" mode="out-in">  
    <div class="row" :key="loadedSection[0].id">
      <div class="col-12">
        <p class="section-name">
          {{loadedSection[0].name}}
          <span>"اضغط على الوجبة لاظهار الوصف"</span>
        </p>
      </div>
      <app-menu-item-details 
        v-for="(sectionItem , i) in filteredItems" 
        :key="i + 'item'" 
        :singleItem="sectionItem"></app-menu-item-details>
    </div>
  </transition>
</template>

<script>
// import {centralData} from '../../../../main.js';

import MenuItemDeatils from './menuItemDetailsFolder/menuItemDeatils.vue';

export default {
  name: 'wholeSection',
  data(){
    return{
    }
  },
  props: ['loadedSection', 'itemsFilter'],
  components:{
    'app-menu-item-details' : MenuItemDeatils
  },
  computed: {
    filteredItems(){
      return this.loadedSection[0].items.filter(el => el.name.match(this.itemsFilter))
    }
  }
}
</script>
<style scoped>
.section-name{
  position: relative;
  text-align: right;
  font-weight: bold;
  color: var(--my-dark);
  border-bottom: 1px solid #fff;
  padding: 10px 0;
  font-size: 2.5rem;
}
.section-name span{
  font-size: 15px;
  top: 50%;
  margin-right: 5px;
  display: block;
}
.search-input{
  margin: 25px auto -5px;
}
@media (max-width: 350px) {
  .section-name span{
    transform: translate( 0 , -30% );
  }
}
</style>