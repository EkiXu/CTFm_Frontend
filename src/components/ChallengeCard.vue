<template>
  <v-card
    class="challenge_card"
    @click="doClick"
    color="#028d9e"
  >
    <v-card-title>{{ title }}</v-card-title>
    <v-card-subtitle>{{ summary }}</v-card-subtitle>
    <v-card-actions>
      <div style="display: flex; justify-content: center; align-items: center;">
        <v-icon
          style="font-size: 22px; opacity: 0.8;"
          v-text="solved ? 'mdi-checkbox-marked-circle-outline':'mdi-checkbox-blank-circle-outline'"
        />
        <p class="score">
          {{ solved_amount }}
        </p>
        <p class="points">
          solved
        </p>
        <p class="score">
          /
        </p>
        <p class="score">
          {{ score }}
        </p>
        <p class="points">
          points
        </p>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'ChallengeCard',
  data () {
    return {
      open: false
    }
  },
  props: {
    title: {
      type: String,
      default: undefined
    },
    summary: {
      type: String,
      default: undefined
    },
    origin: {
      type: String,
      default: undefined
    },
    score: {
      type: Number,
      default: undefined
    },
    id: {
      type: Number,
      default: undefined
    },
    solved: {
      type: Boolean,
      default: undefined
    },
    solved_amount:{
      type:Number,
      default:0,
    }
  },
  methods: {
    doClick () {
      this.$router.push({ name: 'challenge', params: { id: this.id } })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.challenge_card .v-card__actions{
  background: #036e7b;
}
.challenge_card{
  margin: 5px 20px;
  .score{
    font-size: 20px;
    font-weight: 700;
    text-shadow: 1px 1px 10px #FFFFFF;
    margin-right: 5px;
    color: #fff;
    font-weight: 400;
    line-height: 1.46429em;
    margin: 0 5px;
    display: block;
  }
  .points {
    font-size: 18px;
    color: #fff;
    font-weight: 400;
    margin: 0 5px;
    line-height: 1.46429em;
  }
  &:hover{
    cursor: pointer;
    box-shadow: 1px 10px 15px #01B99D44;
    background-color: #01b99d;
  }
}
</style>
