<template>
  <div class="gallery">
    <div class="gallery__container">
      <div class="gallery__images">
        <div class="gallery__image" v-for="item in 8" :key="item.uuid">
          <img src="@/assets/img/gallery.png" alt="" />
        </div>
      </div>
      <div class="gallery__button-wrapper">
        <base-button widthMin>ÝENE-DE GÖRKEZ</base-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .gallery {
    margin-top: 40px;
    margin-bottom: 40px;
    &__container {
    }

    &__images {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
      margin-bottom: 40px;
    }

    &__image {
      height: 610px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 4px;
      }
    }

    &__button-wrapper {
      display: flex;
      justify-content: center;
    }
  }
</style>
