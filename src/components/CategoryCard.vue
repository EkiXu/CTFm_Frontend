<template>
  <v-card
    v-bind="$attrs"
    :class="classes"
    class="category_card pa-3"
    raised
    @click="toherf"
  >
    <div class="d-flex grow flex-wrap">
      <v-sheet
        max-height="90"
        width="auto"
        elevation="6"
        class="pa-7 text-start category_card__heading mb-n6"
        dark
      >
        <v-icon
          size="36"
          v-text="icon"
        />
      </v-sheet>

      <div
        class="ml-6"
      >
        <div class="ml-auto text-right">
          <div
            class="body-3 grey--text font-weight-light"
          >
            Total:{{ total }}
          </div>

          <h3 class="font-weight-light primary_text">
            {{ title }}
          </h3>
        </div>
      </div>
    </div>

    <v-col
      cols="12"
      class="px-0"
    >
      <v-divider />
    </v-col>

    <v-icon
      size="16"
      class="ml-2 mr-1"
    >
      mdi-calendar
    </v-icon>

    <span
      class="caption grey--text font-weight-light"
      v-text="lastUpdate"
    />
  </v-card>
</template>

<script>
export default {
  name: 'CategoryCard',

  props: {
    icon: {
      type: String,
      default: undefined
    },
    text: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    lastUpdate: {
      type: String,
      default: undefined
    },
    total: {
      type: Number,
      default: undefined
    },
    herf: {
      type: String,
      default: '#'
    }
  },
  computed: {
    classes () {
      return {
        'category_card--has-heading': this.hasHeading
      }
    },
    hasHeading () {
      return Boolean(this.$slots.heading || this.title || this.icon)
    },
    hasAltHeading () {
      return Boolean(this.$slots.heading || (this.title && this.icon))
    }
  },
  methods: {
    toherf () {
      this.$router.push({ path: this.herf })
    }
  }
}
</script>

<style lang="scss">
.category_card{
  margin: 6px;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  box-shadow: 1px 4px 10px #AC53DF55;
  &__avatar{
    position: relative;
    top: -64px;
    margin-bottom: -32px;
  }
  &__heading{
    position: relative;
    top: -40px;
    transition: .3s ease;
    z-index: 1;
    background-image: -webkit-linear-gradient(left top, #034d8a 0%,#ab22c3 100%);
  }
  > div:first-child {
    justify-content: space-between;
  }
  .v-card {
    border-radius: 4px;
    flex: 0 1 auto;
    &__text {
      display: inline-block;
      flex: 1 0 calc(100% - 120px);
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
    }
    &__actions {
      flex: 1 0 100%;
    }
  }
  .primary_text{
    font-size: 2.5rem !important;
    font-weight: 400;
    line-height: 3.125rem;
    letter-spacing: normal !important;
    font-family: "Roboto", sans-serif !important;
  }
}
</style>
