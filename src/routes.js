// import App from "./App.vue";
import appLayout from "./components/appLayout";
import register from "./components/register.vue";
import home from "./components/home.vue";
import menuLayout from "./components/menuFolder/menuLayout.vue";
import menuSections from "./components/menuFolder/menuSections.vue";
import menuDetails from "./components/menuFolder/menuDetails.vue";
import specials from "./components/menuFolder/specialOffers.vue";
import feedback from "./components/feedback";

export const routes = [
  {
    path: "/table/:id",
    component: appLayout,
    name: "الابلكيشن",
    children: [
      {
        path: "register",
        component: register,
        name: "سجل لدينا"
      },
      {
        path: "home",
        component: home,
        name: "الرئيسية"
      },
      {
        path: "menu",
        component: menuLayout,
        children: [
          {
            path: "",
            component: menuSections,
            name: "اقسام القائمة"
          },
          {
            path: "meals/:sectionId",
            component: menuDetails
          }
        ]
      },
      {
        path: "specials",
        component: specials,
        name: "العروض الخاصه"
      },
      {
        path: "feedback",
        component: feedback,
        name: "التقييم"
      }
    ]
  }
];
