<script>
import BgCover from "./components/bgCover.vue";
import Header from "./components/heaeder.vue";
import Hero from "./components/hero.vue";
import Poster from "./components/poster.vue";
import Grid from "./components/grid.vue";
import Flickity from "./components/flickity.vue";
import Offers from "./components/offers.vue";

export default {
  components: {
    Header,
    Hero,
    Poster,
    BgCover,
    Grid,
    Flickity,
    Offers,
  },
};
</script>

<template>
  <Header />
  <Hero />
  <Poster />
  <BgCover />
  <Grid />
  <Flickity />
  <Offers />
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
