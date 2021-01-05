<template>
  <v-container
    fluid
  >
    <v-row justify="center">
      <v-col
        cols="12"
        md="10"
      >
        <v-row style="height:48px;" />
        <RankCard
          :data="RankChart.data"
          :options="RankChart.options"
          :responsive-options="RankChart.responsiveOptions"
          hover-reveal
          type="Line"
        >
          <v-data-table
            :headers="headers"
            :items="records"
            :page.sync="page"
            :items-per-page="itemsPerPage"
            hide-default-footer
            class="elevation-1"
            @page-count="pageCount = $event"
            disable-sort
          />
          <div class="text-center pt-2">
            <v-pagination
              v-model="page"
              :length="pageCount"
            />
          </div>
        </RankCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import moment from 'moment'
import RankCard from '@/components/RankCard.vue'
import { getUserListAPI } from '@/api/user'
export default {
  username: 'DashboardDashboard',
  components: {
    RankCard
  },
  data () {
    return {
      RankChart: {
        data: {
          labels: ['Jul 2019', 'Sep 2019', 'Nov 2019', 'Jan 2020', 'Mar 2020', 'May 2020', 'Sep 2020'],
          series: [
            [12, 17, 7, 17, 23, 18, 38],
            [1, 30, 70, 100, 123, 123, 123],
          ]
        },
        options: {
          lineSmooth: this.$chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 150, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },            //Boolean - If we should show the scale at all
          showScale: true,
          //Boolean - Whether grid lines are shown across the chart
          scaleShowGridLines: true,
          //String - Colour of the grid lines
          //Number - Width of the grid lines
          scaleGridLineWidth: 1,
          //Boolean - Whether to show horizontal lines (except X axis)
          scaleShowHorizontalLines: true,
          //Boolean - Whether to show vertical lines (except Y axis)
          scaleShowVerticalLines: true,
          //Boolean - Whether the line is curved between points
          bezierCurve: true,
          //Number - Tension of the bezier curve between points
          bezierCurveTension: 0.3,
          //Boolean - Whether to show a dot for each point
          pointDot: true,
          //Number - Radius of each point dot in pixels
          pointDotRadius: 4,
          //Number - Pixel width of point dot stroke
          pointDotStrokeWidth: 1,
          //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
          pointHitDetectionRadius: 20,
          //Boolean - Whether to show a stroke for datasets
          datasetStroke: true,
          //Number - Pixel width of dataset stroke
          datasetStrokeWidth: 2,
          //Boolean - Whether to fill the dataset with a color
          datasetFill: false,
          //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
          maintainAspectRatio: true,
          //Boolean - whether to make the chart responsive to window resizing
          responsive: true,
        }
      },
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      headers: [
        {
          text: 'Rank',
          align: 'start',
          sortable: false,
          value: 'rank'
        },
        { text: 'Nickname', value: 'nickname' },
        { text: 'Points', value: 'points' },
        { text: 'Solved', value: 'solved_amount' },
        { text: 'Last Point Time', value: 'last_point_at' }
      ],
      records: []
    }
  },
  methods:{
    async genUserList(){
      const res = await getUserListAPI()
      this.records = res.data
      this.records.sort((a, b) => (a.points < b.points) ? 1 : -1)
      for(let i=0 ;i< this.records.length ;i++){
        this.records[i].rank = i+1
        this.records[i].last_point_at = moment(this.records[i].last_point_at,'YYYY-MM-DD HH:mm:ss').fromNow()
      }
    }
  },
  created(){
    this.genUserList()
  }
}
</script>
