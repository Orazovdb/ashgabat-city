<template>
  <div class="news">
    <div class="news__container">
      <div class="news__top-block">
        <h1 class="news__top-block-title">Iň soňky habarlar</h1>
        <div class="news__top-block-row">
          <div class="news__top-block-left">
            <div class="item-left">
              <div class="item-left__top-block-image">
                <img src="@/assets/img/photo.png" alt="" />
              </div>
              <div class="item-left__content-fixed">
                <h2 class="item-left__title">«VOLKSWAGEN» DÜÝBÜNDEN TÄZELENEN AWTOULAGYNY KÖPÇÜLIGE HÖDÜRLEDI</h2>
                <div class="item-left__date">23.09.2023</div>
              </div>
            </div>
            <div class="news__top-block-left-items">
              <div class="item-left">
                <div class="item-left__top-block-image">
                  <img src="@/assets/img/photo.png" alt="" />
                </div>
                <div class="item-left__content-fixed">
                  <h2 class="item-left__title">«VOLKSWAGEN» DÜÝBÜNDEN TÄZELENEN AWTOULAGYNY KÖPÇÜLIGE HÖDÜRLEDI</h2>
                  <div class="item-left__date">23.09.2023</div>
                </div>
              </div>
              <div class="item-left">
                <div class="item-left__top-block-image">
                  <img src="@/assets/img/photo.png" alt="" />
                </div>
                <div class="item-left__content-fixed">
                  <h2 class="item-left__title">«VOLKSWAGEN» DÜÝBÜNDEN TÄZELENEN AWTOULAGYNY KÖPÇÜLIGE HÖDÜRLEDI</h2>
                  <div class="item-left__date">23.09.2023</div>
                </div>
              </div>
            </div>
          </div>
          <div class="news__top-block-right">
            <div class="item-right" v-for="item in 2" :key="item">
              <div class="item-right__image">
                <img src="@/assets/img/photo.png" alt="" />
              </div>
              <div class="item-right__content-fixed">
                <h2 class="item-right__title">ÝEWROPADA SATYLAN ULAGLARYŇ 5-DEN 1-I ELEKTRIK ULAGLARDYGY ANYKLANYLDY</h2>
                <div class="item-right__date">23.09.2023</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .news {
    margin-top: 40px;
    &__container {
    }

    &__top-block {
    }

    &__top-block-title {
      color: #000;
      font-size: 24px;
      font-weight: 600;
      line-height: 30px;
      margin-bottom: 20px;
    }

    &__top-block-row {
      display: grid;
      grid-template-columns: 1fr minmax(300px, 360px);
      gap: 40px;
    }

    &__top-block-left {
      .item-left {
        &:first-child {
          .item-left__top-block-image {
            height: 350px !important;
          }
        }
      }
    }

    &__top-block-left-items {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      margin-top: 40px;
    }

    &__top-block-right {
    }
  }
  .item-left {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 2;
      background: #0000004d;
    }
    &__top-block-image {
      width: 100%;
      height: 250px !important;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: 6px;
      }
    }

    &__content-fixed {
      position: absolute;
      bottom: 40px;
      left: 40px;
      z-index: 3;
    }

    &__title {
      color: #fff;
      font-size: 20px;
      font-weight: 600;
      line-height: 30px;
    }

    &__date {
      color: rgba(255, 255, 255, 0.8);
      font-size: 16px;
      font-weight: 300;
      line-height: 30px;
    }
  }
  .mw {
  }
  .item-right {
    &:first-child {
      .item-right__image {
        height: 350px;
      }
    }
    &__image {
      width: 100%;
      height: 250px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: 6px;
      }
    }

    &__content-fixed {
    }

    &__title {
    }

    &__date {
    }
  }
</style>
