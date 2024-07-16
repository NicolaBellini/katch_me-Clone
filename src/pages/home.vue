<script>
import BgCover from "../components/bgCover.vue";
import Hero from "../components/hero.vue";
import Poster from "../components/poster.vue";
import Grid from "../components/grid.vue";
import Flickity from "../components/flickity.vue";
import PosterInvert from "../components/posterInvert.vue";

export default {
  components: {
    Hero,
    Poster,
    BgCover,
    Grid,
    Flickity,
    PosterInvert,
  },
};
</script>

<template>
  <Hero />
  <Poster />
  <BgCover />
  <Grid />
  <Flickity />
  <PosterInvert />
</template>
<style></style>
