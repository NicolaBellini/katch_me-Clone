<script>
import Header from "./components/heaeder.vue";
import Hero from "./components/hero.vue";
export default {
  components: {
    Header,
    Hero,
  },
};
</script>

<template>
  <Header />
  <Hero />
</template>

<style lang="scss">
@use "./assets/scss/main.scss";
@use "./assets/scss/partials/variables" as *;
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: "inter", sans-serif;
}
</style>
