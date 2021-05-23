<template>
  <div class="row">
    <div class="col-12">
      <p>كل الحقوق محفوظة smartOrder &#169; - {{ new Date().getFullYear() }}</p>
    </div>
    <div class="col-12 links-con">
      <a href="https://wa.me/201553676446" target="_blank"
        ><img src="@/assets/media/whatsapp.svg" alt="واتس أب"
      /></a>
      <a href="tel:+201553676446">
        <img src="@/assets/media/call.svg" alt="موبايل" />
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
p,
a {
  color: #fff;
  font-size: 17px;
  margin: 0;
}
a img {
  max-width: 100%;
  width: 20px;
}
.links-con {
  display: flex;
  justify-content: center;
}
.links-con a {
  margin: 0 10px;
}
</style>
