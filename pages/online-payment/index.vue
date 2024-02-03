<template>
  <div class="online-payment">
    <div class="online-payment__container">
      <div class="online-payment__header">
        <h4 class="online-payment__title">Ulgamlar, pudaklar we hyzmatlar, hem-de beýleki taraplar boýunça tölegler</h4>
        <div class="online-payment__search-input-wrapper">
          <base-icon icon="search" class="online-payment__search-input-icon" />
          <input class="online-payment__search-input" placeholder="Gozleg..." />
        </div>
      </div>
      <div class="online-payment__items">
        <online-payment-item v-for="item in 8" :key="item.uuid" />
      </div>
      <div class="online-payment__button-wrapper">
        <base-button widthMin>ÝENE-DE GÖRKEZ</base-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .online-payment {
    margin: 50px 0 40px;
    &__container {
    }

    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 50px;
    }

    &__title {
      color: #000;
      font-size: 16px;
      font-weight: 500;
      text-transform: uppercase;
      max-width: 750px;
    }

    &__search-input-wrapper {
      position: relative;
      height: 40px;
    }

    &__search-input-icon {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      &:deep(svg) {
        color: rgba(0, 0, 0, 0.2);
      }
    }

    &__search-input {
      width: 340px;
      height: 100%;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      padding: 0 30px;
      transition: 0.2s all;
      &::placeholder {
        color: rgba(0, 0, 0, 0.2);
      }
      &:focus {
        border-bottom: 1px solid #000;
        &::placeholder {
          color: #000;
        }
      }
    }

    &__items {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
      margin-bottom: 40px;
    }

    &__button-wrapper {
      display: flex;
      justify-content: center;
    }
  }
</style>
