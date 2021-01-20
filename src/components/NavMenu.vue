<template>
  <div>
    <v-app-bar
      app
      height="56px"
      class="nav"
      elevate-on-scroll
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title class="toolbar-title">
        <Breadcrumb />
      </v-toolbar-title>
      <v-spacer />
      <template v-if="accessToken === null">
        <v-btn
          text
          to="/login"
        >
          Login
        </v-btn>
        <v-btn
          text
          to="/register"
        >
          Register
        </v-btn>
      </template>
      <template v-else>
        <v-menu
          left
          open-on-hover
          bottom
        >
          <template #activator="{ on, attrs }">
            <v-btn
              text
              v-bind="attrs"
              v-on="on"
              style="text-transform: unset;"
            >
              {{ userInfo.nickname }}
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              link
              to="/dashboard/profile"
            >
              <v-list-item-title>Profile</v-list-item-title>
            </v-list-item>
            <v-list-item @click="Logout">
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      class="drawer"
      app
    >
      <router-link to="/">
        <div class="drawer_header">
          <h1
            class="font-weight-light"
            v-text="contestInfo.name"
          />
        </div>
      </router-link>
      <template v-if="accessToken != null">
        <v-list-group
          prepend-icon="mdi-view-dashboard"
        >
          <template #activator>
            <v-list-item-content>
              <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item-content>
          </template>
          <template v-if="this.userInfo.is_staff">
            <v-list-item
              href="/admin/"
              target="_blank"
            >
              <v-list-item-action>
                <v-icon>mdi-view-dashboard-variant</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Admin</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
          <v-list-item
            v-for="subItem in dashboard"
            :key="subItem.title"
            :to="subItem.herf"
          >
            <v-list-item-action>
              <v-icon v-text="subItem.icon" />
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="subItem.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </template>
      <v-list>
        <v-list-item
          v-for="subItem in menu"
          :key="subItem.title"
          :to="subItem.herf"
        >
          <v-list-item-action>
            <v-icon v-text="subItem.icon" />
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="subItem.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import client from '@/utils/websocket'
export default {
  name: 'NavMenu',
  props: {
    source: String
  },
  components:{
    Breadcrumb
  },
  data: () => ({
    drawer: null,
    dropdown_menu: ['Profile', 'Logout'],
    isLoggedIn: false,
    menu:[
      {
        title:"Challenges",
        herf:"/category",
        icon:"mdi-flag"
      },
      {
        title:"Notification",
        herf:"/notifications",
        icon:"mdi-bell"
      },
      {
        title:"Scoreboard",
        herf:"/scoreboard",
        icon:"mdi-signal"
      },
      {
        title:"About",
        herf:"/about",
        icon:"mdi-bee-flower"
      },
    ],
    dashboard:[
      {
        title:"Profile",
        herf:"/dashboard/profile",
        icon:"mdi-account"
      }
    ]
  }),
  computed: {
    ...mapGetters('user', ['accessToken','userInfo']),
    ...mapGetters('contest', ['contestInfo']),
  },
  methods: {
    ...mapActions('user', ['Logout']),
    observeNotification(){
      const wsClient = client;
    }
  },
  mounted(){
    this.observeNotification()
  },
  beforeDestroy(){

  }
}
</script>

<style lang="scss" scoped>
.nav{
  &:before
  {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    background: #fff;
    z-index: -1;
  }
  &:after
  {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    background: #fff;
    z-index: -2;
    filter: blur(16px);
  }
  &:before,
  &:after
  {
    background: #00bcd4
  }
}
.drawer{
  a{
    text-decoration: none;
    color: #fff !important;
  }
  .drawer_header{
    margin: 0;
    height: 56px;
    background: #03a9be;
    h1 {
      text-align: center;
      padding: 8px;
    }
  }
}
</style>
