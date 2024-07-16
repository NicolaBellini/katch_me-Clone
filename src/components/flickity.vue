<script>
import { flickity } from "flickity";
export default {};
</script>

<template>
  <div
    class="main-carousel"
    data-flickity='{ "cellAlign": "left", "contain": false, "wrapAround": true  }'
  >
    <div class="carousel-cell">Cell 1</div>
    <div class="carousel-cell">Cell 2</div>
    <div class="carousel-cell">Cell 3</div>
    <div class="carousel-cell">Cell 4</div>
    <div class="carousel-cell">Cell 5</div>
    <div class="carousel-cell">Cell 6</div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/main.scss";
@use "../assets/scss/partials/variables" as *;
.main-carousel {
  height: 400px;

  padding: 40px 0;
  margin: 0 auto;
  .carousel-cell {
    margin-right: 40px;
    line-height: 300px;
    text-align: center;
    width: 300px;
    height: 300px;
    background: $color-accent;
    border-radius: 50%;
  }
}
</style>
