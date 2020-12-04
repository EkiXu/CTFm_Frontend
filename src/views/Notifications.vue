<template>
  <v-container>
    <v-row style="height:48px" />
    <v-row justify="center">
      <v-col
        cols="12"
        md="8"
      >
        <BaseCard color="#03a9be">
          <template v-slot:heading>
            <div class="display-2 font-weight-light">
              Notifications
            </div>
            <div class="subtitle-1 font-weight-light" />
          </template>
          <v-list three-line>
            <template v-for="(item, index) in notifications">
              <v-divider
                :key="index"
                :inset="item.inset"
              />
              <v-list-item
                :key="item.title"
              >
                <v-list-item-avatar>
                  <v-icon
                    v-text="item.type_icon"
                  />
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title v-html="item.title" />
                  <v-list-item-subtitle v-html="item.content" />
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BaseCard from '@/components/BaseCard.vue'
import {getNotificationListAPI } from '@/api/notification'
export default {
  components: {
    BaseCard
  },
  data(){
    return {
      notifications:[]
    }
  },
  created() {
    
  },
  destroyed() {

  },
  methods:{
    async genNotificationList(){
      const res = await getNotificationListAPI()
      this.notifications = res.data
    }
  },
  created(){
    this.genNotificationList()
  }
}
</script>

<style>

</style>
