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

<style>
ul {
  list-style-type: none;
}

li {
  padding: 5px;
  margin: 0px;
}

.list-group-item {
  cursor: move;
}

.flip-list-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}

.sortable-ghost {
  opacity: .5;
  background: #C8EBFB;
}

.sortable-chosen {
  opacity: .5;
  background: #AAAAAF;
}

.sortable-drag {
  opacity: .5;
  background: #C8EBFB;
}
</style>
