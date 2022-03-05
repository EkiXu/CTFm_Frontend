<template>
  <v-col cols="12" sm="6" md="7" class="task_panel" style="padding:0px">
    <div class="task_page">
      <div class="task_content">
        <h3 class="task_title" v-text="challenge.title" />
        <p class="content_author">
          Author:
          <a target="_blank">
            <strong v-text="challenge.author"></strong>
          </a>
        </p>
        <div class="content_description">
          <vue-markdown style="overflow-wrap: break-word;" :source="challenge.content" />
        </div>
      </div>
    </div>
    <div class="task_action">
      
      <div class="action_fab">
        <template v-if="challenge.has_dynamic_container">
          <docker-button :url="this.challenge.attachment_url" :challenge_id="challenge.id"/>
        </template>
        <template v-else>
          <attachment-button :url="this.challenge.attachment_url" />
        </template>
      </div>
      <div class="action_header">
        <i class="mdi mdi-console" style="margin-right: 10px;" />submission console
      </div>
      <div class="action_form">
        <div style="padding: 20px 15px;">
          <div class="records" ref="records">
            <vue-typed-js
              v-for="(record,index) in submitRecords"
              :key="index"
              :strings="record"
              :show-cursor="false"
            >
              <p class="typing" style="margin:0px;" />
            </vue-typed-js>
          </div>
          <input
            type="text"
            placeholder="flag{...}"
            class="flag_input"
            v-model="challenge.flag"
            @keyup.enter="submitFlag"
          />
        </div>
      </div>
    </div>
  </v-col>
</template>

<script>
import {
  getChallengeByIDAPI,
  checkChallengeFlagByIDAPI
} from "@/api/challenge";
import AttachmentButton from "@/components/AttachmentButton.vue";
import DockerButton from '@/components/DockerButton.vue';
export default {
  components: { AttachmentButton,DockerButton },
  name: "Challenge",
  data() {
    return {
      showCur: true,
      submitRecords: [["> Paste flag in the input below and press enter."]],
      challenge: {
        name: "",
        author: "",
        content: "",
        id: 0,
        points: 0,
        category: ""
      }
    };
  },
  mounted() {
    try {
      document.getElementsByName("challenges_panel")[0].className += " hidden";
    } catch (e) {}
  },
  beforeDestroy: function() {
    try {
      var classes = document.getElementsByName("challenges_panel")[0];
      classes.className = classes.className.replaceAll("hidden", "");
    } catch (e) {}
  },
  methods: {
    async getInfo() {
      const res = await getChallengeByIDAPI(this.$route.params.id);
      this.challenge = res.data;
    },
    async submitFlag() {
      let data = { flag: this.challenge.flag };
      //this.submitRecords.push(['> The provided flg does not seem to be valid :('])
      try {
        const res = await checkChallengeFlagByIDAPI(
          data,
          this.$route.params.id
        );
        this.submitRecords.push([
          "> ✓ I am most impressed by your efforts. You solved the task"
        ]);
      } catch (error) {
        console.log(error);
        this.submitRecords.push([`> ✗ ${error.message}`]);
      }
      var records = document.getElementsByClassName("records")[0];
      this.$nextTick(() => {
        setTimeout(() => {
          records.scrollTop = records.scrollHeight;
        }, 200);
      });
    }
  },
  watch: {
    $route(to, from) {
      this.getInfo();
    }
  },
  created() {
    this.getInfo();
  }
};
</script>

<style lang="scss">
@media (max-width: 600px) {
  .hidden {
    display: none;
  }
}
.task_panel {
  display: flex;
  flex-direction: column;
  background-color: #253d4d;
  box-sizing: border-box;
  height: 100%;
  .task_page {
    height: calc(100% - 210px);
    overflow: hidden;
    .task_content {
      padding: 3em;
      height: 100%;
      overflow: auto;
      img {
        max-width: 100%;
      }
      .task_title {
        font-size: 48px;
      }
    }
  }
  .task_action {
    display: flex;
    overflow: hidden;
    box-shadow: 0px -2px 40px #00000033;
    transition: height 400ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    flex-direction: column;
    background-color: #1a1b1c;
    height: 240px;
    bottom: 0;
    .action_fab {
      position: absolute;
      right: 6%;
      bottom: 206px;
    }
    .action_header {
      width: 100%;
      color: #0aeecc;
      height: 34px;
      display: flex;
      box-sizing: border-box;
      align-items: center;
      padding-left: 15px;
      background-color: #132b39;
    }
    .records {
      margin-bottom: 15px;
      height: 72px;
      overflow: auto;
    }
    .typing {
      font-family: source-code-pro, Menlo, Monaco, Consolas, Courier New,
        monospace;
      font-weight: 400;
      line-height: 24px;
    }
    .flag_input {
      width: 100%;
      height: 100%;
      color: white;
      height: 45px;
      outline: none;
      padding: 10px;
      font-size: 16px;
      box-shadow: 0px 4px 20px #00000055;
      box-sizing: border-box;
      border-style: none;
      border-radius: 5px;
      background-color: #132b39;
    }
  }
}
</style>
