// The main vue configration codes
import Vue from 'vue';
import App from './App.vue';

// using vue-cookies
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
Vue.$cookies.config('30d')


// codes to add bootstrap
import { BootstrapVue } from 'bootstrap-vue'
Vue.use(BootstrapVue)
// importing bootstrap css files
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


// adding and using vue-router
import VueRouter from 'vue-router';
import { routes } from './routes'
Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode : 'history',
  scrollBehavior(to, from, savedPosition){
    if(savedPosition){
      return savedPosition;
    } else {
      return {x: 0, y: 0,}
    }
  }
});



// my event-bus instead of vuex
export const centralData = new Vue({
  data() {
    return{
      menu : [
        {
          name: 'مشويات',
          img: 'https://www.flaticon.com/svg/static/icons/svg/3100/3100609.svg',
          id: 'grilled',
          items: [
            {
              name: 'فراخ تكا',
              img: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tandoorimumbai.jpg',
              des: 'فراخ بالتوابل والبهارات والنكهات علي الفحم + طبق رز بسمتي + خبر ',
              price: [25, 35, 55]
            },
            {
              name: 'شيش طاووق',
              img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Turkish_tavuk_shish.jpg/800px-Turkish_tavuk_shish.jpg',
              des: 'شرائح الدجاج في خليط من اللبن والتوابل والأعشاب وفي الماء المالح  .',
              price: [35, 40, 45, 50]
            },
            {
              name: 'نصف فرخة مشوية',
              img: 'https://www.4nono.com/wp-content/uploads/2015/03/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9-%D8%B9%D9%85%D9%84-%D9%81%D8%B1%D8%A7%D8%AE-%D9%85%D8%B4%D9%88%D9%8A%D8%A9-%D8%A8%D8%A7%D9%84%D9%85%D8%B3%D8%B7%D8%B1%D8%AF%D8%A9-768x597.jpg',
              des: 'نصف فرخة مشوية علي الفحم + شوربة عصفور + أرز بسمتي + خبز ',
              price: [120]
            },
            {
              name: 'بانية',
              img: 'https://7ifz.com/_/201606/10-of-the-oddest-stories-about-pizza-2.jpg',
              des: 'صدور فراخ كوكي منزوعة العضم + التوابل + شوربة عصفور',
              price: [85]
            },
            {
              name: 'كيلو كباب',
              img: 'https://modo3.com/thumbs/fit630x300/203366/1547995072/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9_%D8%B9%D9%85%D9%84_%D9%83%D8%A8%D8%A7%D8%A8_%D8%B3%D9%88%D8%B1%D9%8A.jpg',
              des: 'كيلو كباب سوري علي الفحم + خبز ',
              price: [45]
            },
           
          ]
        },
        {
          name: 'فراخ',
          img: 'https://www.flaticon.com/svg/static/icons/svg/1046/1046751.svg',
          id: 'chicken',
          items: [
            {
              name: 'رز بفراخ مشوية',
              img: 'https://media.holidayme.com/wp-content/uploads-ar/2016/05/turkish-food.jpg',
              des: 'احلى اكلة رز بفراخ مشوية ممكن انك تجربها ف حياتك',
              price: [25]
            },
            {
              name: 'فراخ كرانشي',
              img: 'https://www.almuheet.net/wp-content/uploads/f84c4e1761787fad3963296c684437de27f06717.jpg',
              des: 'استمتع بقطع الفراخ المقرمشه بتتبلية ممتازه تتكون من كل ما هو حلو وجميل',
              price: [30]
            },
            {
              name: 'فاهيتا',
              img: 'https://i2.wp.com/ilhyh.com/wp-content/uploads/2019/01/%D8%B5%D9%88%D8%B1-%D8%B3%D9%81%D8%B1-%D9%88-%D8%B9%D8%B2%D8%A7%D9%8A%D9%85.jpg?fit=834%2C600&ssl=1',
              des: 'فراخ الفاهيتا الميكسيكه كما لم تتذوقها من قبل',
              price: [120]
            },
          ]
        },
        {
          name: 'البان',
          img: 'https://www.flaticon.com/svg/static/icons/svg/751/751682.svg',
          id: 'milk',
          items: [
            {
              name: 'كوب لبن ',
              img: 'https://www.muhtwa.com/wp-content/uploads/%D8%AF%D8%B1%D8%A7%D8%B3%D8%A9-%D8%AC%D8%AF%D9%88%D9%89-%D9%85%D8%B4%D8%B1%D9%88%D8%B9-%D8%A7%D9%84%D8%A8%D8%A7%D9%861-1.jpg.webp',
              des: 'استمتع باجود انواع اللبن المستخلصه خصيصا من ابقار مزاعنا فقط لك',
              price: [25]
            },
            {
              name: 'لبن زبادي',
              img: 'https://modo3.com/thumbs/fit630x300/15448/1439024797/%D9%85%D8%A7_%D9%87%D9%88_%D9%84%D8%A8%D9%86_%D8%A7%D9%84%D8%B2%D8%A8%D8%A7%D8%AF%D9%8A.jpg',
              des: '',
              price: [30]
            },
            
          ]
        },
        {
          name: 'ساندويتشات',
          img: 'https://www.flaticon.com/svg/static/icons/svg/3755/3755406.svg',
          id: 'sandwichs',
          items: [
            {
              name: 'سندوتش سجق',
              img: 'https://www.supermama.me/system/App/Entities/Recipe/images/000/100/771/web-watermarked-large/%D8%B3%D8%A7%D9%86%D8%AF%D9%88%D9%8A%D8%B4%D8%A7%D8%AA-%D8%A7%D9%84%D8%B3%D8%AC%D9%82-%D8%A8%D8%A7%D9%84%D9%85%D8%B4%D8%B1%D9%88%D9%85.jpg',
              des: 'الخبز الفرنسي مع السجق في تبلية ممتازه لن تجدها الا هنا',
              price: [25]
            },
            {
              name: 'حواوشي',
              img: 'https://www.supermama.me/system/App/Entities/Recipe/images/000/099/204/web-watermarked-large/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9-%D8%B9%D9%85%D9%84-%D8%AD%D9%88%D8%A7%D9%88%D8%B4%D9%8A-%D8%A7%D9%84%D8%AD%D8%A7%D8%AA%D9%8A.jpg',
              des: 'اجود انواع اللحوم البلدي المحشوه في الخبز المصري بتتبلية رائعة',
              price: [30]
            },
            {
              name: 'كبدة',
              img: 'https://read.os-cdn.com/wp-content/uploads/2020/03/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9-%D8%B9%D9%85%D9%84-%D9%83%D8%A8%D8%AF%D8%A9-%D8%A5%D8%B3%D9%83%D9%86%D8%AF%D8%B1%D8%A7%D9%86%D9%8A-1.jpeg',
              des: 'تذوق معنا الطعم الحقيقي للكبدة بخلطتنا الخاصه المعده خصيصا لك',
              price: [120]
            },
            
          ]
        },
        {
          name: 'أسماك',
          img: 'https://www.flaticon.com/svg/static/icons/svg/3082/3082055.svg',
          id: 'fishes',
          items: [
            {
              name: 'سمك جمبري',
              img: 'https://media.dotmsr.com/large/201904300145484548.jpg',
              des: 'كيلو سمك جمبري مستورد على ابوه كما يقول صيادوه',
              price: [320]
            },
            {
              name: 'سمك السلمون',
              img: 'https://static.webteb.net/images/content/tbl_articles_article_18677_579ef5a4146-f027-46f6-b07b-a4e5a9fa36e3.jpg',
              des: 'احد افضل واجود انواع اللحوم التي من الممكن ان تاكلها في حياتك جربها معنا بخلطتنا الممتازه المتكونه من رز + شعرية + زيت زيتون. نعدك انك لن تتوقف عن تناولها',
              price: [30]
            },
            {
              name: 'سمك الهامور',
              img: 'https://modo3.com/thumbs/fit630x300/170002/1493631228/%D8%B7%D8%B1%D9%82_%D8%B7%D8%A8%D8%AE_%D8%B3%D9%85%D9%83_%D8%A7%D9%84%D9%87%D8%A7%D9%85%D9%88%D8%B1.jpg',
              des: 'الم تسمع به من قبل؟ حسنا لم لا تجرب كي تعرف مذاق النعيم',
              price: [120]
            },
           
          ]
        }
      ]
    }
  }
});

Vue.config.productionTip = false;


// registering the two button components 
// importing the two components
import callAWaiter from './components/actionComponentsFolder/callWaiter.vue'
import orderACheck from './components/actionComponentsFolder/orderCheck.vue'

// call waiter btn
Vue.component('callWaiter', callAWaiter)
// order check btn 
Vue.component('orderCheck', orderACheck)

// rendring the html el
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
