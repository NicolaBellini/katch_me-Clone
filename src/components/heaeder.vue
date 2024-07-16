<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<template>
  <header>
    <div class="logo">
      <img src="../../public/img/logo.png" alt="" />
    </div>
    <ul class="menu" :class="{ menuOpen: isOpen }">
      <li>
        <router-link :to="{ name: 'home' }" @click="toggleMenu"
          >Home</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'single' }" @click="toggleMenu"
          >Single</router-link
        >
      </li>
      <li><a href="">Contact</a></li>
    </ul>
    <div class="cta">
      <a href="" class="button">Contatti</a>
    </div>
    <div class="hamburger" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  // border: 1px solid red;
  width: 100%;
  z-index: 10;
  max-width: 1350px;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 30px;
  display: flex;
  align-items: center;

  .logo {
    height: 40px;
    img {
      height: 100%;
    }
  }
  .menu {
    // border: 1px solid red;
    // dico come accellerare all' animazione(parte veloce e rallenta alla fine)
    transition: all 0.7s cubic-bezier(0.215, 0.61, 0.355, 1);
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 0 !important;
    height: 40px;

    li {
      margin: 0 10px;
      list-style: none;
    }
  }
  .hamburger {
    display: none;
  }
  @media (max-width: 768px) {
    .cta {
      display: none;
    }
    .menu {
      position: absolute;
      top: -10px;
      right: -100%;
      background: #000;
      height: 100vh;
      flex-direction: column;
      padding: 100px 50px;
      align-items: start;
      li {
        margin-bottom: 30px;
      }
    }
    .menuOpen {
      position: absolute;
      top: 0;
      right: 0;
      background: #000;
      height: 100vh;
      flex-direction: column;
      padding: 100px 50px;
      align-items: start;
      li {
        margin-bottom: 30px;
      }
    }

    .hamburger {
      display: block;
      width: 30px;
      height: 30px;
      position: absolute;
      top: 40px;
      right: 30px;
      span {
        background: #fff;
        width: 100%;
        height: 3px;
        display: block;
        margin-bottom: 5px;
      }
    }
  }
}
</style>
