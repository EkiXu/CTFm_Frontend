<template>
  <v-breadcrumbs
    :items="routeList"
    class="breadcrumbs"
  >
    <template #item="{ item }">
      <v-breadcrumbs-item
        :href="item.href"
        :disabled="item.disabled"
        class="breadcrumbs-item"
      >
        <template v-if="item.canExpand">
          <v-menu
            right
            open-on-hover
            bottom
          >
            <template #activator="{ on, attrs }">
              <v-btn
                text
                v-bind="attrs"
                v-on="on"
                v-text="item.text"
              />
            </template>

            <v-list>
              <v-list-item
                v-for="category in categoryList"
                :key="category.name"
                link
                :to="`/category/`+category.name.toLowerCase()"
              >
                <v-list-item-title v-text="category.name.toUpperCase()"/>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
        <template v-else>
          <v-icon v-text="item.icon" />{{ item.text.toUpperCase() }}
        </template>
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Breadcrumb',
  data: () => ({
    iconSet:{
      "category":"mdi-tag",
      "notifications":"mdi-bell",
      "scoreboard":"mdi-signal",
      "about":"mdi-bee-flower",
      "dashboard":"mdi-dashboard",
      "profile":"mdi-account"
    }
  }),
  computed:{
    ...mapGetters('contest', ['categoryList']),
    routeList(){
      if(this.$route.path == "/") return []
      const pathArray = this.$route.path.split("/").splice(1)
      var res = []
      let cur_href = ""
      res.push({
        text:"Home",
        disabled:false,
        href:"/",
        icon:"mdi-home"
      })
      for(let i=0;i<pathArray.length-1;i++){
        cur_href += "/"+pathArray[i]
        res.push({
          text:pathArray[i],
          disabled: pathArray[i] === "challenge".trim() ? true:false,
          href:cur_href,
          icon: this.iconSet[pathArray[i]],
          canExpand: pathArray[i-1] === "category" ? true:false
        })
      }
      res.push({
        text:pathArray[pathArray.length-1],
        disabled: pathArray[pathArray.length-2] === "category" ? false:true,
        icon:this.iconSet[pathArray[pathArray.length-1]],
        canExpand: pathArray[pathArray.length-2] === "category" ? true:false
      })
      return res
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
@media (max-width: 620px){
  .breadcrumbs{
    display: none !important;
  }
}
.breadcrumbs{
  li{
    font-weight: bold;
    a{
      color: #fff !important;
    }
  }
}
</style>
