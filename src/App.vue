<script>
import Header from "./components/heaeder.vue";

import Footer from "./components/footer.vue";

export default {
  components: {
    Header,

    Footer,
  },
};
</script>

<template>
  <Header />
  <div>
    <router-view></router-view>
  </div>
  <Footer />
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
