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
            <div class="subtitle-1 font-weight-light">
              Notifications
            </div>
          </template>
          Notifications
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BaseCard from '@/components/BaseCard.vue'
export default {
  components: {
    BaseCard
  }
}
</script>

<style>

</style>
