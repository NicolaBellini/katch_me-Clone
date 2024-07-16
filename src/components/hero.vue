<script>
export default {};
</script>

<template>
  <div class="hero">
    <div class="hero-content">
      <p class="intro-text">into text</p>
      <h1 class="big-text">titolo della pagina</h1>
      <a href="" class="button">discover me</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  padding-top: 100px;
  height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
    url("../../public/img/jumbo.png") no-repeat center center;
  background-size: cover;
  .hero-content {
    width: 100%;
    max-width: 1350px;
    margin: 0 auto;
    padding: 30px;
    h1,
    p {
      color: white;
    }
  }
  @media (max-width: 768px) {
  }
}
</style>
