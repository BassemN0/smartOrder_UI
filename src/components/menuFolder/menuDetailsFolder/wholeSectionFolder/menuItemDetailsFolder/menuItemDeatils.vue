<template>
  <div class="col-md-6 col-lg-4 col-6 item-outer-container">
    <div class="item-container">
      <div class="item-img">
        <img :src="singleItem.img" :alt="singleItem.name">
      </div>
      <div class="item-data">
        <p class="item-name">
          {{singleItem.name}}
        </p>
        <p class="item-des">
          {{singleItem.des}} 
        </p>
        <p class="toggle-des" @click="showDes">
          عرض الوصف
        </p>
        <p class="toggle-des dis-none" @click="hideDes">
          اخفاء الوصف
        </p>
        <div>
          <div style="display: flex;" v-if="singleItem.price.length > 1">
            <div class="item-price-table" v-for="(price, i) in singleItem.price" :key="i * 10000">
              <div class="item-price-col">
                <span>{{sizes[i]}}</span><br>
                {{price}} <span class="le">ج</span> 
              </div>
            </div>
          </div>
          <p class="item-price" v-else>
            {{singleItem.price[0]}} جنية
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'menuItem',
  data(){
    return{
      sizes: ['ص', 'و', 'ك', 'ع'],
    }
  },
  methods: {
    showDes(){
      event.target.previousSibling.style.maxHeight = '300px';
      event.target.style.display = 'none';
      event.target.nextSibling.style.display = 'block';
    },
    hideDes(){
      event.target.previousSibling.previousSibling.style.maxHeight = '0px';
      event.target.style.display = 'none';
      event.target.previousSibling.style.display = 'block';
    },
  },
  props: ['singleItem']  
}
</script>
<style scoped>
@import url('./menuOneItem.css');
</style>