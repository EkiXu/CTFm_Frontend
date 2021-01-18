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
      records: [],
      challenges:[]
    }
  },
  methods:{
    async genUserList(){
      const res = await getScoreboardAPI()
      let records = res.data.players
      let challenges = res.data.challenges
      for(let challenge of challenges){
        this.headers.push({
          text: challenge.title,
          value: 'challenge_'+challenge.id,
        })
        this.challenges.push({
          text: challenge.title,
          value: 'challenge_'+challenge.id,
        })
      }
      for(let i in records){
        records[i].rank = parseInt(i)+1
        records[i].last_point_at = moment(records[i].last_point_at,'YYYY-MM-DD HH:mm:ss').fromNow()
        for(let solved_challenge of records[i].solved_challenges)
          records[i]["challenge_"+solved_challenge.challenge] = "√"
      }
      console.log(records)
      this.records = records
    }
  },
  created(){
    this.genUserList()
  }
}
</script>
