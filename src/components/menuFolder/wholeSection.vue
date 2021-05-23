<template>
  <div class="row padding-15">
    <div class="col-12">
      <p class="section-name">
        {{ loadedSection.arabicName }}
      </p>
    </div>
    <app-menu-item-details
      v-for="(sectionItem, i) in filteredItems"
      :key="i + 'item'"
      :singleItem="sectionItem"
    ></app-menu-item-details>
  </div>
</template>

<script>
import MenuItemDeatils from "./menuItemDeatils.vue";

export default {
  name: "wholeSection",
  data() {
    return {
      loaded: false,
    };
  },
  props: ["loadedSection", "itemsFilter"],
  components: {
    "app-menu-item-details": MenuItemDeatils,
  },
  computed: {
    filteredItems() {
      return this.loadedSection.meals.filter((el) =>
        el.name.match(this.itemsFilter)
      );
    },
  },
  created() {
    this.loaded = true;
  },
};
</script>
<style scoped>
@import url("~@/assets/componentsCss/menuCss/wholeSectionStyles.css");
</style>