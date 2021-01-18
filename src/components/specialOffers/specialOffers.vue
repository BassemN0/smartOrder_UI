<template>
  <div>
    <app-header></app-header>
    <div style="position: relative;" v-if="loaded">
        <div class="outer-item-container" v-for="(specialSectionItem, i) in specialSection" :key="i + 'special'">
          <div class="special-i item-container item-container-i">
            <div class="special-img item-img">
              <img :src="specialSectionItem.img" :alt="specialSectionItem.name">
            </div>
            <div class="special-i-d">
              <p class="special-i-n">
                {{specialSectionItem.name}}
              </p>
              <p class="special-i-des">
                {{specialSectionItem.des}} 
              </p>
              <p class="special-i-p item-price">
                الآن فقط بـ <span class="now-price">{{specialSectionItem.newPrice[0]}}</span> جنية <br>
                بدلا من <span class="old-pice">{{specialSectionItem.oldPrice[0]}}</span>
              </p>
            </div>
          </div>
        </div>
    </div>
    <app-footer></app-footer>

  </div>

</template>
<script>
import header from '../headerFolder/header.vue';
import footer from '../footerFolder/footer';

export default {
  data() {
    return{
      loaded: false,
      specialSection: [
        {
          img: 'https://storage.eu.content-cdn.io/am-resources/b43a9bb3-260a-4e1f-9be6-65a809fab6e1/Images/ProductImages/Source/KFC_OLO%20Offers_7for99_EGP_480x400.jpg',
          name: 'تجربة مش اكتر',
          des: 'استمتع بالتخفيض الجامد تنين ده يزميلي',
          oldPrice: [500],
          newPrice: [200]
        },
        {
          img: 'https://storage.eu.content-cdn.io/am-resources/b43a9bb3-260a-4e1f-9be6-65a809fab6e1/Images/ProductImages/Source/KFC_OLO%20Offers_7for99_EGP_480x400.jpg',
          name: 'تجربة مش اكتر',
          des: 'استمتع بالتخفيض الجامد تنين ده يزميلي',
          oldPrice: [500],
          newPrice: [200]
        },
        {
          img: 'https://storage.eu.content-cdn.io/am-resources/b43a9bb3-260a-4e1f-9be6-65a809fab6e1/Images/ProductImages/Source/KFC_OLO%20Offers_7for99_EGP_480x400.jpg',
          name: 'تجربة مش اكتر',
          des: 'استمتع بالتخفيض الجامد تنين ده يزميلي',
          oldPrice: [500],
          newPrice: [200]
        },
        {
          img: 'https://storage.eu.content-cdn.io/am-resources/b43a9bb3-260a-4e1f-9be6-65a809fab6e1/Images/ProductImages/Source/KFC_OLO%20Offers_7for99_EGP_480x400.jpg',
          name: 'تجربة مش اكتر',
          des: 'استمتع بالتخفيض الجامد تنين ده يزميلي',
          oldPrice: [500],
          newPrice: [200]
        },
      ],
    }
  },
  mounted(){
    this.$nextTick(()=> {
      this.loaded = true
    })
  },
  components: {
      'app-header': header,
      'app-footer': footer,
  }
}
</script>
<style>
.item-container-i{
    background-color: var(--my-light);
}
.special-img img{
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}
.special-i-d{
    width: 100%;
    color: var(--my-black);
    padding: 5px;
}
.special-i-n{
    margin-bottom: 0rem!important;
    font-size: 1.35rem!important;
    color: var(--my-black);
    font-weight: bold;
    text-align: right;
    width: 100%;
}

.special-i-des{
    max-height: unset!important;
    margin-bottom: 1rem!important;
    margin: 0 0 11px;
    padding: 0 0 5px;
    background-color: var(--my-light);
}
.special-i-p{
    color: var(--my-white);
    text-align: center;
}
</style>