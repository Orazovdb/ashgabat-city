<template>
  <div class="languages">
    <div class="languages__row">
      <div
        v-for="lang in languages"
        :key="lang.key"
        @click="$emit('selectLanguage', lang.key)"
        :class="['languages__language', { active: activeLang === lang.key }]"
      >
        <p>{{ lang.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    activeLang: {
      type: String,
      default: () => "tm",
    },
  },
  data() {
    return {
      languages: [
        {
          key: "tm",
          name: "TKM",
        },
        {
          key: "ru",
          name: "RUS",
        },
        {
          key: "en",
          name: "ENG",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.languages {
  margin-bottom: 20px;
  &__row {
    display: flex;
    gap: 15px;
  }

  &__language {
    width: 50px;
    height: 30px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    cursor: pointer;
    transition: 0.3s;

    p {
      font-weight: 600;
      font-size: 12px;
      line-height: 120%;
      padding-top: 4px;
      color: #969494;
    }

    &:hover {
      border: 1px solid #344051;
      p {
        color: #344051;
      }
    }

    &.active {
      background-color: #f4f4f4;
      p {
        color: #344051;
      }
    }
  }
}
</style>
