<template>
  <div class="admin-layout">
    <div class="admin-layout__row">
      <div class="admin-layout__body-wrapper">
        <nuxt />
        <!-- <admin-header />
        <div class="admin-layout__body">
          <nuxt />
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ["auth-admin"],
  // data() {
  //   return {
  //     adminButton: false,
  //   }
  // },
  // watch: {
  //   $route(to, from) {
  //     console.log(to.name)
  //     if (
  //       to.name === `admin-contact-us___${this.$i18n.locale}` ||
  //       to.name === `admin-orders___${this.$i18n.locale}`
  //     ) {
  //       this.adminButton = false
  //     } else {
  //       this.adminButton = true
  //     }
  //   },
  // },
  // mounted() {
  //   console.log(this.$route.name)
  //   if (
  //     this.$route.name === `admin-contact-us___${this.$i18n.locale}` ||
  //     this.$route.name === `admin-orders___${this.$i18n.locale}`
  //   ) {
  //     this.adminButton = false
  //   } else {
  //     this.adminButton = true
  //   }
  // },
};
</script>

<style lang="scss" scoped>
.admin-layout {
  width: 100%;
  height: 100vh;
  background-color: var(--admin-background);
  overflow: hidden;
  &__row {
    display: grid;
    grid-template-columns: 290px 1fr;
    height: 100%;
  }

  &__body-wrapper {
    position: relative;
  }

  &__body {
    margin: 20px;
    height: 100%;
  }
}
</style>
