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
  <div class="grid my_mt3">
    <div class="my_col">
      <h3 class="big-text reveal">Lorem ipsum dolor sit amet.</h3>
    </div>
    <div class="my_col">
      <p class="my_mt2 reveal">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad officia
        temporibus provident earum? Dolorem voluptates harum quas voluptatem est
        corrupti, pariatur perferendis? Sit minus eligendi molestiae numquam
        cum, repellendus mollitia?
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
