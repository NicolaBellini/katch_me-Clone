<script>
import BgCover from "../components/hero.vue";
import Poster from "../components/poster.vue";
import Grid from "../components/grid.vue";
import Offers from "../components/offers.vue";

export default {
  components: {
    Poster,
    BgCover,
    Grid,
    Offers,
  },
};
</script>

<template>
  <Poster />
  <Grid />
  <BgCover />
  <Offers />
</template>
<style></style>
