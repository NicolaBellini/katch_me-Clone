<script>
import BgCover from "../components/hero.vue";
import Poster from "../components/poster.vue";
import Grid from "../components/grid.vue";

export default {
  components: {
    Poster,
    BgCover,
    Grid,
  },
};
</script>

<template>
  <Poster />
  <Grid />
  <BgCover />
</template>
<style></style>
