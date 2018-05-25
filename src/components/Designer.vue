<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex d-flex xs12 sm6 md4>
        <designer-components color="purple" dark/>
      </v-flex>
      <v-flex d-flex xs12 sm6 md3>
        <device-view/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import DeviceView from './DeviceView'
import DesignerComponents from './DesignerComponents'
export default {
  components: {DesignerComponents, DeviceView}
}
</script>

<style scoped>

</style>
