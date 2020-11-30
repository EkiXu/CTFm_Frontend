<template>
    <v-breadcrumbs :items="breadList"></v-breadcrumbs>
</template>

<script>
export default {
  name: 'NavMenu',
  props: {
    source: String
  },
  data: () => ({
    breadList: []
  }),
  created () {
    this.getBreadcrumb()
    // console.log(this.userInfo)
  },
  methods: {
    isHome (route) {
      return route.name === 'home'
    },
    getBreadcrumb () {
      const matched = this.$route.matched
      for (const match of matched) {
        var r = {}
        r.text = match.meta.title
        r.href = match.path
        console.log(r)
        this.breadList.push(r)
      }
      console.log(this.breadList)
    }
  }
}
</script>

<style lang="scss">
</style>
