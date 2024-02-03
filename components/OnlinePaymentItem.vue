<template>
  <div class="online-payment-item">
    <div class="online-payment-item__image">
      <img src="@/assets/img/payment.png" alt="" />
    </div>
    <h2 class="online-payment-item__title">AGYZ SUW ULGAMY</h2>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .online-payment-item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding: 70px 0;
    transition: 0.2s ease 0s;
    cursor: pointer;
    &:hover {
      transform: scale(1.01);
      box-shadow: 0.1px 0.1px 3px;
    }
    &__image {
      width: 100px;
      height: 100px;
      img {
        width: 100%;
        height: 100%;
      }
    }

    &__title {
      text-align: center;
      font-size: 22px;
      font-weight: 400;
      max-width: 140px;
    }
  }
</style>
