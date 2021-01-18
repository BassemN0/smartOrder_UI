<template>
  <div>
      <app-header></app-header>
      <keep-alive>
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </keep-alive>
      <app-footer></app-footer>
  </div>
</template>

<script>
import header from '../headerFolder/header.vue';
import footer from '../footerFolder/footer';

export default {
  name: 'menuLayout',
  data(){
    return {
    }
  },
  components: {
      'app-header': header,
      'app-footer': footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
