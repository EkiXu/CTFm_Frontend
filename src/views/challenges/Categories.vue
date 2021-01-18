<template>
  <v-container>
    <v-row style="height:52px;" />
    <v-row>
      <v-col
        v-for="category in categories"
        :key="category.id"
        cols="12"
        sm="6"
        lg="3"
      >
        <CategoryCard
          :icon="category.icon"
          :title="category.name"
          :total="category.challenge_amount"
          :last-update="category.updated_at"
          :herf="'/category/'+category.name.toLowerCase()"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import moment from 'moment'
import {mapActions} from 'vuex'
import CategoryCard from '@/components/CategoryCard.vue'
import {getCategoryListAPI} from '@/api/challenge'
export default {
  components: {
    CategoryCard
  },
  data () {
    return {
      categories: []
    }
  },
  methods:{
    ...mapActions('contest', ['SetCategoryList']),
    async genCategoryList(){
      const res = await getCategoryListAPI()
      this.categories = res.data
      this.SetCategoryList(this.categories)
      for(let i=0 ;i< this.categories.length ;i++){
        this.categories[i].updated_at = moment(this.categories[i].updated_at,'YYYY-MM-DD HH:mm:ss').fromNow()
      }
    }
  },
  created(){
    this.genCategoryList()
  }
}
</script>

<style>
</style>
