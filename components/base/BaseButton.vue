<script>
  export default {
    emits: ['clickedButton'],
    props: {
      icon: {
        type: String,
        default: () => ''
      },
      iconAnimated: {
        type: String,
        default: () => ''
      },
      color: {
        type: String,
        default: () => ''
      },
      widthMin: {
        type: Boolean,
        default: () => null
      }
    },
    computed: {
      classes: function () {
        return [
          'button',
          `button--${this.color}`,
          {
            'button--admin-button': this.adminButton,
            'button--widthMin': this.widthMin
          }
        ]
      }
    }
  }
</script>

<template>
  <button :class="classes" @click="$emit('clickedButton')" type="submit">
    <div class="button-content">
      <slot></slot>
    </div>
    <base-icon v-if="icon" class="button-icon" :icon="icon" />
    <base-icon v-if="iconAnimated" class="button-icon-animated" :icon="iconAnimated" />
  </button>
</template>

<style lang="scss" scoped>
  .button {
    min-width: 273px;
    height: 48px;
    padding: 14px 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--primary);
    color: #fff;
    border: 1px solid transparent;
    font-size: 16px;
    font-weight: 500;
    gap: 20px;
    white-space: nowrap;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.2s all;
    &:active {
      transform: scale(1.04);
    }
    &:hover {
      .button-icon-animated {
        transform: translateX(6px);
      }
    }
    @media (max-width: 767px) {
      width: 100px;
      height: 35px;
      font-size: 12px;
      cursor: none;
    }

    &-icon-animated {
      transition: 0.2s all;
    }
    &--widthMin {
      min-width: 195px;
    }
  }
</style>
