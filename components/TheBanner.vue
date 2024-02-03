<template>
  <section class="banner">
    <div class="banner__container">
      <div class="banner__row">
        <div class="banner__content">
          <h1 class="banner__title">Ashgabat</h1>
          <h2 class="banner__sub-title">city</h2>
          <p class="banner__description">Geljegiň ägirt taslamasy</p>
          <base-button iconAnimated="arrowRight">SYÝAHATA TOMAŞA ET</base-button>
        </div>
        <div class="banner__image">
          <img src="@/assets/img/banner.svg" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .banner {
    height: 100%;
    display: flex;
    align-items: center;
    &__container {
    }

    &__row {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__content {
    }

    &__title {
      font-size: 96px;
      font-weight: 700;
      margin-bottom: 20px;
    }

    &__sub-title {
      font-size: 96px;
      font-weight: 200;
      margin-bottom: 40px;
    }

    &__description {
      font-size: 24px;
      font-weight: 400;
      margin-bottom: 40px;
    }
  }
</style>
