<template>
  <header class="header">
    <div class="header__container">
      <div class="header__top">
        <nuxt-link :to="localePath('/')" class="header__logo">
          <img src="@/assets/img/logo.svg" alt="" />
        </nuxt-link>
        <div class="header__description">Geljegiň ägirt taslamasy <span>şu güniň nusgasy!</span></div>
      </div>
    </div>
    <div class="header__bottom">
      <div class="header__container">
        <div class="header__bottom-flex">
          <nav class="menu-header">
            <div class="menu-header__body">
              <ul class="menu-header__list">
                <li class="menu-header__item" v-for="link in links" :key="link.id">
                  <nuxt-link :to="localePath(link.to)" :exact="link.exact" :class="['menu-header__link']">
                    {{ link.name }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </nav>
          <nuxt-link to="/" class="header__bottom-private-room">Şahsy otag</nuxt-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    computed: {
      links() {
        return [
          {
            id: 1,
            to: '/',
            name: 'Bash sahypa',
            exact: true
          },
          {
            id: 2,
            to: '/online-payment',
            name: 'Online töleg',
            exact: false
          },
          {
            id: 3,
            to: '/online-bron',
            name: 'Online bron',
            exact: false
          },
          {
            id: 4,
            to: '/gallery',
            name: 'Galereýa',
            exact: false
          },
          {
            id: 5,
            to: '/news',
            name: 'Täzelikler',
            exact: false
          },
          {
            id: 6,
            to: '/about-project',
            name: 'Taslama barada',
            exact: false
          },
          {
            id: 7,
            to: '/contact',
            name: 'Habarlaşmak',
            exact: false
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header {
    &__container {
    }

    &__top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 0;
    }

    &__logo {
      margin-left: -20px;
      transition: 0.2s;
      &:hover {
        transform: scale(1.02);
      }
    }

    &__description {
      color: 000;
      text-align: right;
      font-size: 16px;
      font-weight: 400;
      max-width: 240px;
		
      span {
        display: block;
        position: relative;
        &::before {
          content: '';
          position: absolute;
          left: 22%;
          top: 65%;
          transform: translateY(-50%);
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #000;
        }
      }
    }

    &__bottom {
      border-top: 1px solid rgba(0, 0, 0, 0.2);
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }

    &__bottom-flex {
      display: flex;
      justify-content: space-between;
    }

    &__bottom-private-room {
      font-size: 16px;
      font-weight: 400;
      color: #000;
      padding: 20px 0;
      transition: 0.2s;
      &:hover {
        transform: scale(1.04);
      }
    }
  }
  .menu-header {
    &__body {
    }

    &__list {
      display: flex;
      gap: 40px;
    }

    &__item {
    }

    &__link {
      display: block;
      color: #000;
      font-size: 16px;
      font-weight: 400;
      cursor: pointer;
      padding: 20px 0;
      border-bottom: 2px solid transparent;
      transition: 0.2s ease 0s;
      &:hover {
        border-bottom: 2px solid #000;
        font-weight: 500;
      }
      &.nuxt-link-active,
      &.nuxt-link-exact-active {
        border-bottom: 2px solid #000;
        font-weight: 500;
      }
    }
  }
</style>
