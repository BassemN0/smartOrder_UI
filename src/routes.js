import App from './App.vue';
import register from './components/registerationFolder/register.vue';
import home from './components/homeFolder/home.vue';
import menuLayout from './components/menuFolder/menuLayout.vue'
import menuSections from './components/menuFolder/menuSectionsFolder/menuSections.vue'
import menuDetails from './components/menuFolder/menuDetailsFolder/menuDetails.vue'
import feedback from './components/feedbackFolder/feedback'
import specials from './components/specialOffers/specialOffers.vue'
// import test from './components/test.vue';
// import item from './components/item.vue';

export const routes = [
  {
    path: '/:id',
    component: App,
    name: 'الابلكيشن',
    children: [
      {
        path: 'register',
        component : register,
        name : 'سجل لدينا',
      },
      {
        path: 'home',
        component: home,
        name: 'الرئيسية'
      },
      {
        path: 'menu',
        component: menuLayout,
        children : [
          {
            path: '',
            component: menuSections,
            name: 'اقسام القائمة'
          },
          {
            path: ':sectionId',
            component: menuDetails,
          },
        ]
      },
      {
        path: 'feedback',
        component: feedback,
        name: 'التقييم'
      },
      {
        path: 'specials',
        component: specials,
        name: 'العروض الخاصه'
      }
    ]
  },
] 