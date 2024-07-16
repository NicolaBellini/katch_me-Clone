<script>
import ScrollReveal from "scrollreveal";
export default {
  mounted() {
    ScrollReveal().reveal(".reveal", {
      origin: "bottom",
      distance: "50px",
      duration: 1000,
      delay: 500,
      easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
      interval: 600,
    });
  },
};
</script>

<template>
  <div class="poster my_mt2">
    <div class="poster-content me-3 reveal">
      <h3 class="big-text">titolo Poster</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
        accusantium doloremque facere illo est unde blanditiis asperiores vel,
        quo deleniti.
      </p>
      <a href="#" class="button">CTA</a>
    </div>
    <div class="poster-img reveal">
      <img src="../../public/img/jumbo.png" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.poster {
  display: flex;
  height: 100vh;

  align-items: center;
  .poster-img {
    width: 65%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .poster-content {
    width: 35%;
    padding: 50px;
  }
}
@media (max-width: 768px) {
  .poster {
    flex-wrap: wrap;
    height: auto;
    .poster-img,
    .poster-content {
      width: 100%;
    }
  }
}
</style>
