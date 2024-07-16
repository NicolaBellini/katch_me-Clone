<script>
import BgCover from "../components/hero.vue";
import Hero from "../components/hero.vue";
import Poster from "../components/poster.vue";
import Grid from "../components/grid.vue";
import Flickity from "../components/flickity.vue";
import Offers from "../components/offers.vue";

export default {
  components: {
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
  <Hero />
  <Poster />
  <BgCover />
  <Grid />
  <Flickity />
  <Offers />
</template>
<style></style>
