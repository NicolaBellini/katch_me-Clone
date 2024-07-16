<script>
export default {};
</script>

<template>
  <div class="poster">
    <div class="poster-img">
      <img src="../../public/img/jumbo.png" alt="" />
    </div>
    <div class="poster-content">
      <h3>titolo Poster</h3>
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
  border: 1px solid red;
  .poster-img {
    width: 60%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .poster-content {
    width: 40%;
  }
}
</style>
