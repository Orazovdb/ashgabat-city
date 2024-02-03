<template>
  <div class="wrapper">
    <the-header></the-header>
    <main class="main">
      <nuxt />
    </main>
    <client-only>
      <the-footer></the-footer>
    </client-only>
  </div>
</template>

<script>
  export default {
    watch: {
      $route() {
        document.querySelector('.wrapper').scrollTop = 0
      }
    },
    head() {
      return this.$nuxtI18nHead()
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow-x: hidden;
    &._lock {
      overflow: hidden;
      -ms-touch-action: none;
      touch-action: none;
      height: 100vh;
    }
  }
  .main {
    flex: 1 1 auto;
    // margin-top: 150px;
    @media (max-width: 767px) {
      // margin-top: 76px;
    }
  }
</style>
