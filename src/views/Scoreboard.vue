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
          v-bind:type="rank_categories[current_rank_category_id]"
        >
          <v-tabs
            v-model="current_rank_category_id"
          >
            <v-tab
              v-for="category in rank_categories"
              :key="category"
            >
              {{ category }}
            </v-tab>
          </v-tabs>
          <div class="scoreboard">
            <v-tabs-items v-model="current_rank_category_id">
              <v-tab-item
                v-for="category in rank_categories"
                :key="category"
              >
                <v-data-table
                  :headers="headers"
                  :items="records"
                  :options.sync="options"
                  :server-items-length="page_count"
                  :items-per-page="items_per_page"
                  hide-default-footer
                  :loading="is_loading"
                  loading-text="Loading... Please wait"
                  height="300"
                  fixed-header
                  disable-sort
                />
              </v-tab-item>
            </v-tabs-items>
            <div class="text-center pt-2">
              <v-pagination
                v-model="page"
                :length="page_count"
                @input="getPaginationPage"
              />
            </div>
          </div>
        </RankCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import moment from 'moment'
import RankCard from '@/components/RankCard.vue'
import { getScoreboardAPI,getStuScoreboardAPI,getTeamScoreboardAPI } from '@/api/contest'
export default {
  components: {
    RankCard
  },
  data () {
    return {
      page: 1,
      page_count: 0,
      items_per_page: 5,
      is_loading:true,
      options: {},
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
      rank_categories: ['Team','User'],
      current_rank_category_id: null,
      records: [],
      challenges:[]
    }
  },
  watch:{
    current_rank_category_id: function (new_category_id, old_category_id) {
      this.page = 1
      let offset= (this.page-1)*this.items_per_page
      let limit = this.items_per_page
      this.records = []
      this.genScoreboard(this.rank_categories[new_category_id],limit,offset)
    },
    options: {
      handler () {
        this.getPaginationPage()
      },
      deep: true,
    },
  },
  methods:{
    getPaginationPage(){
      let offset= (this.page-1)*this.items_per_page
      let limit = this.items_per_page
      this.genScoreboard(this.rank_categories[this.current_rank_category_id],limit,offset)
    },
    async genScoreboard(rank_category,limit,offset){
      var res
      this.is_loading = true
      try{
        if (rank_category=='School'){
          res = await getStuScoreboardAPI(offset,limit)
        }
        if (rank_category=='Team'){
          res = await getTeamScoreboardAPI(offset,limit)
        }
        else {
          res = await getScoreboardAPI(offset,limit)
        }
      }catch{
        return
      }


      let challenges = res.data.challenges
      
      let records = []
      
      if(rank_category == 'Team'){
        records = res.data.results
        this.headers = [
          {
            text: 'Rank',
            align: 'start',
            sortable: false,
            value: 'rank'
          },
          { text: 'Name', value: 'name' },
          { text: 'Points', value: 'points' },
          { text: 'Solved', value: 'solved_amount' },
        ]

      }else {
        records = res.data.results

        this.headers = [
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
        ]
      }
      

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
        records[i].rank = offset+ parseInt(i)+1
        records[i].last_point_at = moment(records[i].last_point_at,'YYYY-MM-DD HH:mm:ss').fromNow()
        for(let solved_challenge of records[i].solved_challenges)
          records[i]["challenge_"+solved_challenge.challenge] = "🚩"
      }
      this.records = records
      this.page_count = parseInt(res.data.count / limit)
      console.log(this.page_count)
      this.is_loading = false
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
