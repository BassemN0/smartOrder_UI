<template>
  <div class="logo-container" id="logo-con">
    <router-link to="/test/home" tag="a">
      <img src="./media/logo.png" alt="مطعنا"> 
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'logoContainer'
}
</script>
<style scoped>
.logo-container{
  position: relative;
  margin: 60px auto 20px; 
}

.logo-container img{
  max-width: 200px;
  filter: drop-shadow(0px 0px 30px var(--my-lightest));
}
</style>