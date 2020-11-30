<template>
  <v-card
    v-bind="$attrs"
    class="rank_card--has-heading rank_card pa-3"
  >
    <div class="d-flex grow flex-wrap">
      <v-sheet
        width="100%"
        elevation="6"
        class="text-start rank_card__heading mb-n6 pa-7 chart_ring"
        dark
      >
        <chartist
          :data="data"
          :event-handlers="eventHandlers"
          :options="options"
          :ratio="ratio"
          :responsive-options="responsiveOptions"
          :type="type"
          style="max-height: 150px;"
        />
      </v-sheet>
    </div>

    <slot />
  </v-card>
</template>

<script>
export default {
  name: 'RankCard',
  inheritAttrs: false,
  props: {
    data: {
      type: Object,
      default: () => ({})
    },
    eventHandlers: {
      type: Array,
      default: () => ([])
    },
    options: {
      type: Object,
      default: () => ({})
    },
    ratio: {
      type: String,
      default: undefined
    },
    responsiveOptions: {
      type: Array,
      default: () => ([])
    },
    type: {
      type: String,
      required: true,
      validator: v => ['Bar', 'Line', 'Pie'].includes(v)
    },
    text: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.rank_card{
  p{
    color: #999;
  }
  .chart_ring{
    &:before
    {
      content: '';
      position: absolute;
      top: -1px;
      left: -1px;
      right: -1px;
      bottom: -1px;
      background: #fff;
      z-index: -1;
    }
    &:after
    {
      content: '';
      position: absolute;
      top: -1px;
      left: -1px;
      right: -1px;
      bottom: -1px;
      background: #fff;
      z-index: -2;
      filter: blur(16px);
    }
    &:before,
    &:after
    {
      background: #1f659c
    }
  }
  .rank_card__heading{
    max-height: 185px;
    position: relative;
    top: -40px;
    transition: .3s ease;
    z-index: 1;
    .ct-label{
    color: inherit;
    opacity: .7;
    font-size: 0.975rem;
    font-weight: 100;
    }
    .ct-grid{
    stroke: rgba(255, 255, 255, 0.2);
    }
    .ct-series-a .ct-point,
    .ct-series-a .ct-line,
    .ct-series-a .ct-bar,
    .ct-series-a .ct-slice-donut{
        stroke: rgba(255,255,255,.8);
    }
    .ct-series-a .ct-slice-pie,
    .ct-series-a .ct-area{
        fill: rgba(255,255,255,.4);
    }
  }
}
</style>
