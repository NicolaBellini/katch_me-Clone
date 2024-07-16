<script>
import { flickity } from "flickity";
import ScrollReveal from "scrollreveal";

export default {
  mounted() {
    ScrollReveal().reveal(".zoom", {
      duration: 1000,
      easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
      interval: 200,
      scale: 0.65,
      mobile: false,
    });
  },
};
</script>

<template>
  <div
    class="main-carousel"
    data-flickity='{ "cellAlign": "left", "contain": false, "wrapAround": true  }'
  >
    <div class="carousel-cell">
      <div class="carusel-cell-content zoom">text</div>
    </div>
    <div class="carousel-cell">
      <div class="carusel-cell-content zoom">text</div>
    </div>
    <div class="carousel-cell">
      <div class="carusel-cell-content zoom">text</div>
    </div>
    <div class="carousel-cell">
      <div class="carusel-cell-content zoom">text</div>
    </div>
    <div class="carousel-cell">
      <div class="carusel-cell-content zoom">text</div>
    </div>
    <div class="carousel-cell">
      <div class="carusel-cell-content zoom">text</div>
    </div>
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

    width: 300px;
    height: 300px;
    .carusel-cell-content {
      line-height: 300px;
      text-align: center;
      background: $color-accent;
      border-radius: 50%;
    }
  }
}
</style>
