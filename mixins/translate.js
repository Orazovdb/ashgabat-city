export default {
  methods: {
    translateTitle(item) {
      if (this.$i18n.locale === 'en') {
        return item.title_en
      } else if (this.$i18n.locale === 'ru') {
        return item.title_ru
      } else {
        return item.title_tm
      }
    },
    translateText(item) {
      if (this.$i18n.locale === 'en') {
        return item.text_en
      } else if (this.$i18n.locale === 'ru') {
        return item.text_ru
      } else {
        return item.text_tm
      }
    },
    translateImage(item) {
      if (this.$i18n.locale === 'en') {
        return item.image_en
      } else if (this.$i18n.locale === 'ru') {
        return item.image_ru
      } else {
        return item.image_tm
      }
    },
    translateDescription(item) {
      if (this.$i18n.locale === 'en') {
        return item.description_en
      } else if (this.$i18n.locale === 'ru') {
        return item.description_ru
      } else {
        return item.description_tm
      }
    }
  }
}
