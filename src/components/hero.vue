<script>
import ScrollReveal from "scrollreveal";
export default {
  mounted() {
    ScrollReveal().reveal(".reveal", {
      origin: "bottom",
      distance: "50px",
      duration: 1500,
      delay: 500,
      easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
      interval: 600,
    });
  },
};
</script>

<template>
  <div class="hero">
    <div class="hero-content reveal">
      <p class="intro-text">into text</p>
      <h1 class="big-text">titolo della pagina</h1>
      <a href="" class="button">discover me</a>
    </div>
    <video autoplay muted loop id="video-hero">
      <source src="../../public/video/hero-video.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  position: relative;
  overflow: hidden;
  padding-top: 100px;
  height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
    url("../../public/img/jumbo.png") no-repeat center center;
  background-size: cover;
  .hero-content {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 1350px;
    margin: 0 auto;
    padding: 30px;
    h1,
    p {
      color: white;
    }
  }
  #video-hero {
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    z-index: 0;
  }
  @media (max-width: 768px) {
    #video-hero {
      position: absolute;
      bottom: 0;
      left: 0;
      min-width: 100%;
      min-height: 100%;
      z-index: 0;
    }
  }
  &:after {
    content: " ";
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba($color: #000000, $alpha: 0.4);
  }
}
</style>
