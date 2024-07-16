<script>
export default {};
</script>

<template>
  <div class="bg-cover text-white">
    <div class="bg-cover-title">
      <h3 class="big-text">titolo blocco cover</h3>
    </div>
    <div class="bg-cover-text">
      <h4 class="normal-text">titolo paragrafo</h4>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
        veritatis in nisi blanditiis minima ab repellat, nihil aliquam quo
        ipsum!
      </p>
      <h4 class="normal-text">titolo paragrafo</h4>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
        veritatis in nisi blanditiis minima ab repellat, nihil aliquam quo
        ipsum!
      </p>
      <h4 class="normal-text">titolo paragrafo</h4>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
        veritatis in nisi blanditiis minima ab repellat, nihil aliquam quo
        ipsum!
      </p>
      <h4 class="normal-text">titolo paragrafo</h4>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
        veritatis in nisi blanditiis minima ab repellat, nihil aliquam quo
        ipsum!
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg-cover {
  border: 1px solid red;
  display: flex;
  padding: 100px 0;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("../../public/img/jumbo.png") no-repeat center center;
  background-size: cover;
  .bg-cover-title {
    width: 50%;
    padding: 50px;
    display: flex;
    align-items: center;
  }
  .bg-cover-text {
    width: 50%;
    color: white;
    padding: 30px;
  }
}
@media (max-width: 768px) {
  .bg-cover {
    flex-wrap: wrap;
    height: auto;
    .bg-cover-text,
    .bg-cover-title {
      width: 100%;
    }
  }
}
</style>
