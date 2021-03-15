<template>
  <v-card
    v-bind="$attrs"
    class="rank_card--has-heading rank_card "
  >
    <div class="d-flex grow flex-wrap">
      <v-sheet
        width="100%"
        elevation="6"
        class="text-start rank_card__heading chart_ring"
        dark
      >
        <TrendCard
          v-if="loaded"
          :chartdata="datacollection"
          :options="chartOption"
          style="height: 250px;padding:10px;"
        />
      </v-sheet>
    </div>
    <slot />
  </v-card>
</template>

<script>
import moment from 'moment'
import {mapGetters} from 'vuex'
import TrendCard from '@/components/TrendCard'
import {getTrendAPI,getStuTrendAPI} from '@/api/contest'
export default {
  components: { TrendCard },
  name: 'RankCard',
  inheritAttrs: false,
  props: {
    type: {
      type:String,
      default:null
    }
  },
  data(){
    return {
      loaded:false,
      timeFormat :'YYYY-MM-DD HH:mm:ss',
      colorset:['#409eff','#fe9205','#f87979','#00bcd4','#39c7ba','#733c8b','#9a4a4c','#dd162a','#3f637b','#635e16'],
      datacollection :{
        datasets: []
      },
      chartOption:{
        scales: {
          xAxes: [{
              ticks: {
                fontColor:'rgba(255, 255, 255, 0.7)'
              },
              gridLines: {
                borderDash:[1, 4],
                color:'rgba(255, 255, 255, 0.6)',
                zeroLineBorderDash:[1, 4],
                zeroLineColor: 'rgba(255, 255, 255, 0.6)',
              },
              type: "time",
              time: {
                  parser: this.timeFormat,
                  tooltipFormat: this.timeFormat
              },
            }],
          yAxes: [{
              ticks: {
                beginAtZero: true,
                fontColor:'rgba(255, 255, 255, 0.7)'
              },
              gridLines: {
                color:'rgba(255, 255, 255, 0.6)',
                borderDash:[1, 4],
                zeroLineBorderDash:[1, 4],
                zeroLineColor: 'rgba(255, 255, 255, 0.6)',
              }
            }]
        },
        legend: {
          labels: {
            fontColor: 'rgba(255, 255, 255, 0.7)'
          }
        },
        bezierCurve: false,
        scaleFontColor: "rgba(255, 255, 255, 0.7)",
        responsive: true,
        maintainAspectRatio: false,
      }
    }
  },
  computed:{
    ...mapGetters('contest', ['contestInfo']),
  },
  watch:{
    type: function (new_type, old_type) {
      this.genTrend(new_type)
    }
  },
  mounted(){
  },
  methods:{
    async genTrend(type){
      this.loaded = false
      var res;
      try{
        if(this.type == 'School'){
          res = await getStuTrendAPI()
        }else {
          res = await getTrendAPI()
        }
      }catch{
        this.loaded = true
        return
      }
      this.datacollection.datasets = []
      for(let i in res.data.rows){
        const user = res.data.rows[i]
        let records = user.records
        let row = {
          label: user.nickname,
          borderColor: this.colorset[i],
          fill:false,
          pointBackgroundColor:this.colorset[i],
          data:[]
        }
        row.data.push({
            x: moment(this.contestInfo.start_time).format(this.timeFormat),
            y: 0
        })
        for(let record of records){
          row.data.push({
            x: moment(record.date).format(this.timeFormat),
            y: record.points
          })
        }
        row.data.push({
            x: moment().isBefore(this.contestInfo.end_time) ? moment().format(this.timeFormat):moment(this.contestInfo.end_time).format(this.timeFormat),
            y: user.current_points
        })
        this.datacollection.datasets.push(row)
      }
      this.loaded = true
    }
  }
}
</script>

<style lang="scss" scoped>
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
    min-height: 258px;
    position: relative;
    top: -20px;
    transition: .3s ease;
    z-index: 1;
  }
}
</style>
