<template>
  <v-container id="user-profile" fluid tag="section">
    <v-row style="height:56px" />
    <v-row justify="center">
      <v-col cols="12" md="8">
        <BaseCard color="#03a9be">
          <template v-slot:heading>
            <template v-if="userInfo.team == null">
              <div class="display-2 font-weight-light">Team</div>
              <div class="subtitle-1 font-weight-light">Create or Join A team</div>
            </template>
            <template v-else>
              <v-row>
                <!-- <v-col cols="4" xs="6" md="2">
                  <v-avatar size="72">
                    <img :src="teamProfile.avatar_url" />
                  </v-avatar>
                </v-col> -->
                <v-col cols="8" xs="6" md="10">
                  <div class="display-2 font-weight-light">{{ teamProfile.name }}</div>
                  <div class="subtitle-1 font-weight-light">Points:{{ teamProfile.points }}</div>
                </v-col>
              </v-row>
            </template>
          </template>

          <v-data-table
            :headers="headers"
            :items="teamProfile.members"
            sort-by="id"
            class="elevation-1"
            style="box-shadow:none !important"
          >
            <template v-slot:top>
              <v-toolbar flat>
                <v-toolbar-title>Team</v-toolbar-title>
                <v-divider class="mx-4" inset vertical />
                <template v-if="userInfo.team != null">
                  <span>Token:{{ teamProfile.token }}</span>
                </template>
                <v-spacer />
                <v-dialog v-if="userInfo.team == null|| isLeader" v-model="createTeamDialog" hide-overlay persistent>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="blue darken-1" text v-bind="attrs" v-on="on">{{ teamFormTitle }}</v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="headline">{{ teamFormTitle }}</span>
                    </v-card-title>

                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12" sm="10" md="8">
                            <v-text-field
                              v-model="editedTeam.name"
                              label="Team Name"
                              prepend-icon="mdi-account-group"
                            />
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer />
                      <v-btn color="blue darken-1" text @click="closeCreateTeamDialog">Cancel</v-btn>
                      <v-btn color="blue darken-1" text @click="createTeam">Create</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <v-dialog
                  v-if="userInfo.team == null"
                  v-model="joinTeamDialog"
                  hide-overlay
                  persistent
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="blue darken-1" text v-bind="attrs" v-on="on">Join Team</v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="headline">Join Team</span>
                    </v-card-title>

                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12" md="8" offset-md="2">
                            <v-text-field
                              v-model="joinTeamInfo.token"
                              label="Team Token"
                              prepend-icon="mdi-key"
                            />
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer />
                      <v-btn color="blue darken-1" text @click="closeJoinTeamDialog">Cancel</v-btn>
                      <v-btn color="blue darken-1" text @click="joinTeam">Join</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <template v-else>
                  <v-btn color="blue darken-1" text @click="dismissTeam">{{ dismissText }}</v-btn>
                </template>
              </v-toolbar>
            </template>
            <template v-slot:item.icon="{ item }">
              <v-icon v-text="item.icon" />
            </template>
            <template v-slot:item.actions="{ item }">
              <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
            </template>
          </v-data-table>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import BaseCard from '@/components/BaseCard.vue'
import { createTeamAPI, updateTeamByIDAPI, getTeamByIDAPI, joinTeamAPI, dismissTeamByIDAPI } from '@/api/team'
export default {
  components: {
    BaseCard
  },
  data() {
    return {
      createTeamDialog: false,
      joinTeamDialog: false,
      headers: [
        {
          text: 'ID',
          align: 'start',
          sortable: true,
          value: 'id'
        },
        {
          text: 'Nickname',
          sortable: false,
          value: 'nickname'
        },
        {
          text: 'Points',
          value: 'points'
        },
      ],
      isLeader: false,
      editedTeam: {
        name: "",
      },
      joinTeamInfo: {
        token: "",
      },
      dismissText: "Dismiss",
      teamFormTitle: "Create A Team",
      teamProfile: {
        name: "",
        token: "",
        solved_amount: 0,
        leader: 0,
        member: [
          {
            id: 0,
            nickname: "",
            points: 0,
          }
        ]
      }
    }
  },
  computed: {
    ...mapGetters('user', ['userInfo'])
  },
  mounted() {
    if (this.userInfo.team != null) {
      this.genTeamInfo()
    }
  },
  methods: {
    ...mapActions('user', ['UpdateUserTeam']),
    closeCreateTeamDialog() {
      this.createTeamDialog = false
    },
    closeJoinTeamDialog() {
      this.joinTeamDialog = false
    },
    async createTeam() {
      if (!this.userInfo.team) {
        const res = await createTeamAPI(this.editedTeam)
        this.UpdateUserTeam(res.data.id)
        this.closeCreateTeamDialog()
        this.genTeamInfo()
      } else {
        const res = await updateTeamByIDAPI(this.userInfo.team,this.editedTeam)
        this.UpdateUserTeam(res.data.id)
        this.closeCreateTeamDialog()
        this.genTeamInfo()
      }
      this.isLeader = true
    },
    async joinTeam() {
      const res = await joinTeamAPI(this.joinTeamInfo)
      console.log(res.data)
      this.UpdateUserTeam(res.data.id)
      this.closeJoinTeamDialog()
    },
    async genTeamInfo() {
      const res = await getTeamByIDAPI(this.userInfo.team)
      this.teamProfile = res.data
      this.editedTeam = {
        name: this.teamProfile.name,
      }
      this.isLeader = this.teamProfile.leader == this.userInfo.id
      if (!this.isLeader) {
        this.dismissText = "Leave"
        this.teamFormTitle = "Create A Team"
      } else {
        this.dismissText = "Dismiss"
        this.teamFormTitle = "Edit"
      }
    },
    async dismissTeam() {
      const res = await dismissTeamByIDAPI(this.userInfo.team);
      this.userInfo.team = null;
      this.teamProfile = {
        name: "",
        token: "",
        solved_amount: 0,
        leader: 0,
        member: [
          {
            id: 0,
            nickname: "",
            points: 0,
          }
        ]
      }
    }
  }
}
</script>