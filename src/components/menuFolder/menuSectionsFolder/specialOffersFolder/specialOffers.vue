<template>

  <router-link :to="{name: 'العروض الخاصه'}" append class="menu-section-link" tag="div">
    <img :src="specialSection.img" :alt="specialSection.name">
    <p style="margin: auto 0; font-size: 1.15rem">
      {{specialSection.name}}
    </p>
  </router-link>

</template>
<script>
// import VueSlickCarousel from 'vue-slick-carousel'
// import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// // optional style for arrows & dots
// import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'


export default {
  data() {
    return{
      loaded: false,
      specialSection: {
        id: 'specials',
        img: 'https://www.flaticon.com/svg/static/icons/svg/2534/2534924.svg',
        name: 'العروض الخاصة'
      }
      // specialSection: [
      //   {
      //     img: 'https://storage.eu.content-cdn.io/am-resources/b43a9bb3-260a-4e1f-9be6-65a809fab6e1/Images/ProductImages/Source/KFC_OLO%20Offers_7for99_EGP_480x400.jpg',
      //     name: 'تجربة مش اكتر',
      //     des: 'استمتع بالتخفيض الجامد تنين ده يزميلي',
      //     oldPrice: [500],
      //     newPrice: [200]
      //   },
      //   {
      //     img: 'https://storage.eu.content-cdn.io/am-resources/b43a9bb3-260a-4e1f-9be6-65a809fab6e1/Images/ProductImages/Source/KFC_OLO%20Offers_7for99_EGP_480x400.jpg',
      //     name: 'تجربة مش اكتر',
      //     des: 'استمتع بالتخفيض الجامد تنين ده يزميلي',
      //     oldPrice: [500],
      //     newPrice: [200]
      //   },
      //   {
      //     img: 'https://storage.eu.content-cdn.io/am-resources/b43a9bb3-260a-4e1f-9be6-65a809fab6e1/Images/ProductImages/Source/KFC_OLO%20Offers_7for99_EGP_480x400.jpg',
      //     name: 'تجربة مش اكتر',
      //     des: 'استمتع بالتخفيض الجامد تنين ده يزميلي',
      //     oldPrice: [500],
      //     newPrice: [200]
      //   },
      //   {
      //     img: 'https://storage.eu.content-cdn.io/am-resources/b43a9bb3-260a-4e1f-9be6-65a809fab6e1/Images/ProductImages/Source/KFC_OLO%20Offers_7for99_EGP_480x400.jpg',
      //     name: 'تجربة مش اكتر',
      //     des: 'استمتع بالتخفيض الجامد تنين ده يزميلي',
      //     oldPrice: [500],
      //     newPrice: [200]
      //   },
      // ],
      // specailOffersCarouselSettings: {
      //   autoplaySpeed: 5000,
      //   slidesToShow: 1,
      //   autoplay: true,
      //   rtl: true,
      //   arrows: false,
      //   loop: true,
      //   responsive: [
      //     {
      //       "breakpoint": 900,
      //       "settings": {
      //         "slidesToShow": 2,
      //       }
      //     },
      //     {
      //       "breakpoint": 800,
      //       "settings": {
      //         "slidesToShow": 1,
      //       }
      //     },
      //     {
      //       "breakpoint": 700,
      //       "settings": {
      //         "slidesToShow": 1,
      //       }
      //     },
      //   ]
      // }
    }
  },
  // components:{
  //   VueSlickCarousel
  // },
  // methods:{
  //   showNextSlide() {
  //     this.$refs.specialCarousel.prev()
  //   },
  //   showPrevSlide() {
  //     this.$refs.specialCarousel.next()
  //   }
  // },
  mounted(){
    this.$nextTick(()=> {
      this.loaded = true
    })
  },
}
</script>
<style scoped>
.menu-section-link{
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.menu-section-link img{
  margin: 0 0 0 10px;
}
</style>