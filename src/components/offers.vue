<template>
  <div class="panel-blue my_mt3">
    <div class="grid">
      <div class="my_col">
        <div class="panel-blue-dots">
          <div class="dot">text</div>
          <div class="dot">text</div>
          <div class="dot">text</div>
          <div class="dot">text</div>
        </div>
      </div>
      <div class="col panel-blue-text">
        <div class="grid">
          <div class="my_col">
            <h3 class="big-text text-white">Lorem, ipsum dolor.</h3>
          </div>
          <div class="my_col">
            <p class="text-white my_mt2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              dolorem quos natus corporis aliquid neque, quas asperiores
              similique sunt commodi in aliquam quis ea tempora nulla itaque
              ullam magni ratione?
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@use "../assets/scss/main.scss";
@use "../assets/scss/partials/variables" as *;
.panel-blue {
  background: $color-accent-light;
  padding: 100px 30px;
  .dot {
    height: 250px;
    width: 250px;
    background: $color-accent;
    border-radius: 100%;
    line-height: 250px;
    text-align: center;
    display: inline-block;
    margin-bottom: 40px;
    margin-right: 40px;
  }
  .panel-blue-text {
    display: flex;
    align-items: center;
  }
}
</style>
