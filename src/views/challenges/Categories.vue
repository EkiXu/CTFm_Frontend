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
          :total="category.total"
          :last-update="category.last_update"
          :herf="'/category/'+category.type"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CategoryCard from '@/components/CategoryCard.vue'
import {getCategoryList} from '@/api/challenge'
export default {
  components: {
    CategoryCard
  },
  data () {
    return {
      categories: [
        {
          type: 'web',
          name: 'Web',
          icon: 'mdi-web',
          solved: 1,
          total: 233,
          last_update: 'Last 24 Hours'
        },
        {
          type: 'pwn',
          name: 'PWN',
          icon: 'mdi-code-greater-than',
          solved: 1,
          total: 233,
          last_update: 'Last 24 Hours'
        },
        {
          type: 're',
          name: 'RE',
          icon: 'mdi-code-json',
          solved: 1,
          total: 233,
          last_update: 'Last 24 Hours'
        },
        {
          type: 'crypto',
          name: 'Crypto',
          icon: 'mdi-lock',
          solved: 1,
          total: 233,
          last_update: 'Last 24 Hours'
        },
        {
          type: 'misc',
          name: 'MISC',
          icon: 'mdi-atom',
          solved: 1,
          total: 233,
          last_update: 'Last 24 Hours'
        }
      ]
    }
  }
}
</script>

<style>
</style>
