<script>
export default {};
</script>

<template>
  <div class="poster my_mt">
    <div class="poster-img">
      <img src="../../public/img/jumbo.png" alt="" />
    </div>
    <div class="poster-content">
      <h3 class="big-text">titolo Poster</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
        accusantium doloremque facere illo est unde blanditiis asperiores vel,
        quo deleniti.
      </p>
      <a href="#" class="button">CTA</a>
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
