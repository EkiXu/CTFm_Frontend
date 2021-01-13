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
        <RankCard>
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
import { getScoreboardAPI } from '@/api/contest'
export default {
  components: {
    RankCard
  },
  data () {
    return {
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
      const res = await getScoreboardAPI()
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
