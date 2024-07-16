<script>
import ScrollReveal from "scrollreveal";
export default {
  mounted() {
    ScrollReveal().reveal(".reveal", {
      origin: "bottom",
      distance: "50px",
      duration: 800,
      delay: 300,
      easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
      interval: 300,
    });
  },
};
</script>

<template>
  <footer>
    <div class="grid">
      <div class="my-col reveal">
        <h4 class="text-white normal-text">Lorem, ipsum.</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
          eaque voluptates asperiores, sit porro aliquid ad natus quidem,
          temporibus quis quibusdam minima, ullam reiciendis sint obcaecati
          officia! Nam, magni non!
        </p>
      </div>
      <div class="my-col reveal">
        <h4 class="text-white normal-text">Lorem, ipsum.</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
          eaque voluptates asperiores, sit porro aliquid ad natus quidem,
          temporibus quis quibusdam minima, ullam reiciendis sint obcaecati
          officia! Nam, magni non!
        </p>
      </div>
      <div class="my-col reveal">
        <h4 class="text-white normal-text">Lorem, ipsum.</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
          eaque voluptates asperiores, sit porro aliquid ad natus quidem,
          temporibus quis quibusdam minima, ullam reiciendis sint obcaecati
          officia! Nam, magni non!
        </p>
      </div>
      <div class="my-col reveal">
        <h4 class="text-white normal-text">Lorem, ipsum.</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
          eaque voluptates asperiores, sit porro aliquid ad natus quidem,
          temporibus quis quibusdam minima, ullam reiciendis sint obcaecati
          officia! Nam, magni non!
        </p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "../assets/scss/main.scss";
@use "../assets/scss/partials/variables" as *;
footer {
  background: $color-primary-dark;
  padding: 150px 0;
  p {
    color: $color-primary-light;
  }
}
</style>
