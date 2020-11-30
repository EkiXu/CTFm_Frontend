<template>
  <div>
    <vue-particles
      color="#dedede"
      :particle-opacity="0.8"
      :particles-number="30"
      shape-type="circle"
      :particle-size="12"
      lines-color="#dedede"
      :lines-width="1"
      :line-linked="true"
      :line-opacity="0.4"
      :lines-distance="150"
      :move-speed="2"
      :hover-effect="true"
      hover-mode="grab"
      :click-effect="false"
    />
    <v-container
      class="fill-height warpper"
      fluid
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          sm="8"
          md="4"
        >
          <v-row align="center">
            <v-col align="center">
              <v-alert
                outlined
                type="warning"
                prominent
                border="left"
              >
                404 NOT FOUND
              </v-alert>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Error404'
}
</script>

<style lang="scss" scoped>
.warpper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  display: flex;
}
</style>
