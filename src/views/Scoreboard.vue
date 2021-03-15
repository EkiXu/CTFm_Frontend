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
                  :page.sync="page"
                  :items-per-page="items_per_page"
                  hide-default-footer
                  class="elevation-1"
                  :loading="isLoading"
                  loading-text="Loading... Please wait"
                  @page-count="page_count = $event"
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
import { getScoreboardAPI,getStuScoreboardAPI } from '@/api/contest'
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
      rank_categories: ['All','School'],
      current_rank_category_id: null,
      records: [],
      challenges:[]
    }
  },
  watch:{
    current_rank_category_id: function (new_category_id, old_category_id) {
      this.genUserList(this.rank_categories[new_category_id])
    }
  },
  methods:{
    async genUserList(rank_category){
      var res
      this.isLoading = true
      if (rank_category=='School'){
        res = await getStuScoreboardAPI()
      }else {
        res = await getScoreboardAPI()
      }
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
          records[i]["challenge_"+solved_challenge.challenge] = "🚩"
      }
      this.records = records
      this.isLoading = false
    }
  }
}
</script>
<style lang="scss" scoped>
.scoreboard{
  
}
</style>
