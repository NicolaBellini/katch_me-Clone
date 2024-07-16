<template>
  <div class="error">
    <img src="../../public/img/404.png" alt="" />
    <h3 class="big-text">page non found</h3>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@use "../assets/scss/main.scss";
@use "../assets/scss/partials/variables" as *;
.error {
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: $color-primary-light;
  img {
    height: 50%;
  }
}
</style>
