<template>
  <div class="about-project">
    <div class="about-project__container">
      <div class="about-project__buttons">
        <button
          v-for="(button, index) in projects"
          :key="button.uuid"
          @click="selectedId = button.id"
          :class="['about-project__button', { active: selectedId ? selectedId === button.id : index === 0 }]"
        >
          {{ button.title }}
        </button>
      </div>
      <div class="about-project__row">
        <p class="about-project__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eleifend dolor et mi ultricies, eu eleifend felis finibus. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc pellentesque sapien felis, vel dapibus neque posuere ac.
          Morbi quis blandit tellus, ac tincidunt tortor. Aliquam facilisis vulputate rhoncus. Mauris consectetur ex non urna tristique blandit. In
          sit amet blandit massa. Nunc interdum egestas accumsan. Duis id tortor non justo pellentesque auctor. Suspendisse eu vestibulum enim, ut
          fermentum turpis. Mauris dignissim mauris nulla, nec hendrerit risus consectetur laoreet. Aenean laoreet nulla urna, ut consequat enim
          tristique aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut tempus sapien et rhoncus
          viverra. Donec vitae dapibus dolor, ac interdum sem. Vivamus laoreet lectus sed sem maximus mattis. Aenean ac velit id nunc porttitor
          elementum. Nulla ex neque, tristique non diam id, consectetur mollis diam. Nulla ultricies dolor non suscipit maximus. Pellentesque vitae
          est sem. Sed dignissim nibh vitae mauris facilisis laoreet. Curabitur diam turpis, maximus eget consequat a, consectetur quis mi. Maecenas
          lobortis massa magna, nec sollicitudin est vehicula convallis. Cras luctus lacus et turpis pellentesque ultricies. Maecenas vitae ex a ipsum
          euismod consequat. Morbi vel faucibus mauris. Nunc faucibus eget arcu eu ornare. Aliquam at posuere mi. Nunc commodo purus elit, non
          fermentum nunc finibus vitae. Quisque blandit libero sagittis venenatis porta. Nulla lobortis facilisis pharetra. Integer mi est, pharetra
          vitae efficitur in, tempor vitae nibh. In dolor ex, sagittis non tortor auctor, pharetra volutpat nunc. Cras pharetra sapien a risus
          ultricies accumsan. Duis laoreet, eros in cursus volutpat, metus mi tristique tortor, id bibendum nisl risus eu tortor. Quisque porttitor
          ullamcorper semper. Vestibulum ultricies vel urna in porta. Proin ut semper neque. Proin laoreet massa id feugiat gravida. Cras fringilla
          imperdiet bibendum. Aenean et tempor felis. Nulla a purus nec ipsum placerat aliquet id vitae purus. Vestibulum tortor velit, auctor et
          laoreet eu, luctus quis felis. Sed pharetra justo nunc. Duis vulputate lectus ac neque interdum, non venenatis augue tincidunt. Donec vitae
          lectus eget nisl porta semper sed sed ante. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        </p>
        <div class="about-project-swiping">
          <div v-swiper:mySwiper="options" class="about-project-swiping__swiper swiper">
            <div class="about-project-swiping__swiper-wrapper swiper-wrapper">
              <div class="about-project-swiping__slide swiper-slide" v-for="item in 6" :key="item.uuid">
                <img src="@/assets/img/gallery.png" alt="" />
                <div class="about-project-swiping__footer">
                  <div class="about-project-swiping__footer-content">
                    <h3>Türkmeniň milli “Ak öýi” nusgasynda medeni çäreleri geçirmek üçin niýetlenen merkezi meýdança</h3>
                  </div>
                  <div class="about-project-swiping__footer-right">
                    <div class="about-project-swiping__pagination-wrapper">
                      <div class="about-project-swiping__pagination swiper-pagination"></div>
                    </div>
                    <div class="about-project-swiping__footer-right-navigations">
                      <div class="about-project-swiping__navigation-prev swiper-button-prev"><base-icon icon="prevNavigation" /></div>
                      <div class="about-project-swiping__navigation-next swiper-button-next"><base-icon icon="nextNavigation" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selectedId: null,
        projects: [
          {
            id: 1,
            title: 'GYSGAÇA MAGLUMAT'
          },
          {
            id: 2,
            title: 'BINALAR WE DESGALAR'
          }
        ],
        options: {
          slidesPerView: 1,
          speed: 500,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .about-project {
    margin: 40px 0 40px;
    &__container {
    }

    &__buttons {
      display: flex;
      gap: 20px;
      margin-bottom: 40px;
    }

    &__button {
      font-size: 16px;
      font-weight: 500;
      padding: 10px 30px;
      border: 1px solid var(--primary);
      background-color: transparent;
      color: var(--primary);
      text-transform: uppercase;
      cursor: pointer;
      transition: 0.2s;
      &:hover {
        transform: scale(1.03);
      }
      &.active {
        background-color: var(--primary);
        color: #fff; 
        text-transform: uppercase;
      }
    }

    &__row {
      display: flex;
      gap: 30px;
    }

    &__text {
      text-align: justify;
      font-size: 16px;
      font-weight: 400;
      color: #000;
      width: calc(55% - 15px);
    }
  }
  .about-project-swiping {
    width: calc(45% - 15px);
    &__swiper {
      width: 100%;
      overflow: hidden;
      background-color: rgba(0, 0, 0, 0.2);
    }

    &__swiper-wrapper {
      display: flex;
      width: fit-content;
    }

    &__slide {
      width: 100%;
      overflow: hidden;
      position: relative;
      border-radius: 10px;

      img {
        width: 100%;
        height: 500px;
        object-fit: cover;
        object-position: center;
        border-radius: 10px;
      }
    }

    &__footer {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 90px;
      display: flex;
      align-items: center;
      background: rgba(0, 0, 0, 0.8);
    }

    &__footer-content {
      padding: 20px;
      h3 {
        text-align: justify;
        font-size: 14px;
        font-weight: 500;
        text-transform: uppercase;
        color: #fff;
      }
    }

    &__footer-right {
      min-width: 70px;
      height: 100%;
      background-color: var(--primary);
    }

    &__pagination-wrapper {
      height: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative; 
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 80%;
        height: 1px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #fff;
      }
    }

    &__pagination {
      &:deep() {
        color: #fff;
        span {
          color: #fff;
          font-size: 14px;
          font-weight: 500;
        }
      }
    }

    &__footer-right-navigations {
      height: 50%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6px;
    }

    &__navigation-next {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      &:hover {
        &:deep() {
          .icon {
            transform: scale(1.3);
          }
        }
      }
    }

    &__navigation-prev {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      cursor: pointer;
      &:hover {
        &:deep() {
          .icon {
            transform: scale(1.3);
          }
        }
      }
      &::after {
        content: '';
        position: absolute;
        width: 1px;
        height: 24px;
        right: -10%;
        background-color: #fff;
      }
    }
  }
</style>
